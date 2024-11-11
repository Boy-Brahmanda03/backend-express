import random

mata_kuliah_list = [
    # Semester 1 (Total: 20 SKS)
    ('TI101', 'Algoritma dan Pemrograman', 3, 'Wajib', 1),
    ('TI102', 'Matematika Diskrit', 3, 'Wajib', 1),
    ('TI103', 'Organisasi Komputer', 3, 'Wajib', 1),
    ('TI104', 'Etika Profesi TI', 2, 'Wajib', 1),
    ('TI105', 'Kalkulus', 3, 'Wajib', 1),
    ('TI106', 'Logika Informatika', 3, 'Pilihan', 1),
    ('TI107', 'Pengantar Teknologi Informasi', 3, 'Pilihan', 1),

    # Semester 2 (Total: 20 SKS)
    ('TI108', 'Struktur Data', 3, 'Wajib', 2),
    ('TI109', 'Arsitektur Komputer', 3, 'Wajib', 2),
    ('TI110', 'Sistem Basis Data', 3, 'Wajib', 2),
    ('TI111', 'Pemrograman Berorientasi Objek', 3, 'Wajib', 2),
    ('TI112', 'Statistik untuk Ilmu Komputer', 3, 'Wajib', 2),
    ('TI113', 'Fisika Komputasi', 3, 'Pilihan', 2),
    ('TI114', 'Algoritma dan Pemrograman Lanjutan', 2, 'Pilihan', 2),

    # Semester 3 (Total: 20 SKS)
    ('TI115', 'Sistem Operasi', 3, 'Wajib', 3),
    ('TI116', 'Analisis dan Desain Sistem', 3, 'Wajib', 3),
    ('TI117', 'Teori Bahasa dan Automata', 3, 'Wajib', 3),
    ('TI118', 'Analisis Data', 3, 'Wajib', 3),
    ('TI119', 'Pemrograman Visual', 3, 'Pilihan', 3),
    ('TI120', 'Dasar Kecerdasan Buatan', 3, 'Pilihan', 3),
    ('TI121', 'Logika Pemrograman', 2, 'Pilihan', 3),

    # Semester 4 (Total: 20 SKS)
    ('TI122', 'Jaringan Komputer', 3, 'Wajib', 4),
    ('TI123', 'Pemrograman Basis Data', 3, 'Wajib', 4),
    ('TI124', 'Manajemen Basis Data', 3, 'Wajib', 4),
    ('TI125', 'Sistem Informasi Manajemen', 3, 'Wajib', 4),
    ('TI126', 'Pengantar Data Science', 3, 'Wajib', 4),
    ('TI127', 'Pemrograman Python', 3, 'Pilihan', 4),
    ('TI128', 'Pengembangan Aplikasi Desktop', 2, 'Pilihan', 4),

    # Semester 5 (Total: 20 SKS)
    ('TI129', 'Data Mining', 3, 'Pilihan', 5),
    ('TI130', 'Keamanan Jaringan', 3, 'Pilihan', 5),
    ('TI131', 'Pemrograman Web Lanjutan', 3, 'Pilihan', 5),
    ('TI132', 'Pemrograman Jaringan', 3, 'Pilihan', 5),
    ('TI133', 'Analisis Kebutuhan Sistem', 3, 'Wajib', 5),
    ('TI134', 'Metode Numerik', 3, 'Wajib', 5),
    ('TI135', 'Desain UI/UX', 2, 'Pilihan', 5),

    # Semester 6 (Total: 20 SKS)
    ('TI136', 'Pengantar Kecerdasan Buatan', 3, 'Wajib', 6),
    ('TI137', 'Pengantar Machine Learning', 3, 'Wajib', 6),
    ('TI138', 'Cloud Computing', 3, 'Pilihan', 6),
    ('TI139', 'Sistem Informasi Geografis', 3, 'Pilihan', 6),
    ('TI140', 'Analitik Bisnis', 3, 'Pilihan', 6),
    ('TI141', 'Kecerdasan Buatan', 3, 'Wajib', 6),
    ('TI142', 'Data Visualization', 2, 'Pilihan', 6),

    # Semester 7 (Total: 20 SKS)
    ('TI143', 'Keamanan Informasi', 3, 'Wajib', 7),
    ('TI144', 'Audit Sistem Informasi', 3, 'Wajib', 7),
    ('TI145', 'Pengolahan Sinyal Digital', 3, 'Pilihan', 7),
    ('TI146', 'E-Commerce', 3, 'Pilihan', 7),
    ('TI147', 'Metodologi Penelitian TI', 2, 'Wajib', 7),
    ('TI148', 'Pengenalan Teknologi Blockchain', 3, 'Pilihan', 7),
    ('TI149', 'Big Data Processing', 3, 'Pilihan', 7),

    # Semester 8 (Total: 20 SKS)
    ('TI150', 'Pemrograman Game', 3, 'Pilihan', 8),
    ('TI151', 'Robotika', 3, 'Pilihan', 8),
    ('TI152', 'Algoritma Genetika', 3, 'Pilihan', 8),
    ('TI153', 'Sistem Terdistribusi', 3, 'Wajib', 8),
    ('TI154', 'Kecerdasan Buatan Lanjutan', 3, 'Pilihan', 8),
    ('TI155', 'Internet of Things', 3, 'Pilihan', 8),
    ('TI156', 'Machine Learning for Robotics', 2, 'Pilihan', 8)
]

with open("insert_mata_kuliah.sql", "w") as file:
    file.write("INSERT INTO mata_kuliah (kodeMk, mataKuliah, sks, jenisMk, semesterMk) VALUES\n")
    for i, mk in enumerate(mata_kuliah_list):
        line = f"('{mk[0]}', '{mk[1]}', {mk[2]}, '{mk[3]}', {mk[4]})"
        if i < len(mata_kuliah_list) - 1:
            line += ",\n"
        else:
            line += ";\n"
        file.write(line)