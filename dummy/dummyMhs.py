import random

jurusan_list = ['Teknik Informatika', 'Sistem Informasi', 'Manajemen Informatika']
jenis_kelamin_list = ['Laki-laki', 'Perempuan']
names_list = [
    'Risa', 'Budi', 'Ariel', 'Aulia', 'Iriana', 'Habibie', 'Son', 'Haji', 'Gibran', 'Joko',
    'Boy', 'Dean', 'Krisna', 'Nina', 'Yoga', 'Putri', 'Jagoan', 'Rama', 'Raden', 'Nayla',
    # Add more name variations as needed
]

with open("insert_mahasiswa.sql", "w") as file:
    file.write("INSERT INTO mahasiswa (nim, nama, jurusan, jenisKelamin, IPS, IPK) VALUES\n")
    for i in range(1, 1001):
        id_mhs = i
        nim = 21010000 + i
        nama = f"{random.choice(names_list)} {random.choice(['Agnia', 'Brahmanda', 'Asta', 'Juniartha', 'Widodo', 'Rakabuming', 'Subianto', 'Tatum'])}"
        jurusan = random.choice(jurusan_list)
        jenis_kelamin = random.choice(jenis_kelamin_list)
        ips = round(random.uniform(2.0, 4.0), 2)  # IPS dengan nilai antara 2.0 hingga 4.0
        ipk = round(random.uniform(2.0, 4.0), 2)  # IPK dengan nilai antara 2.0 hingga 4.0
        line = f"('{nim}', '{nama}', '{jurusan}', '{jenis_kelamin}', {ips}, {ipk})"
        
        if i < 1000:
            line += ",\n"
        else:
            line += ";\n"
        file.write(line)
