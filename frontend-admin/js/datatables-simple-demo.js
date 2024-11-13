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

// Fungsi untuk menampilkan detail mata kuliah
async function showMataKuliah(id) {
  const mahasiswa = await getIpkMhsByNim(id);
  const krsMhs = await getKrsMhs(id);
  console.log(mahasiswa);
  console.log(krsMhs);
  if (mahasiswa && krsMhs) {
    // Update judul di atas tabel
    document.getElementById(
      "nilaiIPK"
    ).textContent = `IPK : ${mahasiswa.cumulativeIPK} `;
    document.getElementById("nilaiIPS").textContent = `IPS : -`;
    document.querySelector("h1.mt-4").textContent = `${mahasiswa.nama}`;
    document.querySelector(
      ".breadcrumb-item.active"
    ).textContent = `${mahasiswa.nim}`;

    // Dapatkan referensi ke tabel
    const table = document.getElementById("datatablesSimple");
    const tbody = table.querySelector("tbody");

    // Kosongkan tbody
    tbody.innerHTML = "";

    // Get paginated mata kuliah data
    const paginatedMataKuliah = paginate(krsMhs, ITEMS_PER_PAGE, currentPage);

    // Tambahkan data mata kuliah ke tabel
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

    // Tambahkan tombol kembali
    const cardHeader = document.querySelector(".card-header");
    if (!document.getElementById("backButton")) {
      const backButton = document.createElement("button");
      backButton.id = "backButton";
      backButton.className = "btn btn-secondary btn-sm float-end";
      backButton.innerHTML = "Kembali";
      backButton.onclick = () => {
        window.location.href = "index.html";
      };
      cardHeader.appendChild(backButton);
    }

    // Buat kontrol pagination untuk mata kuliah
    const cardBody = table.closest(".card-body");
    const existingPagination = cardBody.querySelector(".pagination-container");
    if (existingPagination) {
      existingPagination.remove();
    }
    // createPaginationControls(ma.length, cardBody);

    // Reinisialisasi DataTable dengan opsi pagination dimatikan
    const existingDataTable = table.closest(".dataTable-container");
    if (existingDataTable) {
      existingDataTable.parentNode.replaceChild(table, existingDataTable);
    }
    new simpleDatatables.DataTable(table, {
      perPageSelect: false,
      perPage: ITEMS_PER_PAGE,
    });
  }
}
