window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

// Data mahasiswa dengan detail nilai mata kuliah
const mahasiswaData = {
    "mahasiswa": [
        {
            "id": "2021020001",
            "detail": {
                "nama": "Mahasiswa 1",
                "nim": "2021020001",
                "ips": [
                    3.57,
                    3.89,
                    3.97,
                    3.56
                ],
                "ipk": 3.97,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 77,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 81,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 86,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020002",
            "detail": {
                "nama": "Mahasiswa 2",
                "nim": "2021020002",
                "ips": [
                    3.64,
                    3.81,
                    3.52,
                    3.94
                ],
                "ipk": 3.69,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 85,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 87,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 75,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020003",
            "detail": {
                "nama": "Mahasiswa 3",
                "nim": "2021020003",
                "ips": [
                    3.88,
                    3.85,
                    3.78,
                    3.51
                ],
                "ipk": 3.92,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 80,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 86,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 75,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020004",
            "detail": {
                "nama": "Mahasiswa 4",
                "nim": "2021020004",
                "ips": [
                    3.83,
                    3.78,
                    3.59,
                    3.97
                ],
                "ipk": 3.91,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 81,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 93,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 90,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020005",
            "detail": {
                "nama": "Mahasiswa 5",
                "nim": "2021020005",
                "ips": [
                    3.99,
                    3.81,
                    3.68,
                    3.86
                ],
                "ipk": 3.57,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 78,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 93,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020006",
            "detail": {
                "nama": "Mahasiswa 6",
                "nim": "2021020006",
                "ips": [
                    3.9,
                    3.74,
                    3.98,
                    3.55
                ],
                "ipk": 3.75,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 84,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 75,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 89,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020007",
            "detail": {
                "nama": "Mahasiswa 7",
                "nim": "2021020007",
                "ips": [
                    3.56,
                    3.75,
                    3.57,
                    3.72
                ],
                "ipk": 3.63,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 95,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 82,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 78,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020008",
            "detail": {
                "nama": "Mahasiswa 8",
                "nim": "2021020008",
                "ips": [
                    3.91,
                    3.83,
                    3.91,
                    3.84
                ],
                "ipk": 3.6,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 87,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 77,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020009",
            "detail": {
                "nama": "Mahasiswa 9",
                "nim": "2021020009",
                "ips": [
                    3.6,
                    3.54,
                    3.71,
                    3.84
                ],
                "ipk": 3.61,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 85,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 86,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 75,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020010",
            "detail": {
                "nama": "Mahasiswa 10",
                "nim": "2021020010",
                "ips": [
                    3.88,
                    3.72,
                    3.57,
                    3.8
                ],
                "ipk": 3.77,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 97,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 84,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 75,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020011",
            "detail": {
                "nama": "Mahasiswa 11",
                "nim": "2021020011",
                "ips": [
                    3.72,
                    3.77,
                    3.98,
                    3.62
                ],
                "ipk": 3.91,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 81,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 92,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 85,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020012",
            "detail": {
                "nama": "Mahasiswa 12",
                "nim": "2021020012",
                "ips": [
                    3.71,
                    3.9,
                    3.92,
                    3.93
                ],
                "ipk": 3.9,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 95,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 76,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020013",
            "detail": {
                "nama": "Mahasiswa 13",
                "nim": "2021020013",
                "ips": [
                    3.96,
                    3.94,
                    3.74,
                    3.82
                ],
                "ipk": 3.64,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 99,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 95,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 94,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020014",
            "detail": {
                "nama": "Mahasiswa 14",
                "nim": "2021020014",
                "ips": [
                    3.65,
                    3.97,
                    3.89,
                    3.68
                ],
                "ipk": 3.6,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 76,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 95,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 87,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020015",
            "detail": {
                "nama": "Mahasiswa 15",
                "nim": "2021020015",
                "ips": [
                    3.64,
                    3.99,
                    3.81,
                    3.72
                ],
                "ipk": 3.51,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 93,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 94,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020016",
            "detail": {
                "nama": "Mahasiswa 16",
                "nim": "2021020016",
                "ips": [
                    3.88,
                    3.69,
                    3.8,
                    3.82
                ],
                "ipk": 3.69,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 80,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 84,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 94,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020017",
            "detail": {
                "nama": "Mahasiswa 17",
                "nim": "2021020017",
                "ips": [
                    3.54,
                    3.8,
                    3.85,
                    3.77
                ],
                "ipk": 3.67,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 91,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 88,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 99,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020018",
            "detail": {
                "nama": "Mahasiswa 18",
                "nim": "2021020018",
                "ips": [
                    3.98,
                    3.8,
                    3.82,
                    3.94
                ],
                "ipk": 4.0,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 86,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 79,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 100,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020019",
            "detail": {
                "nama": "Mahasiswa 19",
                "nim": "2021020019",
                "ips": [
                    3.53,
                    3.56,
                    3.96,
                    3.8
                ],
                "ipk": 3.64,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 76,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 77,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 90,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020020",
            "detail": {
                "nama": "Mahasiswa 20",
                "nim": "2021020020",
                "ips": [
                    3.64,
                    3.78,
                    3.64,
                    3.75
                ],
                "ipk": 3.68,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 98,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 83,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 89,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020021",
            "detail": {
                "nama": "Mahasiswa 21",
                "nim": "2021020021",
                "ips": [
                    3.72,
                    3.76,
                    3.78,
                    3.96
                ],
                "ipk": 3.61,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 82,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 89,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 99,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020022",
            "detail": {
                "nama": "Mahasiswa 22",
                "nim": "2021020022",
                "ips": [
                    3.78,
                    3.58,
                    3.69,
                    3.9
                ],
                "ipk": 3.97,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 93,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 76,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020023",
            "detail": {
                "nama": "Mahasiswa 23",
                "nim": "2021020023",
                "ips": [
                    3.58,
                    3.86,
                    3.56,
                    3.81
                ],
                "ipk": 3.96,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 76,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 76,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020024",
            "detail": {
                "nama": "Mahasiswa 24",
                "nim": "2021020024",
                "ips": [
                    3.74,
                    3.64,
                    3.74,
                    3.89
                ],
                "ipk": 3.65,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 80,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 79,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 99,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020025",
            "detail": {
                "nama": "Mahasiswa 25",
                "nim": "2021020025",
                "ips": [
                    3.58,
                    3.94,
                    3.67,
                    3.86
                ],
                "ipk": 3.54,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 90,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 80,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 97,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020026",
            "detail": {
                "nama": "Mahasiswa 26",
                "nim": "2021020026",
                "ips": [
                    3.71,
                    3.85,
                    3.56,
                    3.8
                ],
                "ipk": 3.72,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 98,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 76,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 75,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020027",
            "detail": {
                "nama": "Mahasiswa 27",
                "nim": "2021020027",
                "ips": [
                    3.77,
                    3.95,
                    3.71,
                    3.78
                ],
                "ipk": 3.9,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 79,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 97,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 95,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020028",
            "detail": {
                "nama": "Mahasiswa 28",
                "nim": "2021020028",
                "ips": [
                    3.77,
                    3.98,
                    3.86,
                    3.99
                ],
                "ipk": 3.61,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 95,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 85,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 86,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020029",
            "detail": {
                "nama": "Mahasiswa 29",
                "nim": "2021020029",
                "ips": [
                    3.81,
                    3.66,
                    3.89,
                    3.69
                ],
                "ipk": 3.9,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 98,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 80,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 76,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020030",
            "detail": {
                "nama": "Mahasiswa 30",
                "nim": "2021020030",
                "ips": [
                    3.72,
                    3.95,
                    3.78,
                    3.79
                ],
                "ipk": 3.52,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 79,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 94,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020031",
            "detail": {
                "nama": "Mahasiswa 31",
                "nim": "2021020031",
                "ips": [
                    3.55,
                    3.74,
                    3.79,
                    3.81
                ],
                "ipk": 3.85,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 86,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 88,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 92,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020032",
            "detail": {
                "nama": "Mahasiswa 32",
                "nim": "2021020032",
                "ips": [
                    3.71,
                    3.95,
                    3.68,
                    3.75
                ],
                "ipk": 3.99,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 88,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 82,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 87,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020033",
            "detail": {
                "nama": "Mahasiswa 33",
                "nim": "2021020033",
                "ips": [
                    3.57,
                    3.79,
                    3.61,
                    3.69
                ],
                "ipk": 3.58,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 100,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 98,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 79,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020034",
            "detail": {
                "nama": "Mahasiswa 34",
                "nim": "2021020034",
                "ips": [
                    3.52,
                    3.84,
                    3.82,
                    3.84
                ],
                "ipk": 3.96,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 80,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 93,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 97,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020035",
            "detail": {
                "nama": "Mahasiswa 35",
                "nim": "2021020035",
                "ips": [
                    3.56,
                    3.96,
                    3.57,
                    4.0
                ],
                "ipk": 3.76,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 77,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 75,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 82,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020036",
            "detail": {
                "nama": "Mahasiswa 36",
                "nim": "2021020036",
                "ips": [
                    3.51,
                    3.72,
                    3.51,
                    3.77
                ],
                "ipk": 3.65,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 92,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 96,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 94,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020037",
            "detail": {
                "nama": "Mahasiswa 37",
                "nim": "2021020037",
                "ips": [
                    3.76,
                    3.88,
                    3.59,
                    3.88
                ],
                "ipk": 3.84,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 97,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 81,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 75,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020038",
            "detail": {
                "nama": "Mahasiswa 38",
                "nim": "2021020038",
                "ips": [
                    3.87,
                    3.58,
                    3.82,
                    3.84
                ],
                "ipk": 3.69,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 93,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 76,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020039",
            "detail": {
                "nama": "Mahasiswa 39",
                "nim": "2021020039",
                "ips": [
                    3.59,
                    3.97,
                    3.88,
                    3.9
                ],
                "ipk": 3.69,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 77,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 77,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 75,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020040",
            "detail": {
                "nama": "Mahasiswa 40",
                "nim": "2021020040",
                "ips": [
                    3.7,
                    3.57,
                    3.62,
                    3.58
                ],
                "ipk": 3.67,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 99,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 95,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 80,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020041",
            "detail": {
                "nama": "Mahasiswa 41",
                "nim": "2021020041",
                "ips": [
                    3.58,
                    3.94,
                    3.89,
                    3.91
                ],
                "ipk": 3.7,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 95,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 87,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 86,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020042",
            "detail": {
                "nama": "Mahasiswa 42",
                "nim": "2021020042",
                "ips": [
                    3.74,
                    3.6,
                    3.8,
                    3.97
                ],
                "ipk": 3.94,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 93,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 77,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 80,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020043",
            "detail": {
                "nama": "Mahasiswa 43",
                "nim": "2021020043",
                "ips": [
                    3.56,
                    3.85,
                    3.72,
                    3.82
                ],
                "ipk": 3.5,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 91,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 76,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 77,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020044",
            "detail": {
                "nama": "Mahasiswa 44",
                "nim": "2021020044",
                "ips": [
                    3.54,
                    3.56,
                    3.6,
                    3.99
                ],
                "ipk": 3.69,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 91,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 100,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 84,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020045",
            "detail": {
                "nama": "Mahasiswa 45",
                "nim": "2021020045",
                "ips": [
                    3.84,
                    3.51,
                    3.96,
                    3.95
                ],
                "ipk": 3.59,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 75,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 94,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 99,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020046",
            "detail": {
                "nama": "Mahasiswa 46",
                "nim": "2021020046",
                "ips": [
                    3.54,
                    3.54,
                    3.8,
                    4.0
                ],
                "ipk": 4.0,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 81,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 99,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 96,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020047",
            "detail": {
                "nama": "Mahasiswa 47",
                "nim": "2021020047",
                "ips": [
                    3.56,
                    3.62,
                    3.93,
                    3.86
                ],
                "ipk": 3.93,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 82,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 75,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 76,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020048",
            "detail": {
                "nama": "Mahasiswa 48",
                "nim": "2021020048",
                "ips": [
                    3.64,
                    3.6,
                    3.58,
                    3.67
                ],
                "ipk": 3.99,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 76,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 99,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 90,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020049",
            "detail": {
                "nama": "Mahasiswa 49",
                "nim": "2021020049",
                "ips": [
                    3.55,
                    3.93,
                    3.97,
                    3.63
                ],
                "ipk": 3.81,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 99,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 76,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 85,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020050",
            "detail": {
                "nama": "Mahasiswa 50",
                "nim": "2021020050",
                "ips": [
                    3.99,
                    3.78,
                    3.9,
                    3.52
                ],
                "ipk": 3.94,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 79,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 85,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 91,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020051",
            "detail": {
                "nama": "Mahasiswa 51",
                "nim": "2021020051",
                "ips": [
                    3.82,
                    3.7,
                    3.62,
                    3.82
                ],
                "ipk": 3.93,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 92,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 82,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 96,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020052",
            "detail": {
                "nama": "Mahasiswa 52",
                "nim": "2021020052",
                "ips": [
                    3.63,
                    3.81,
                    3.51,
                    3.92
                ],
                "ipk": 3.71,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 94,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 78,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020053",
            "detail": {
                "nama": "Mahasiswa 53",
                "nim": "2021020053",
                "ips": [
                    3.64,
                    3.93,
                    3.89,
                    3.98
                ],
                "ipk": 3.54,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 96,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 83,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 89,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020054",
            "detail": {
                "nama": "Mahasiswa 54",
                "nim": "2021020054",
                "ips": [
                    3.71,
                    3.74,
                    3.9,
                    3.74
                ],
                "ipk": 3.57,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 80,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 89,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020055",
            "detail": {
                "nama": "Mahasiswa 55",
                "nim": "2021020055",
                "ips": [
                    3.98,
                    3.61,
                    3.66,
                    3.93
                ],
                "ipk": 3.84,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 77,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 100,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 87,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020056",
            "detail": {
                "nama": "Mahasiswa 56",
                "nim": "2021020056",
                "ips": [
                    3.52,
                    3.79,
                    3.69,
                    3.61
                ],
                "ipk": 3.65,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 90,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 77,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 85,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020057",
            "detail": {
                "nama": "Mahasiswa 57",
                "nim": "2021020057",
                "ips": [
                    3.78,
                    3.87,
                    3.61,
                    3.93
                ],
                "ipk": 3.91,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 100,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 85,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 83,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020058",
            "detail": {
                "nama": "Mahasiswa 58",
                "nim": "2021020058",
                "ips": [
                    3.73,
                    3.99,
                    3.63,
                    3.78
                ],
                "ipk": 3.83,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 96,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 78,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 96,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020059",
            "detail": {
                "nama": "Mahasiswa 59",
                "nim": "2021020059",
                "ips": [
                    3.78,
                    3.6,
                    3.58,
                    3.72
                ],
                "ipk": 3.52,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 87,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 91,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 94,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020060",
            "detail": {
                "nama": "Mahasiswa 60",
                "nim": "2021020060",
                "ips": [
                    3.59,
                    4.0,
                    3.75,
                    3.6
                ],
                "ipk": 3.89,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 82,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 83,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 96,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020061",
            "detail": {
                "nama": "Mahasiswa 61",
                "nim": "2021020061",
                "ips": [
                    3.53,
                    3.85,
                    3.58,
                    3.99
                ],
                "ipk": 3.74,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 81,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 91,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 84,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020062",
            "detail": {
                "nama": "Mahasiswa 62",
                "nim": "2021020062",
                "ips": [
                    3.87,
                    3.74,
                    3.92,
                    3.8
                ],
                "ipk": 3.67,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 92,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 85,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 96,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020063",
            "detail": {
                "nama": "Mahasiswa 63",
                "nim": "2021020063",
                "ips": [
                    3.75,
                    3.8,
                    3.6,
                    3.86
                ],
                "ipk": 3.91,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 85,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 88,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 84,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020064",
            "detail": {
                "nama": "Mahasiswa 64",
                "nim": "2021020064",
                "ips": [
                    3.82,
                    3.53,
                    3.82,
                    3.51
                ],
                "ipk": 3.66,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 98,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 87,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 78,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020065",
            "detail": {
                "nama": "Mahasiswa 65",
                "nim": "2021020065",
                "ips": [
                    3.53,
                    3.91,
                    3.8,
                    3.57
                ],
                "ipk": 3.68,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 88,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 82,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 100,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020066",
            "detail": {
                "nama": "Mahasiswa 66",
                "nim": "2021020066",
                "ips": [
                    3.97,
                    3.53,
                    3.81,
                    3.92
                ],
                "ipk": 3.67,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 88,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 87,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 84,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020067",
            "detail": {
                "nama": "Mahasiswa 67",
                "nim": "2021020067",
                "ips": [
                    3.99,
                    3.54,
                    3.67,
                    3.97
                ],
                "ipk": 3.55,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 89,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 92,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020068",
            "detail": {
                "nama": "Mahasiswa 68",
                "nim": "2021020068",
                "ips": [
                    3.74,
                    3.78,
                    3.76,
                    3.81
                ],
                "ipk": 3.74,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 90,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 75,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 85,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020069",
            "detail": {
                "nama": "Mahasiswa 69",
                "nim": "2021020069",
                "ips": [
                    3.91,
                    3.96,
                    3.82,
                    3.76
                ],
                "ipk": 3.68,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 85,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 97,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 76,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020070",
            "detail": {
                "nama": "Mahasiswa 70",
                "nim": "2021020070",
                "ips": [
                    3.65,
                    3.61,
                    3.95,
                    3.89
                ],
                "ipk": 3.93,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 100,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 97,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 91,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020071",
            "detail": {
                "nama": "Mahasiswa 71",
                "nim": "2021020071",
                "ips": [
                    3.64,
                    3.77,
                    3.75,
                    3.98
                ],
                "ipk": 3.75,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 100,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 100,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 79,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020072",
            "detail": {
                "nama": "Mahasiswa 72",
                "nim": "2021020072",
                "ips": [
                    3.55,
                    3.57,
                    3.87,
                    3.81
                ],
                "ipk": 3.83,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 97,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 87,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 93,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020073",
            "detail": {
                "nama": "Mahasiswa 73",
                "nim": "2021020073",
                "ips": [
                    3.9,
                    3.92,
                    3.91,
                    3.72
                ],
                "ipk": 3.94,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 100,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 77,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020074",
            "detail": {
                "nama": "Mahasiswa 74",
                "nim": "2021020074",
                "ips": [
                    3.81,
                    3.61,
                    3.74,
                    3.75
                ],
                "ipk": 3.78,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 79,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 90,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 97,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020075",
            "detail": {
                "nama": "Mahasiswa 75",
                "nim": "2021020075",
                "ips": [
                    3.59,
                    3.6,
                    3.9,
                    3.57
                ],
                "ipk": 3.62,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 87,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 77,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 82,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020076",
            "detail": {
                "nama": "Mahasiswa 76",
                "nim": "2021020076",
                "ips": [
                    3.75,
                    3.6,
                    3.89,
                    3.6
                ],
                "ipk": 3.83,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 80,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 85,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 76,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020077",
            "detail": {
                "nama": "Mahasiswa 77",
                "nim": "2021020077",
                "ips": [
                    3.96,
                    3.69,
                    3.88,
                    3.73
                ],
                "ipk": 3.64,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 98,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 87,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 83,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020078",
            "detail": {
                "nama": "Mahasiswa 78",
                "nim": "2021020078",
                "ips": [
                    3.82,
                    3.75,
                    3.63,
                    3.91
                ],
                "ipk": 3.55,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 76,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 86,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 80,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020079",
            "detail": {
                "nama": "Mahasiswa 79",
                "nim": "2021020079",
                "ips": [
                    3.58,
                    3.54,
                    3.84,
                    3.82
                ],
                "ipk": 3.79,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 91,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 85,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 89,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020080",
            "detail": {
                "nama": "Mahasiswa 80",
                "nim": "2021020080",
                "ips": [
                    3.94,
                    3.76,
                    3.76,
                    3.96
                ],
                "ipk": 3.78,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 83,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 91,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 83,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020081",
            "detail": {
                "nama": "Mahasiswa 81",
                "nim": "2021020081",
                "ips": [
                    3.77,
                    3.8,
                    3.65,
                    3.62
                ],
                "ipk": 3.63,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 90,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 77,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 90,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020082",
            "detail": {
                "nama": "Mahasiswa 82",
                "nim": "2021020082",
                "ips": [
                    3.86,
                    3.64,
                    4.0,
                    3.62
                ],
                "ipk": 3.87,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 84,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 87,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 86,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020083",
            "detail": {
                "nama": "Mahasiswa 83",
                "nim": "2021020083",
                "ips": [
                    3.65,
                    3.8,
                    3.85,
                    3.57
                ],
                "ipk": 3.76,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 90,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 98,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 77,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020084",
            "detail": {
                "nama": "Mahasiswa 84",
                "nim": "2021020084",
                "ips": [
                    3.96,
                    3.69,
                    3.69,
                    3.72
                ],
                "ipk": 3.74,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 92,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 95,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020085",
            "detail": {
                "nama": "Mahasiswa 85",
                "nim": "2021020085",
                "ips": [
                    3.67,
                    3.66,
                    3.91,
                    3.9
                ],
                "ipk": 3.54,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 86,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 85,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 82,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020086",
            "detail": {
                "nama": "Mahasiswa 86",
                "nim": "2021020086",
                "ips": [
                    3.95,
                    3.56,
                    3.87,
                    3.95
                ],
                "ipk": 3.78,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 97,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 75,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 92,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020087",
            "detail": {
                "nama": "Mahasiswa 87",
                "nim": "2021020087",
                "ips": [
                    3.81,
                    3.71,
                    4.0,
                    3.93
                ],
                "ipk": 3.57,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 89,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 90,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 78,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020088",
            "detail": {
                "nama": "Mahasiswa 88",
                "nim": "2021020088",
                "ips": [
                    3.61,
                    3.89,
                    3.77,
                    3.66
                ],
                "ipk": 3.96,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 85,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 82,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 97,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020089",
            "detail": {
                "nama": "Mahasiswa 89",
                "nim": "2021020089",
                "ips": [
                    3.82,
                    3.61,
                    3.51,
                    3.63
                ],
                "ipk": 3.9,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 83,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 95,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 82,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020090",
            "detail": {
                "nama": "Mahasiswa 90",
                "nim": "2021020090",
                "ips": [
                    3.74,
                    4.0,
                    4.0,
                    3.8
                ],
                "ipk": 3.62,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 91,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 84,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 88,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020091",
            "detail": {
                "nama": "Mahasiswa 91",
                "nim": "2021020091",
                "ips": [
                    3.57,
                    3.58,
                    3.59,
                    3.61
                ],
                "ipk": 3.83,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 96,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 94,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 75,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020092",
            "detail": {
                "nama": "Mahasiswa 92",
                "nim": "2021020092",
                "ips": [
                    3.94,
                    3.95,
                    3.91,
                    3.83
                ],
                "ipk": 3.89,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 80,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 78,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 96,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020093",
            "detail": {
                "nama": "Mahasiswa 93",
                "nim": "2021020093",
                "ips": [
                    3.89,
                    3.74,
                    3.61,
                    3.67
                ],
                "ipk": 3.78,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 81,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 99,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 93,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020094",
            "detail": {
                "nama": "Mahasiswa 94",
                "nim": "2021020094",
                "ips": [
                    3.92,
                    3.65,
                    3.58,
                    3.53
                ],
                "ipk": 4.0,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 95,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 91,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 86,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020095",
            "detail": {
                "nama": "Mahasiswa 95",
                "nim": "2021020095",
                "ips": [
                    3.71,
                    3.89,
                    3.73,
                    3.57
                ],
                "ipk": 3.85,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 81,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 95,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 97,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020096",
            "detail": {
                "nama": "Mahasiswa 96",
                "nim": "2021020096",
                "ips": [
                    3.59,
                    3.94,
                    3.65,
                    3.53
                ],
                "ipk": 3.95,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 84,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 95,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 80,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020097",
            "detail": {
                "nama": "Mahasiswa 97",
                "nim": "2021020097",
                "ips": [
                    3.73,
                    3.54,
                    3.84,
                    3.59
                ],
                "ipk": 3.74,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 92,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 83,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 89,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020098",
            "detail": {
                "nama": "Mahasiswa 98",
                "nim": "2021020098",
                "ips": [
                    3.65,
                    3.63,
                    3.75,
                    3.92
                ],
                "ipk": 3.82,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 81,
                        "index": "B"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 81,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 87,
                        "index": "A"
                    }
                ]
            }
        },
        {
            "id": "2021020099",
            "detail": {
                "nama": "Mahasiswa 99",
                "nim": "2021020099",
                "ips": [
                    3.58,
                    3.92,
                    3.61,
                    3.94
                ],
                "ipk": 3.7,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 80,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 88,
                        "index": "A"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 85,
                        "index": "B"
                    }
                ]
            }
        },
        {
            "id": "2021020100",
            "detail": {
                "nama": "Mahasiswa 100",
                "nim": "2021020100",
                "ips": [
                    3.83,
                    3.62,
                    3.64,
                    3.57
                ],
                "ipk": 3.83,
                "matakuliah": [
                    {
                        "no": 1,
                        "kode": "TIK2001242",
                        "nama": "Proyek Audit",
                        "sks": 3,
                        "nilai": 84,
                        "index": "A"
                    },
                    {
                        "no": 2,
                        "kode": "TIK2001243",
                        "nama": "Pemrograman Web",
                        "sks": 4,
                        "nilai": 96,
                        "index": "B"
                    },
                    {
                        "no": 3,
                        "kode": "TIK2001244",
                        "nama": "Basis Data",
                        "sks": 4,
                        "nilai": 77,
                        "index": "B"
                    }
                ]
            }
        }
    ]
};

// Konfigurasi pagination
const ITEMS_PER_PAGE = 10;
let currentPage = 1;

// Fungsi untuk menampilkan daftar mahasiswa
window.addEventListener('DOMContentLoaded', event => {
    // Cek apakah ada parameter ID di URL
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get('id');
    currentPage = parseInt(urlParams.get('page')) || 1;

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
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container d-flex justify-content-end mt-3';
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'btn btn-outline-primary btn-sm me-2';
    prevButton.innerHTML = '&laquo; Previous';
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            updateURLWithPage(currentPage);
            initializeMahasiswaTable();
        }
    };
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.className = 'btn btn-outline-primary btn-sm';
    nextButton.innerHTML = 'Next &raquo;';
    nextButton.disabled = currentPage >= totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateURLWithPage(currentPage);
            initializeMahasiswaTable();
        }
    };
    
    // Page info
    const pageInfo = document.createElement('span');
    pageInfo.className = 'mx-3 align-self-center';
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(pageInfo);
    paginationContainer.appendChild(nextButton);
    container.appendChild(paginationContainer);
}

// Fungsi untuk update URL dengan parameter page
function updateURLWithPage(page) {
    const url = new URL(window.location.href);
    url.searchParams.set('page', page);
    window.history.pushState({}, '', url);
}

// Fungsi untuk menampilkan tabel mahasiswa
function initializeMahasiswaTable() {
    const mainTable = document.getElementById('datatablesSimple');
    const tbody = mainTable.querySelector('tbody');
    tbody.innerHTML = ''; // Bersihkan tabel

    // Get paginated data
    const paginatedData = paginate(mahasiswaData.mahasiswa, ITEMS_PER_PAGE, currentPage);

    // Tampilkan data mahasiswa
    paginatedData.forEach((mhs, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${((currentPage - 1) * ITEMS_PER_PAGE) + index + 1}</td>
            <td>${mhs.detail.nama}</td>
            <td>${mhs.detail.nim}</td>
            <td>
                <a href="tables.html?id=${mhs.id}" class="btn btn-primary btn-sm">
                    Details
                </a>
            </td>
        `;
        tbody.appendChild(row);
    });






    // Buat kontrol pagination
    const cardBody = mainTable.closest('.card-body');
    // Hapus pagination controls yang sudah ada (jika ada)
    const existingPagination = cardBody.querySelector('.pagination-container');
    if (existingPagination) {
        existingPagination.remove();
    }
    createPaginationControls(mahasiswaData.mahasiswa.length, cardBody);

    // Inisialisasi DataTable dengan opsi pagination dimatikan
    if (!mainTable.classList.contains('dataTable-table')) {
        new simpleDatatables.DataTable(mainTable, {
            perPageSelect: false,
            perPage: ITEMS_PER_PAGE
        });
    }
}

// Fungsi untuk menampilkan detail mata kuliah
function showMataKuliah(id) {
    const mahasiswa = mahasiswaData.mahasiswa.find(mhs => mhs.id === id);
    if (mahasiswa) {
        // Update judul di atas tabel
        document.querySelector('h1.mt-4').textContent = `Detail Nilai - ${mahasiswa.detail.nama}`;
        document.querySelector('.breadcrumb-item.active').textContent = `Detail Nilai (${mahasiswa.detail.nim})`;

        // Dapatkan referensi ke tabel
        const table = document.getElementById('datatablesSimple');
        const tbody = table.querySelector('tbody');

        // Kosongkan tbody
        tbody.innerHTML = '';

        // Get paginated mata kuliah data
        const paginatedMataKuliah = paginate(
            mahasiswa.detail.matakuliah, 
            ITEMS_PER_PAGE, 
            currentPage
        );

        // Tambahkan data mata kuliah ke tabel
        paginatedMataKuliah.forEach(mk => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${mk.no}</td>
                <td>${mk.kode}</td>
                <td>${mk.nama}</td>
                <td>${mk.sks}</td>
                <td>${mk.nilai}</td>
                <td>${mk.index}</td>
            `;
            tbody.appendChild(row);
        });

        // Tambahkan tombol kembali
        const cardHeader = document.querySelector('.card-header');
        if (!document.getElementById('backButton')) {
            const backButton = document.createElement('button');
            backButton.id = 'backButton';
            backButton.className = 'btn btn-secondary btn-sm float-end';
            backButton.innerHTML = 'Kembali';
            backButton.onclick = () => {
                window.location.href = 'index.html';
            };
            cardHeader.appendChild(backButton);
        }

        // Buat kontrol pagination untuk mata kuliah
        const cardBody = table.closest('.card-body');
        const existingPagination = cardBody.querySelector('.pagination-container');
        if (existingPagination) {
            existingPagination.remove();
        }
        createPaginationControls(mahasiswa.detail.matakuliah.length, cardBody);

        // Reinisialisasi DataTable dengan opsi pagination dimatikan
        const existingDataTable = table.closest('.dataTable-container');
        if (existingDataTable) {
            existingDataTable.parentNode.replaceChild(table, existingDataTable);
        }
        new simpleDatatables.DataTable(table, {
            perPageSelect: false,
            perPage: ITEMS_PER_PAGE
        });
    }
}

