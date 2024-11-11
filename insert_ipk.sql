use ppl2024;

INSERT INTO ipk (nim, smt, tahun, IPS, IPK) SELECT 
    krs.nim,
    krs.semesterKRS AS smt,
    krs.tahun,
    ROUND(SUM(krs.bobot * mata_kuliah.sks) / SUM(mata_kuliah.sks), 2) AS IPS,
    NULL AS IPK  -- IPK kumulatif akan dihitung di langkah berikutnya
FROM 
    krs
JOIN 
    mata_kuliah ON krs.kodeMk = mata_kuliah.kodeMk
GROUP BY 
    krs.nim, krs.semesterKRS, krs.tahun;

use ppl2024;

UPDATE ipk AS target
JOIN (
    SELECT 
        i.nim,
        i.smt,
        ROUND(SUM(prev.IPS * prev.sks) / SUM(prev.sks), 2) AS IPK_kumulatif
    FROM ipk i
    JOIN (
        SELECT 
            k.nim,
            k.smt AS semester,
            SUM(m.sks) AS sks,
            (SUM(k.bobot * m.sks) / SUM(m.sks)) AS IPS
        FROM krs k
        JOIN mata_kuliah m ON k.kodeMk = m.kodeMk
        GROUP BY k.nim, k.semesterKRS
    ) AS prev ON i.nim = prev.nim AND prev.semester <= i.semesterKRS
    GROUP BY i.nim, i.semesterKRS
) AS cumulative ON target.nim = cumulative.nim AND target.semesterKRS = cumulative.semesterKRS
SET target.IPK = cumulative.IPK_kumulatif;


use ppl2024;

INSERT INTO ipk (nim, smt, tahun, IPS, IPK)
SELECT 
    krs.nim,
    krs.semesterKRS AS smt,
    krs.tahun,
    ROUND(SUM(krs.bobot * mata_kuliah.sks) / SUM(mata_kuliah.sks), 2) AS IPS,
    NULL AS IPK  -- IPK kumulatif akan dihitung di langkah berikutnya
FROM 
    krs
JOIN 
    mata_kuliah ON krs.kodeMk = mata_kuliah.kodeMk
WHERE 
    krs.semesterKRS <= 7  -- Hanya semester 1 hingga 7
GROUP BY 
    krs.nim, krs.semesterKRS, krs.tahun;


use ppl2024;

UPDATE ipk AS target
JOIN (
    SELECT 
        i.nim,
        i.smt,
        ROUND(SUM(prev.IPS * prev.sks) / SUM(prev.sks), 2) AS IPK_kumulatif
    FROM ipk i
    JOIN (
        SELECT 
            k.nim,
            k.semesterKRS AS semester,
            SUM(m.sks) AS sks,
            (SUM(k.bobot * m.sks) / SUM(m.sks)) AS IPS
        FROM krs k
        JOIN mata_kuliah m ON k.kodeMk = m.kodeMk
        GROUP BY k.nim, k.semesterKRS
    ) AS prev ON i.nim = prev.nim AND prev.semester <= i.smt
    GROUP BY i.nim, i.smt
) AS cumulative ON target.nim = cumulative.nim AND target.smt = cumulative.smt
SET target.IPK = cumulative.IPK_kumulatif;