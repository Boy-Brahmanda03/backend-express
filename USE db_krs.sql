USE db_krs;

CREATE TABLE mata_kuliah (
    kodeMk VARCHAR(10) PRIMARY KEY,
    mataKuliah VARCHAR(255),
    sks INT,
    jenisMk VARCHAR(50),
    semesterMk INT
);

CREATE TABLE mahasiswa (
    id_mhs INT PRIMARY KEY,
    nim INT,
    nama VARCHAR(255),
    jurusan VARCHAR(255),
    jenisKelamin VARCHAR(50)
);

CREATE TABLE krs (
    kodeMk VARCHAR(10),
    semesterKRS VARCHAR(50),
    id_mhs INT,
    nilai INT,
    bobot VARCHAR(2),
    PRIMARY KEY (kodeMk, semesterKRS, id_mhs),
    FOREIGN KEY (kodeMk) REFERENCES mata_kuliah(kodeMk),
    FOREIGN KEY (id_mhs) REFERENCES mahasiswa(id_mhs)
);

INSERT INTO db_krs.mahasiswa (id_mhs, nim, nama, jurusan, jenisKelamin) VALUES
(1, 2101001, 'Ahmad Setiawan', 'Teknik Informatika', 'Laki-laki'),
(2, 2101002, 'Budi Santoso', 'Sistem Informasi', 'Laki-laki'),
(3, 2101003, 'Citra Dewi', 'Teknik Informatika', 'Perempuan'),
(4, 2101004, 'Dewi Lestari', 'Manajemen Informatika', 'Perempuan'),
(5, 2101005, 'Eko Prasetyo', 'Teknik Informatika', 'Laki-laki'),
(6, 2101006, 'Fajar Kurniawan', 'Sistem Informasi', 'Laki-laki'),
(7, 2101007, 'Gita Ayu', 'Manajemen Informatika', 'Perempuan'),
(8, 2101008, 'Hadi Purnomo', 'Teknik Informatika', 'Laki-laki'),
(9, 2101009, 'Indah Sari', 'Sistem Informasi', 'Perempuan'),
(10, 2101010, 'Joko Susanto', 'Teknik Informatika', 'Laki-laki'),
(11, 2101011, 'Kartika Dewi', 'Manajemen Informatika', 'Perempuan'),
(12, 2101012, 'Lukman Hakim', 'Sistem Informasi', 'Laki-laki'),
(13, 2101013, 'Maya Sari', 'Teknik Informatika', 'Perempuan'),
(14, 2101014, 'Nina Putri', 'Sistem Informasi', 'Perempuan'),
(15, 2101015, 'Oscar Widodo', 'Teknik Informatika', 'Laki-laki'),
(16, 2101016, 'Putri Amelia', 'Manajemen Informatika', 'Perempuan'),
(17, 2101017, 'Qori Maulana', 'Teknik Informatika', 'Laki-laki'),
(18, 2101018, 'Rama Wijaya', 'Sistem Informasi', 'Laki-laki'),
(19, 2101019, 'Siti Rahma', 'Manajemen Informatika', 'Perempuan'),
(20, 2101020, 'Taufik Hidayat', 'Teknik Informatika', 'Laki-laki');