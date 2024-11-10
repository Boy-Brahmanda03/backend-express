# Python code to generate SQL for 1000 entries
import random

jurusan_list = ['Teknik Informatika', 'Sistem Informasi', 'Manajemen Informatika']
jenis_kelamin_list = ['Laki-laki', 'Perempuan']
names_list = [
    'Ahmad', 'Budi', 'Citra', 'Dewi', 'Eko', 'Fajar', 'Gita', 'Hadi', 'Indah', 'Joko',
    'Kartika', 'Lukman', 'Maya', 'Nina', 'Oscar', 'Putri', 'Qori', 'Rama', 'Siti', 'Taufik',
    # Add more name variations as needed
]

with open("insert_mahasiswa.sql", "w") as file:
    file.write("INSERT INTO mahasiswa (id_mhs, nim, nama, jurusan, jenisKelamin) VALUES\n")
    for i in range(1, 1001):
        id_mhs = i
        nim = 21010000 + i
        nama = f"{random.choice(names_list)} {random.choice(['Setiawan', 'Santoso', 'Dewi', 'Lestari', 'Prasetyo'])}"
        jurusan = random.choice(jurusan_list)
        jenis_kelamin = random.choice(jenis_kelamin_list)
        line = f"({id_mhs}, {nim}, '{nama}', '{jurusan}', '{jenis_kelamin}')"
        if i < 1000:
            line += ",\n"
        else:
            line += ";\n"
        file.write(line)


