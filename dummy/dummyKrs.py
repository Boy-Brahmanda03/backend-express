import random

# Daftar NIM mahasiswa dalam rentang 21010001 hingga 21011000
nim_list = list(range(21010001, 21011001))  # Rentang NIM dari 21010001 hingga 21011000

# Menyiapkan daftar kode mata kuliah untuk 7 mata kuliah setiap semester (semester 1 hingga 7 saja)
kode_mk_by_semester = {
    1: ['TI101', 'TI102', 'TI103', 'TI104', 'TI105', 'TI106', 'TI107'],
    2: ['TI108', 'TI109', 'TI110', 'TI111', 'TI112', 'TI113', 'TI114'],
    3: ['TI115', 'TI116', 'TI117', 'TI118', 'TI119', 'TI120', 'TI121'],
    4: ['TI122', 'TI123', 'TI124', 'TI125', 'TI126', 'TI127', 'TI128'],
    5: ['TI129', 'TI130', 'TI131', 'TI132', 'TI133', 'TI134', 'TI135'],
    6: ['TI136', 'TI137', 'TI138', 'TI139', 'TI140', 'TI141', 'TI142'],
    7: ['TI143', 'TI144', 'TI145', 'TI146', 'TI147', 'TI148', 'TI149']
}

# Mapping tahun awal untuk setiap semester
semester_tahun = {
    1: 2021,
    2: 2022,
    3: 2022,
    4: 2023,
    5: 2023,
    6: 2024,
    7: 2024
}

# Membagi NIM mahasiswa menjadi tiga bagian untuk menghindari ukuran file terlalu besar
nim_list_part1 = nim_list[:333]   # NIM dari 21010001 hingga 21010333
nim_list_part2 = nim_list[333:666] # NIM dari 21010334 hingga 21010666
nim_list_part3 = nim_list[666:]    # NIM dari 21010667 hingga 21011000

# Fungsi untuk menulis data ke file SQL
def write_krs_to_file(nim_subset, filename):
    with open(filename, "w") as file:
        file.write("INSERT INTO krs (kodeMk, semesterKRS, nim, tahun, nilai, bobot) VALUES\n")
        
        for nim in nim_subset:
            for semester in range(1, 8):  # Mengisi data untuk semester 1 hingga 7
                tahun = semester_tahun[semester]  # Mendapatkan tahun awal berdasarkan semester
                mata_kuliah_semester = kode_mk_by_semester[semester]
                for kodeMk in mata_kuliah_semester:
                    nilai = round(random.uniform(2.0, 4.0), 2)  # Nilai acak antara 2.0 hingga 4.0
                    # Menentukan bobot berdasarkan nilai
                    if nilai >= 3.75:
                        bobot = 4.0
                    elif nilai >= 3.0:
                        bobot = 3.0
                    elif nilai >= 2.0:
                        bobot = 2.0
                    else:
                        bobot = 1.0

                    # Menulis baris data ke file
                    line = f"('{kodeMk}', {semester}, '{nim}', {tahun}, {nilai}, {bobot})"
                    if nim == nim_subset[-1] and semester == 7 and kodeMk == mata_kuliah_semester[-1]:
                        line += ";\n"  # Baris terakhir diakhiri dengan ";"
                    else:
                        line += ",\n"
                    file.write(line)

# Menulis data untuk bagian pertama
write_krs_to_file(nim_list_part1, "insert_krs_part1.sql")

# Menulis data untuk bagian kedua
write_krs_to_file(nim_list_part2, "insert_krs_part2.sql")

# Menulis data untuk bagian ketiga
write_krs_to_file(nim_list_part3, "insert_krs_part3.sql")
