window.addEventListener("DOMContentLoaded", (event) => {
  // Simple-DataTables
  // https://github.com/fiduswriter/Simple-DataTables/wiki

  const datatablesSimple = document.getElementById("datatablesSimple");
  if (datatablesSimple) {
    new simpleDatatables.DataTable(datatablesSimple);
  }
});

// Konfigurasi pagination
const ITEMS_PER_PAGE = 10;
let currentPage = 1;

// Fungsi untuk menampilkan daftar mahasiswa
window.addEventListener("DOMContentLoaded", (event) => {
  // Cek apakah ada parameter ID di URL
  const urlParams = new URLSearchParams(window.location.search);
  const studentId = urlParams.get("nim");
  currentPage = parseInt(urlParams.get("page")) || 1;

  if (studentId) {
    // Jika ada ID, tampilkan detail mata kuliah
    showMataKuliah(studentId);
  } else {
    // Jika tidak ada ID, tampilkan daftar mahasiswa
    initializeMahasiswaTable();
  }
});

// Fungsi untuk mengatur pagination
function paginate(items, itemsPerPage, pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
}

// Fungsi untuk membuat kontrol pagination
function createPaginationControls(totalItems, container) {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const paginationContainer = document.createElement("div");
  paginationContainer.className =
    "pagination-container d-flex justify-content-end mt-3";

  // Define urlParams to retrieve URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // Previous button
  const prevButton = document.createElement("button");
  prevButton.className = "btn btn-outline-primary btn-sm me-2";
  prevButton.innerHTML = "&laquo; Previous";
  prevButton.disabled = currentPage === 1;
  prevButton.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      updateURLWithPage(currentPage);
      if (urlParams.get("nim")) {
        showMataKuliah();
      }
      initializeMahasiswaTable();
    }
  };

  // Next button
  const nextButton = document.createElement("button");
  nextButton.className = "btn btn-outline-primary btn-sm";
  nextButton.innerHTML = "Next &raquo;";
  nextButton.disabled = currentPage >= totalPages;
  nextButton.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateURLWithPage(currentPage);
      initializeMahasiswaTable();
    }
  };

  // Page info
  const pageInfo = document.createElement("span");
  pageInfo.className = "mx-3 align-self-center";
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(pageInfo);
  paginationContainer.appendChild(nextButton);
  container.appendChild(paginationContainer);
}

// Fungsi untuk update URL dengan parameter page
function updateURLWithPage(page) {
  const url = new URL(window.location.href);
  url.searchParams.set("page", page);
  window.history.pushState({}, "", url);
}

async function getMahasiswa() {
  const url = "http://localhost:3001/api/mahasiswa";
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function getIpkMhsByNim(nim) {
  var url = `http://localhost:3001/api/mahasiswa/nim/${nim}`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function getKrsMhs(nim) {
  var url = `http://localhost:3001/api/mahasiswa/krs/${nim}`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

// Fungsi untuk menampilkan tabel mahasiswa
async function initializeMahasiswaTable() {
  const mainTable = document.getElementById("datatablesSimple");
  const tbody = mainTable.querySelector("tbody");
  tbody.innerHTML = ""; // Bersihkan tabel

  const mahasiswa = await getMahasiswa();

  console.log("test : ", mahasiswa);
  // Get paginated data
  const paginatedData = paginate(mahasiswa, ITEMS_PER_PAGE, currentPage);

  // Tampilkan data mahasiswa
  paginatedData.forEach((mhs, index) => {
    const row = document.createElement("tr");
    console.log("dalam loop" + mhs);
    row.innerHTML = `
            <td>${(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
            <td>${mhs.nama}</td>
            <td>${mhs.nim}</td>
            <td>
                <a href="tables.html?nim=${
                  mhs.nim
                }" class="btn btn-primary btn-sm">
                    Details
                </a>
            </td>
        `;
    tbody.appendChild(row);
  });

  // Buat kontrol pagination
  const cardBody = mainTable.closest(".card-body");
  // Hapus pagination controls yang sudah ada (jika ada)
  const existingPagination = cardBody.querySelector(".pagination-container");
  if (existingPagination) {
    existingPagination.remove();
  }
  createPaginationControls(mahasiswa.length, cardBody);

  // Inisialisasi DataTable dengan opsi pagination dimatikan
  if (!mainTable.classList.contains("dataTable-table")) {
    new simpleDatatables.DataTable(mainTable, {
      perPageSelect: false,
      perPage: ITEMS_PER_PAGE,
    });
  }
}

// Function to initialize the event listener on the dropdown
// Function to initialize the event listener on the dropdown
async function showMataKuliah(id, selectedValue) {
  try {
    const mahasiswa = await getIpkMhsByNim(id); // Fetch student data based on the ID
    const krsMhs = await getKrsMhs(id); // Fetch KRS data for the student based on the ID
    console.log("Mahasiswa Data: ", mahasiswa);
    console.log("KRS Data: ", krsMhs);

    // Filter the KRS data based on the selected semester (selectedValue)
    const filteredKrsMhs = krsMhs.filter((mk) => {
      const semesterValue = mk.semesterMk; // The semester value from the data
      console.log(
        `Filtering: semesterMk = ${semesterValue}, selectedValue = ${selectedValue}`
      );
      // Compare both values as strings
      return String(semesterValue).trim() === String(selectedValue).trim();
    });

    // Calculate IPS for the filtered courses
    const IPS = calculateIPS(filteredKrsMhs);

    if (mahasiswa && krsMhs) {
      // Update header info
      document.getElementById(
        "nilaiIPK"
      ).textContent = `IPK : ${mahasiswa.cumulativeIPK}`;
      document.getElementById("nilaiIPS").textContent = `IPS : ${IPS}`;
      document.querySelector("h1.mt-4").textContent = `${mahasiswa.nama}`;
      document.querySelector(
        ".breadcrumb-item.active"
      ).textContent = `${mahasiswa.nim}`;

      // Get table reference
      const table = document.getElementById("datatablesSimple");
      const tbody = table.querySelector("tbody");

      // Clear existing table rows
      tbody.innerHTML = "";

      // If no data matches the filter, display a message
      if (filteredKrsMhs.length === 0) {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="6">Semester belum diambil</td>`;
        tbody.appendChild(row);
      } else {
        // Paginate and populate the table with filtered data
        const paginatedMataKuliah = paginate(
          filteredKrsMhs,
          ITEMS_PER_PAGE,
          currentPage
        );

        paginatedMataKuliah.forEach((mk, i) => {
          const row = document.createElement("tr");
          row.innerHTML = `
			  <td>${i + 1}</td>
			  <td>${mk.kodeMk}</td>
			  <td>${mk.mataKuliah}</td>
			  <td>${mk.semesterMk}</td>
			  <td>${mk.sks}</td>
			  <td>${mk.nilai}</td>
			`;
          tbody.appendChild(row);
        });
      }
    } else {
      console.error("Mahasiswa or KRS data is missing.");
    }
  } catch (error) {
    console.error("Error occurred: ", error);
  }
}

// Function to calculate IPS for the filtered courses
function calculateIPS(filteredKrsMhs) {
  // Sum up SKS * Nilai for each mata kuliah
  let totalBobot = 0;
  let totalSks = 0;

  filteredKrsMhs.forEach((mk) => {
    const bobot = mk.sks * mk.bobot; // SKS * Nilai for each course
    totalBobot += bobot;
    totalSks += mk.sks; // Sum of SKS
  });

  // Calculate IPS
  const IPS = totalBobot / totalSks;

  // Return the result, rounded to two decimal places
  return IPS.toFixed(2);
}

// Initialize dropdown listener when the document is ready
document.addEventListener("DOMContentLoaded", function () {
  const nim = "21010001"; // Replace with the actual student ID or a dynamic way to retrieve it
  initializeDropdownListener(nim); // Start listening for changes in the dropdown for the specific student ID
});

// Function to initialize the event listener on the dropdown
function initializeDropdownListener(nim) {
  const dropdown = document.getElementById("ddlViewBy");

  if (!dropdown) {
    console.error("Dropdown element with id 'ddlViewBy' not found.");
    return;
  }

  // Event listener to trigger when the dropdown value changes
  dropdown.addEventListener("change", function () {
    const selectedValue = dropdown.value;
    console.log("Dropdown value changed: ", selectedValue); // For debugging
    showMataKuliah(nim, selectedValue); // Trigger the function with the student id and selected semester
  });
}
