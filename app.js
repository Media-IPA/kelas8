// 0. DATA SOAL TP1 UNTUK PAPAN TULIS INTERAKTIF
const TP1_QUESTIONS = [
    {
        id: 1, type: "pg", typeLabel: "PG",
        text: "Sel merupakan unit terkecil kehidupan. Sel adalah ...",
        options: ["A. Bagian terbesar organisme", "B. Unit struktural & fungsional terkecil makhluk hidup", "C. Kumpulan jaringan", "D. Zat kimia penyusun tubuh"],
        correct: 1
    },
    {
        id: 2, type: "isian", typeLabel: "Isian Singkat",
        text: "Robert Hooke menamai ruang-ruang kecil pada gabus dengan istilah 'sel', dari bahasa Latin 'cellula' yang artinya ....",
        correctAnswers: ["ruangan kecil", "kamar kecil", "ruang kecil", "cellula", "ruang-ruang kecil", "kamar-kamar kecil"]
    },
    {
        id: 3, type: "bs", typeLabel: "Benar / Salah",
        text: "Teori sel yang menyatakan semua makhluk hidup tersusun atas sel dikemukakan Schleiden & Schwann tahun 1839.",
        correct: "B"
    },
    {
        id: 4, type: "pg_kompleks", typeLabel: "PG Kompleks",
        text: "Ciri organisme uniseluler (pilih semua yang benar):",
        options: [
            { id: "A", text: "Tubuh tersusun atas 1 sel" },
            { id: "B", text: "Contoh: Amoeba & bakteri" },
            { id: "C", text: "Tubuh tersusun banyak sel yang bekerja sama" },
            { id: "D", text: "Seluruh aktivitas hidup dilakukan 1 sel" },
            { id: "E", text: "Contoh: manusia & hewan" }
        ],
        correct: ["A", "B", "D"]
    },
    {
        id: 5, type: "jodoh", typeLabel: "Menjodohkan",
        text: "Jodohkan tokoh dengan penemuannya:",
        leftItems: [
            { id: 1, label: "1. Robert Hooke" },
            { id: 2, label: "2. Leeuwenhoek" },
            { id: 3, label: "3. Schleiden & Schwann" },
            { id: 4, label: "4. Virchow" }
        ],
        rightItems: [
            { id: "a", label: "a. Sel berasal dari sel sebelumnya" },
            { id: "b", label: "b. Pertama mengamati & menamai sel" },
            { id: "c", label: "c. Mengamati organisme uniseluler hidup pertama" },
            { id: "d", label: "d. Teori sel: sel unit dasar kehidupan" }
        ],
        correct: { 1: "b", 2: "c", 3: "d", 4: "a" }
    },
    {
        id: 6, type: "pg", typeLabel: "PG",
        text: "Bagian sel yang mengatur keluar-masuknya zat adalah ...",
        options: ["A. Inti sel", "B. Sitoplasma", "C. Membran sel", "D. Dinding sel"],
        correct: 2
    },
    {
        id: 7, type: "bs", typeLabel: "Benar / Salah",
        text: "Leeuwenhoek pertama mengamati organisme hidup bersel satu dengan mikroskop buatannya sendiri.",
        correct: "B"
    },
    {
        id: 8, type: "isian", typeLabel: "Isian Singkat",
        text: "Ilmuwan yang menyatakan semua sel berasal dari sel sebelumnya adalah ....",
        correctAnswers: ["rudolf virchow", "virchow", "r. virchow"]
    },
    {
        id: 9, type: "pg", typeLabel: "PG",
        text: "Cairan tempat berlangsungnya reaksi kimia antara membran & inti sel disebut ...",
        options: ["A. Nukleus", "B. Sitoplasma", "C. Membran sel", "D. Vakuola"],
        correct: 1
    },
    {
        id: 10, type: "pg_kompleks", typeLabel: "PG Kompleks",
        text: "Tiga bagian utama sel meliputi (pilih semua yang benar):",
        options: [
            { id: "A", text: "Membran sel" },
            { id: "B", text: "Kloroplas" },
            { id: "C", text: "Sitoplasma" },
            { id: "D", text: "Inti sel" },
            { id: "E", text: "Ribosom" }
        ],
        correct: ["A", "C", "D"]
    },
    {
        id: 11, type: "bs", typeLabel: "Benar / Salah",
        text: "Manusia termasuk organisme multiseluler karena tersusun atas banyak sel.",
        correct: "B"
    },
    {
        id: 12, type: "pg", typeLabel: "PG",
        text: "Bagian sel yang mengatur aktivitas & menyimpan materi genetik adalah ...",
        options: ["A. Membran sel", "B. Sitoplasma", "C. Inti sel", "D. Dinding sel"],
        correct: 2
    },
    {
        id: 13, type: "isian", typeLabel: "Isian Singkat",
        text: "Teori sel Schleiden & Schwann dicetuskan pada tahun ....",
        correctAnswers: ["1839"]
    },
    {
        id: 14, type: "pg", typeLabel: "PG",
        text: "Contoh organisme uniseluler adalah ...",
        options: ["A. Kucing", "B. Amoeba", "C. Pohon mangga", "D. Ikan"],
        correct: 1
    },
    {
        id: 15, type: "pg_kompleks", typeLabel: "PG Kompleks",
        text: "Contoh organisme multiseluler (pilih semua yang benar):",
        options: [
            { id: "A", text: "Manusia" },
            { id: "B", text: "Bakteri" },
            { id: "C", text: "Kucing" },
            { id: "D", text: "Pohon mangga" },
            { id: "E", text: "Paramecium" }
        ],
        correct: ["A", "C", "D"]
    },
    {
        id: 16, type: "bs", typeLabel: "Benar / Salah",
        text: "Amoeba adalah contoh organisme multiseluler karena tersusun atas banyak sel.",
        correct: "S"
    },
    {
        id: 17, type: "pg", typeLabel: "PG",
        text: "Robert Hooke mengamati sel gabus menggunakan alat bernama ...",
        options: ["A. Teleskop", "B. Mikroskop", "C. Termometer", "D. Barometer"],
        correct: 1
    },
    {
        id: 18, type: "isian", typeLabel: "Isian Singkat",
        text: "Kata 'sel' berasal dari bahasa Latin 'cellula' yang artinya ....",
        correctAnswers: ["ruangan kecil", "kamar kecil", "ruang kecil", "cellula", "ruang-ruang kecil", "kamar-kamar kecil"]
    },
    {
        id: 19, type: "pg", typeLabel: "PG",
        text: "Robert Hooke mengamati struktur sel pada gabus pada tahun ...",
        options: ["A. 1665", "B. 1674", "C. 1839", "D. 1855"],
        correct: 0
    },
    {
        id: 20, type: "pg_kompleks", typeLabel: "PG Kompleks",
        text: "Pernyataan yang benar tentang sel (pilih semua yang benar):",
        options: [
            { id: "A", text: "Unit terkecil makhluk hidup" },
            { id: "B", text: "Semua makhluk hidup tersusun sel" },
            { id: "C", text: "Hanya dimiliki manusia" },
            { id: "D", text: "Dapat diamati dengan mikroskop" },
            { id: "E", text: "Tidak punya bagian penyusun" }
        ],
        correct: ["A", "B", "D"]
    },
    {
        id: 21, type: "bs", typeLabel: "Benar / Salah",
        text: "Sitoplasma adalah tempat berbagai organel sel melakukan aktivitasnya.",
        correct: "B"
    },
    {
        id: 22, type: "pg", typeLabel: "PG",
        text: "Perbedaan utama uniseluler & multiseluler terletak pada...",
        options: ["A. Warna tubuh", "B. Jumlah sel penyusun", "C. Tempat hidup", "D. Ukuran tubuh saja"],
        correct: 1
    },
    {
        id: 23, type: "isian", typeLabel: "Isian Singkat",
        text: "Prinsip 'omnis cellula e cellula' dikemukakan oleh ....",
        correctAnswers: ["rudolf virchow", "virchow", "r. virchow"]
    },
    {
        id: 24, type: "pg", typeLabel: "PG",
        text: "Bagian sel yang melindungi & membungkus seluruh isi sel adalah ...",
        options: ["A. Inti sel", "B. Membran sel", "C. Sitoplasma", "D. Nukleolus"],
        correct: 1
    },
    {
        id: 25, type: "pg_kompleks", typeLabel: "PG Kompleks",
        text: "Tokoh dalam sejarah penemuan sel (pilih semua yang benar):",
        options: [
            { id: "A", text: "Robert Hooke (1665)" },
            { id: "B", text: "Leeuwenhoek (1674)" },
            { id: "C", text: "Isaac Newton (1687)" },
            { id: "D", text: "Schleiden & Schwann (1839)" },
            { id: "E", text: "Virchow (1855)" }
        ],
        correct: ["A", "B", "D", "E"]
    }
];

// 1. DATA MATERI & KUIS PEMBELAJARAN
const CHAPTERS_DATA = {
    1: {
        title: "Pengenalan Sel",
        tag: "BAB 1",
        subject: "Biologi",
        themeColor: "var(--color-bio-sel)",
        badgeName: "Sitologi Master",
        badgeIcon: "🔬",
        slides: [
            {
                title: "1. Pengertian Sel",
                content: `
                    <p>Sel adalah <strong>unit terkecil dari makhluk hidup</strong> yang mampu menjalankan fungsi kehidupan, seperti metabolisme, pertumbuhan, reproduksi, dan respons terhadap rangsangan.</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-bio-sel)">
                        <span>Definisi Kunci</span>
                        <p>Sel = Unit struktural + Unit fungsional terkecil kehidupan. Setiap aktivitas kehidupan bermula dari sel!</p>
                    </div>
                    <ul>
                        <li>🦠 <strong>Uniseluler:</strong> Organisme yang hanya terdiri dari <em>satu sel</em>. Contoh: Bakteri, Amoeba.</li>
                        <li>🌿 <strong>Multiseluler:</strong> Organisme yang terdiri dari <em>banyak sel</em>. Contoh: Tumbuhan, Hewan, Manusia.</li>
                    </ul>
                `,
                visualType: "img-viewer",
                imgSrc: "image/BAB 1/1.png",
                imgCaption: "Konsep & Pengertian Sel (Gambar 1.1)",
                visualTitle: "Sel: Unit Terkecil Kehidupan"
            },
            {
                title: "2. Sejarah Penemuan Sel",
                content: `
                    <p>Penemuan sel adalah perjalanan saintifik yang luar biasa, dimulai dari rasa ingin tahu para ilmuwan besar:</p>
                    <ol>
                        <li>🔬 <strong>Robert Hooke (1665):</strong> Orang pertama yang mengamati sel melalui mikroskop dan memberi istilah <em>"sel"</em> setelah melihat struktur pada gabus.</li>
                        <li>💧 <strong>Anton van Leeuwenhoek (1674):</strong> Mengamati organisme uniseluler hidup pertama kali menggunakan mikroskop sederhana buatannya.</li>
                        <li>📜 <strong>Schleiden & Schwann (1839):</strong> Menyatakan <em>Teori Sel</em> — semua makhluk hidup tersusun atas sel, dan sel adalah unit dasar kehidupan.</li>
                        <li>⚗️ <strong>Rudolf Virchow (1855):</strong> Menambahkan konsep bahwa semua sel berasal dari sel sebelumnya (<em>omnis cellula e cellula</em>).</li>
                    </ol>
                `,
                visualType: "img-viewer",
                imgSrc: "image/BAB 1/2.png",
                imgCaption: "Sejarah & Tokoh Penemu Sel (Gambar 1.2)",
                visualTitle: "Garis Waktu Penemuan Sel"
            },
            {
                title: "3. Bagian-Bagian Utama Sel",
                content: `
                    <p>Secara umum, sel memiliki tiga bagian besar yang menjadi fondasi strukturnya:</p>
                    <ul>
                        <li>🧱 <strong>Membran Sel:</strong> Lapisan tipis yang mengelilingi sel. Fungsi: <em>Mengatur keluar-masuknya zat</em> ke dalam dan ke luar sel.</li>
                        <li>🌊 <strong>Sitoplasma:</strong> Cairan di dalam sel yang mengandung organel. Fungsi: <em>Tempat berlangsungnya reaksi kimia sel</em>.</li>
                        <li>🧬 <strong>Inti Sel (Nukleus):</strong> Berisi DNA dan dikelilingi membran inti. Fungsi: <em>Mengontrol aktivitas sel</em> dan menyimpan informasi genetik.</li>
                    </ul>
                    <div class="highlight-box" style="--slide-accent: var(--color-bio-sel)">
                        <span>Analogi Mudah</span>
                        <p>Bayangkan sel seperti sebuah kota: Membran sel = tembok kota, Sitoplasma = jalanan kota, Nukleus = istana pusat pemerintahan.</p>
                    </div>
                `,
                visualType: "img-viewer",
                imgSrc: "image/BAB 1/3.png",
                imgCaption: "Struktur & Bagian Utama Sel (Gambar 1.3)",
                visualTitle: "Struktur Dasar Sel"
            },
            {
                title: "4. Papan Tulis Interaktif: LKPD TP.1",
                content: `
                    <p><strong>Panduan Pengerjaan:</strong></p>
                    <ol style="margin-left: 1.2rem; margin-bottom: 0.8rem;">
                        <li>Cetak atau unduh dokumen <strong>LKPD Manual TP.1 (PDF)</strong> terlebih dahulu.</li>
                        <li>Kerjakan soal-soal pada lembar LKPD manual secara mandiri atau berdiskusi dengan tim kelompok.</li>
                        <li>Salin dan masukkan jawaban kelompokmu pada <strong>Papan Tulis Interaktif</strong> di sebelah kiri!</li>
                    </ol>
                    <div class="pdf-download-card">
                        <div class="pdf-info">
                            <i data-lucide="file-text" class="pdf-icon"></i>
                            <div>
                                <h4>Dokumen LKPD TP.1 (Konsep Sel)</h4>
                                <p>Format PDF Siap Cetak • 25 Soal Evaluasi</p>
                            </div>
                        </div>
                        <button id="btn-download-pdf-tp1" class="btn-pdf-download ripple">
                            <i data-lucide="download"></i>
                            <span>Buka / Unduh LKPD PDF</span>
                        </button>
                    </div>
                    <div class="highlight-box" style="--slide-accent: var(--color-bio-sel); margin-top: 0.8rem;">
                        <span>Fitur Papan Tulis Interaktif</span>
                        <ul style="margin-left: 1rem; margin-top: 0.4rem;">
                            <li>🔒 <strong>Sistem Verifikasi:</strong> Jawaban yang benar akan otomatis <strong>TERKUNCI</strong>.</li>
                            <li>⚠️ <strong>Umpan Balik Instan:</strong> Jawaban salah akan menampilkan notifikasi agar dapat diperbaiki.</li>
                            <li>👥 <strong>Multi-Kelompok:</strong> Pengerjaan dibagi 2 kelompok dengan area scroll independen.</li>
                        </ul>
                    </div>
                `,
                visualType: "interactive-whiteboard-tp1",
                visualTitle: "Papan Tulis Interaktif (Kelompok 1 & 2)"
            },
            {
                title: "5. Organel-Organel Sel",
                content: `
                    <p>Di dalam sitoplasma terdapat berbagai <strong>organel</strong> dengan fungsi khusus:</p>
                    <ul>
                        <li>⚡ <strong>Mitokondria:</strong> "Pembangkit energi sel" — menghasilkan energi (ATP) melalui respirasi seluler.</li>
                        <li>🔩 <strong>Ribosom:</strong> Tempat sintesis protein dari asam amino.</li>
                        <li>🌐 <strong>Retikulum Endoplasma (RE) Kasar:</strong> Mengandung ribosom, berfungsi untuk sintesis protein.</li>
                        <li>🔄 <strong>RE Halus:</strong> Berperan dalam sintesis lipid dan detoksifikasi racun.</li>
                        <li>📦 <strong>Badan Golgi:</strong> Mengolah dan mengemas protein untuk dikirim ke bagian lain sel.</li>
                        <li>♻️ <strong>Lisosom (khusus hewan):</strong> Menguraikan zat-zat sisa atau zat berbahaya dalam sel.</li>
                        <li>🌿 <strong>Kloroplas (khusus tumbuhan):</strong> Tempat fotosintesis untuk menghasilkan makanan (glukosa).</li>
                        <li>💧 <strong>Vakuola:</strong> Besar pada tumbuhan (menyimpan air & nutrisi); kecil atau tidak ada pada hewan.</li>
                        <li>🏰 <strong>Dinding Sel (khusus tumbuhan):</strong> Melindungi dan memberikan bentuk tetap pada sel.</li>
                    </ul>
                `,
                visualType: "sim-cell",
                visualTitle: "Simulator Sel Interaktif"
            },
            {
                title: "6. Perbedaan Sel Hewan & Tumbuhan",
                content: `
                    <p>Sel hewan dan sel tumbuhan memiliki perbedaan penting yang mencerminkan cara hidup mereka:</p>
                    <table style="width:100%;border-collapse:collapse;font-size:0.88em;margin-top:0.5rem">
                        <thead><tr style="background:rgba(0,200,150,0.2)">
                            <th style="padding:6px 10px;text-align:left">Aspek</th>
                            <th style="padding:6px 10px;text-align:center">Sel Hewan</th>
                            <th style="padding:6px 10px;text-align:center">Sel Tumbuhan</th>
                        </tr></thead>
                        <tbody>
                            <tr><td style="padding:5px 10px">Dinding Sel</td><td style="text-align:center">❌</td><td style="text-align:center">✅</td></tr>
                            <tr style="background:rgba(255,255,255,0.05)"><td style="padding:5px 10px">Kloroplas</td><td style="text-align:center">❌</td><td style="text-align:center">✅</td></tr>
                            <tr><td style="padding:5px 10px">Vakuola</td><td style="text-align:center">Kecil / Tidak Ada</td><td style="text-align:center">Besar</td></tr>
                            <tr style="background:rgba(255,255,255,0.05)"><td style="padding:5px 10px">Lisosom</td><td style="text-align:center">✅</td><td style="text-align:center">❌</td></tr>
                            <tr><td style="padding:5px 10px">Bentuk</td><td style="text-align:center">Tidak tetap</td><td style="text-align:center">Tetap (persegi)</td></tr>
                        </tbody>
                    </table>
                    <div class="highlight-box" style="--slide-accent: var(--color-bio-sel);margin-top:0.8rem">
                        <span>Instruksi Simulasi</span>
                        <p>Klik <strong>Tumbuhan</strong> atau <strong>Hewan</strong> di panel kiri untuk melihat perbedaan organel secara visual!</p>
                    </div>
                `,
                visualType: "sim-cell",
                visualTitle: "Simulator Sel Hewan & Tumbuhan"
            },
            {
                title: "7. Cara Kerja Sel — Transport Zat",
                content: `
                    <p>Zat dapat masuk dan keluar sel melalui membran dengan tiga cara:</p>
                    <ul>
                        <li>➡️ <strong>Difusi:</strong> Pergerakan zat dari konsentrasi <em>tinggi → rendah</em>. Tidak memerlukan energi. <br><small>Contoh: Masuknya O₂ ke dalam sel.</small></li>
                        <li>💧 <strong>Osmosis:</strong> Difusi <em>air</em> melalui membran semi-permeabel dari konsentrasi rendah → tinggi.<br><small>Contoh: Penyerapan air oleh akar tumbuhan.</small></li>
                        <li>⚡ <strong>Transport Aktif:</strong> Pergerakan zat <em>melawan</em> gradien konsentrasi dengan bantuan energi (ATP).<br><small>Contoh: Penyerapan ion mineral oleh sel tumbuhan.</small></li>
                    </ul>
                    <div class="highlight-box" style="--slide-accent: var(--color-bio-sel)">
                        <span>Kunci Perbedaan</span>
                        <p>Difusi & Osmosis = <strong>Pasif</strong> (tanpa energi) | Transport Aktif = <strong>Aktif</strong> (butuh energi ATP)</p>
                    </div>
                `,
                visualType: "info-default",
                visualTitle: "Mekanisme Transport Membran"
            },
            {
                title: "8. Metabolisme Sel",
                content: `
                    <p>Sel melakukan dua proses metabolisme penting untuk kelangsungan hidup:</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-bio-sel)">
                        <span>🔥 Respirasi Seluler (Semua Sel)</span>
                        <p>Proses menghasilkan energi dari glukosa dan oksigen:</p>
                        <p style="text-align:center;font-family:monospace;font-size:0.9em">C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + <strong>Energi (ATP)</strong></p>
                    </div>
                    <div class="highlight-box" style="--slide-accent: #22c55e;margin-top:0.6rem">
                        <span>🌿 Fotosintesis (Khusus Sel Tumbuhan)</span>
                        <p>Proses menghasilkan makanan dari CO₂, air, dan cahaya matahari:</p>
                        <p style="text-align:center;font-family:monospace;font-size:0.9em">6CO₂ + 6H₂O + Cahaya → <strong>C₆H₁₂O₆</strong> + 6O₂</p>
                    </div>
                    <p style="margin-top:0.6rem">💡 <em>Respirasi = menggunakan glukosa untuk energi. Fotosintesis = membuat glukosa dari cahaya.</em></p>
                `,
                visualType: "info-default",
                visualTitle: "Respirasi & Fotosintesis"
            },
            {
                title: "9. Tingkat Organisasi Kehidupan",
                content: `
                    <p>Sel-sel yang berkhususan membentuk tingkatan organisasi yang semakin kompleks:</p>
                    <ol>
                        <li>🔬 <strong>Sel</strong> — Unit terkecil kehidupan.</li>
                        <li>🧵 <strong>Jaringan</strong> — Kumpulan sel yang memiliki fungsi sama.<br><small>Contoh: Jaringan otot, jaringan epidermis.</small></li>
                        <li>🫀 <strong>Organ</strong> — Kumpulan jaringan yang bekerja sama untuk fungsi tertentu.<br><small>Contoh: Jantung, Daun, Paru-paru.</small></li>
                        <li>⚙️ <strong>Sistem Organ</strong> — Kumpulan organ yang saling berkoordinasi.<br><small>Contoh: Sistem pencernaan, Sistem peredaran darah.</small></li>
                        <li>🌍 <strong>Organisme</strong> — Makhluk hidup yang utuh dan dapat menjalankan semua fungsi kehidupan.</li>
                    </ol>
                    <div class="highlight-box" style="--slide-accent: var(--color-bio-sel)">
                        <span>Hadiah Badge</span>
                        <p>Uji pemahamanmu di kuis berikutnya untuk meraih badge <strong>"Sitologi Master" 🔬</strong>!</p>
                    </div>
                `,
                visualType: "quiz-start",
                visualTitle: "Organisasi Kehidupan & Kuis"
            }
        ],
        quiz: [
            {
                question: "Siapakah ilmuwan pertama yang mengamati sel dan memberi nama 'sel' pada tahun 1665?",
                options: ["Anton van Leeuwenhoek", "Rudolf Virchow", "Robert Hooke", "Matthias Schleiden"],
                answer: 2,
                explanation: "Robert Hooke (1665) adalah orang pertama yang mengamati sel melalui mikroskop pada irisan gabus dan memberi istilah 'sel' karena mirip kamar biarawan (cellula)."
            },
            {
                question: "Proses pergerakan zat dari konsentrasi tinggi ke konsentrasi rendah TANPA memerlukan energi disebut...",
                options: ["Transport aktif", "Osmosis", "Difusi", "Endositosis"],
                answer: 2,
                explanation: "Difusi adalah pergerakan molekul dari konsentrasi tinggi ke rendah secara spontan tanpa memerlukan energi (ATP). Contohnya masuknya O₂ ke dalam sel."
            },
            {
                question: "Organel manakah yang HANYA dimiliki oleh sel tumbuhan dan berfungsi untuk fotosintesis?",
                options: ["Mitokondria", "Kloroplas", "Ribosom", "Lisosom"],
                answer: 1,
                explanation: "Kloroplas adalah organel khusus sel tumbuhan yang mengandung klorofil untuk menyerap cahaya matahari dan melakukan fotosintesis."
            },
            {
                question: "Urutan tingkat organisasi kehidupan dari yang terkecil ke terbesar yang BENAR adalah...",
                options: ["Organ → Jaringan → Sel → Organisme", "Sel → Jaringan → Organ → Sistem Organ → Organisme", "Jaringan → Sel → Organ → Organisme", "Sel → Organ → Jaringan → Organisme"],
                answer: 1,
                explanation: "Urutan yang benar: Sel → Jaringan → Organ → Sistem Organ → Organisme. Sel-sel yang serupa membentuk jaringan, jaringan membentuk organ, dan seterusnya."
            },
            {
                question: "Apa produk utama yang dihasilkan dari proses RESPIRASI SELULER di dalam sel?",
                options: ["Glukosa dan Oksigen", "Karbon dioksida saja", "Energi (ATP), CO₂, dan H₂O", "Klorofil dan ATP"],
                answer: 2,
                explanation: "Respirasi seluler memecah glukosa + O₂ untuk menghasilkan Energi (ATP) + CO₂ + H₂O. Rumus: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP."
            }
        ]
    },
    2: {
        title: "Struktur dan Fungsi Tubuh Makhluk Hidup",
        tag: "BAB 2",
        subject: "Biologi",
        themeColor: "var(--color-bio-tubuh)",
        badgeName: "Fisiologi Anatomis",
        badgeIcon: "🫁",
        slides: [
            {
                title: "Makanan, Zat Gizi & Pencernaan",
                content: `
                    <p>Tubuh kita memerlukan nutrisi untuk pertumbuhan, energi, dan perbaikan sel. Zat makanan tersebut meliputi karbohidrat, protein, lemak, vitamin, mineral, dan air.</p>
                    <p><strong>Sistem Pencernaan Manusia:</strong></p>
                    <ul>
                        <li><strong>Mekanik:</strong> Penghancuran makanan oleh gigi di rongga mulut.</li>
                        <li><strong>Kimiawi:</strong> Pemecahan senyawa kompleks menjadi zat sederhana dibantu oleh <em>enzim pencernaan</em> (seperti amilase, pepsin, lipase).</li>
                    </ul>
                `,
                visualType: "info-digestive",
                visualTitle: "Sistem Pencernaan Manusia"
            },
            {
                title: "Sistem Organ Utama Tubuh",
                content: `
                    <p>Kehidupan manusia ditopang oleh koordinasi sistem organ yang kompleks:</p>
                    <ul>
                        <li><strong>Sistem Pernapasan:</strong> Memasukkan oksigen (O₂) dan mengeluarkan karbon dioksida (CO₂) melalui Hidung → Tenggorokan → Paru-paru (Alveolus).</li>
                        <li><strong>Sistem Peredaran Darah:</strong> Memompa darah kaya oksigen dan nutrisi ke seluruh tubuh via Jantung, Pembuluh Darah, dan Sel Darah.</li>
                        <li><strong>Sistem Ekskresi:</strong> Pembuangan sisa metabolisme yang beracun via Ginjal (urin), Kulit (keringat), Paru-paru (CO₂), Hati (cairan empedu).</li>
                    </ul>
                    <div class="highlight-box" style="--slide-accent: var(--color-bio-tubuh)">
                        <span>Interaksi Visual</span>
                        <p>Klik penanda berkedip di panel visual sebelah kiri untuk mengetahui fungsi dari masing-masing organ vital tubuh kita!</p>
                    </div>
                `,
                visualType: "sim-organ",
                visualTitle: "Pemetaan Sistem Organ Vital"
            },
            {
                title: "Gangguan pada Sistem Tubuh",
                content: `
                    <p>Kelalaian dalam menjaga pola hidup sehat dapat menyebabkan kelainan pada tubuh:</p>
                    <ol>
                        <li><strong>Pencernaan:</strong> Maag (peradangan lambung akibat asam berlebih), Konstipasi (kurang serat).</li>
                        <li><strong>Pernapasan:</strong> Asma (penyempitan saluran napas), Tuberkulosis (infeksi bakteri TBC).</li>
                        <li><strong>Ekskresi:</strong> Gagal Ginjal (kerusakan nefron), Batu Ginjal (kristalisasi kalsium).</li>
                    </ol>
                `,
                visualType: "info-disease",
                visualTitle: "Analisis Kelainan Medis"
            },
            {
                title: "Saatnya Menguji Pemahaman!",
                content: `
                    <p>Mari ukur pemahamanmu mengenai sistem organ tubuh manusia.</p>
                    <p>Selesaikan kuis 3 nomor berikut dengan teliti untuk memvalidasi pengetahuanmu tentang pencernaan, peredaran darah, dan ekskresi.</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-bio-tubuh)">
                        <span>Badge Menantimu</span>
                        <p>Dapatkan skor sempurna untuk membuka badge <strong>"Fisiologi Anatomis" 🫁</strong>!</p>
                    </div>
                `,
                visualType: "quiz-start",
                visualTitle: "Kuis Evaluasi Bab 2"
            }
        ],
        quiz: [
            {
                question: "Manakah enzim di rongga mulut yang berfungsi mengubah amilum menjadi maltosa?",
                options: ["Pepsin", "Amilase (Ptialin)", "Lipase", "Tripsin"],
                answer: 1,
                explanation: "Enzim amilase (ptialin) dihasilkan oleh kelenjar ludah dan memecah karbohidrat (amilum) menjadi gula sederhana di rongga mulut."
            },
            {
                question: "Bagian paru-paru manakah yang berfungsi sebagai tempat pertukaran oksigen dan karbon dioksida?",
                options: ["Bronkus", "Trakea", "Alveolus", "Pleura"],
                answer: 2,
                explanation: "Alveolus adalah kantung udara kecil di ujung bronkiolus yang dikelilingi kapiler darah, tempat difusi gas O2 dan CO2 berlangsung."
            },
            {
                question: "Organ ekskresi manakah yang berfungsi untuk menyaring darah dan menghasilkan urin?",
                options: ["Hati", "Ginjal", "Paru-paru", "Kulit"],
                answer: 1,
                explanation: "Ginjal berfungsi sebagai organ penyaring darah utama untuk membuang urea, air berlebih, dan garam dalam bentuk urin."
            }
        ]
    },
    3: {
        title: "Usaha, Energi dan Pesawat Sederhana",
        tag: "BAB 3",
        subject: "Fisika",
        themeColor: "var(--color-phys-energi)",
        badgeName: "Mekanika Terapan",
        badgeIcon: "⚙️",
        slides: [
            {
                title: "Konsep Usaha dan Energi",
                content: `
                    <p>Dalam sains, <strong>Usaha ($W$)</strong> didefinisikan sebagai perkalian gaya yang searah perpindahan dengan jarak perpindahannya.</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-phys-energi)">
                        <span>Rumus Fisika</span>
                        \\[W = F \\times s\\]
                        <p style="font-size:0.8rem; margin-top:0.5rem;">$W$ = Usaha (Joule), $F$ = Gaya (Newton), $s$ = Perpindahan (Meter)</p>
                    </div>
                    <p>Usaha hanya terjadi jika gaya menyebabkan benda <strong>berpindah tempat</strong>. Jika kamu mendorong dinding sekuat tenaga tetapi dinding tetap diam, secara fisika usahamu bernilai <strong>nol</strong>.</p>
                `,
                visualType: "info-physics-intro",
                visualTitle: "Visualisasi Gaya & Perpindahan"
            },
            {
                title: "Pesawat Sederhana: Jenis & Manfaat",
                content: `
                    <p>Pesawat sederhana adalah alat bantu mekanik yang memudahkan usaha manusia dengan cara mengubah arah atau besar gaya.</p>
                    <ul>
                        <li><strong>Tuas / Pengungkit:</strong> Terdiri atas titik tumpu, titik beban, dan titik kuasa.</li>
                        <li><strong>Bidang Miring:</strong> Memperkecil gaya kuasa dengan memperpanjang lintasan miring ($s$).</li>
                        <li><strong>Katrol:</strong> Mengubah arah gaya (katrol tetap) atau melipatgandakan gaya (katrol bebas).</li>
                        <li><strong>Roda Berporos:</strong> Mempercepat kecepatan gerak (contoh: sepeda, gir).</li>
                    </ul>
                `,
                visualType: "info-simple-machines",
                visualTitle: "Klasifikasi Pesawat Sederhana"
            },
            {
                title: "Simulasi Interaktif Pengungkit (Tuas)",
                content: `
                    <p>Keuntungan mekanis ($KM$) pengungkit ditentukan oleh rasio panjang lengan kuasa ($L_k$) dibanding lengan beban ($L_b$).</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-phys-energi)">
                        <span>Persamaan Tuas</span>
                        \\[W \\times L_b = F \\times L_k\\]
                        <p style="font-size:0.8rem; margin-top:0.5rem;">$W$ = Berat beban, $F$ = Gaya Kuasa, $L_b$ = Lengan Beban, $L_k$ = Lengan Kuasa</p>
                    </div>
                    <p><strong>Eksperimen:</strong> Geser slider lengan beban dan lengan kuasa di panel kiri untuk melihat perubahan gaya kuasa yang diperlukan!</p>
                `,
                visualType: "sim-lever",
                visualTitle: "Eksperimen Interaktif Hukum Tuas"
            },
            {
                title: "Tes Kemampuan Mekanikamu!",
                content: `
                    <p>Sudah siap menguji pemahaman fisikamu?</p>
                    <p>Kuis ini terdiri dari soal-soal hitungan sederhana mengenai rumus usaha dan keuntungan mekanis pesawat sederhana.</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-phys-energi)">
                        <span>Piala Penghargaan</span>
                        <p>Jawab semua soal dengan tepat untuk merebut badge kehormatan <strong>"Mekanika Terapan" ⚙️</strong>!</p>
                    </div>
                `,
                visualType: "quiz-start",
                visualTitle: "Kuis Evaluasi Bab 3"
            }
        ],
        quiz: [
            {
                question: "Sebuah balok ditarik dengan gaya 20 N sehingga berpindah sejauh 5 meter. Berapa usaha yang dilakukan pada balok?",
                options: ["4 Joule", "25 Joule", "100 Joule", "15 Joule"],
                answer: 2,
                explanation: "W = F * s = 20 N * 5 m = 100 Joule."
            },
            {
                question: "Pesawat sederhana jenis apakah yang memanfaatkan prinsip memperpanjang lintasan miring untuk memperkecil gaya?",
                options: ["Katrol Tetap", "Roda Berporos", "Bidang Miring", "Pengungkit Jenis I"],
                answer: 2,
                explanation: "Bidang miring mengurangi gaya yang dibutuhkan untuk mengangkat benda dengan cara mendistribusikan beban sepanjang lintasan miring."
            },
            {
                question: "Pada pengungkit, jika lengan kuasa (Lk) lebih panjang dari lengan beban (Lb), maka gaya kuasa yang diperlukan akan...",
                options: ["Lebih besar dari beban", "Lebih kecil dari beban", "Sama dengan berat beban", "Nol"],
                answer: 1,
                explanation: "Jika Lk > Lb, maka Keuntungan Mekanis > 1, sehingga Gaya Kuasa (F) yang diperlukan menjadi lebih kecil daripada berat beban (W)."
            }
        ]
    },
    4: {
        title: "Getaran, Gelombang dan Cahaya",
        tag: "BAB 4",
        subject: "Fisika",
        themeColor: "var(--color-phys-gelombang)",
        badgeName: "Wave Navigator",
        badgeIcon: "🌊",
        slides: [
            {
                title: "Getaran & Parameter Dasarnya",
                content: `
                    <p><strong>Getaran</strong> adalah gerakan bolak-balik secara periodik (teratur) melalui titik kesetimbangan. Contoh klasik getaran adalah ayunan bandul jam dinding.</p>
                    <ul>
                        <li><strong>Amplitudo ($A$):</strong> Simpangan terjauh dari titik kesetimbangan.</li>
                        <li><strong>Frekuensi ($f$):</strong> Jumlah getaran yang terjadi dalam satu detik (Hertz/Hz).</li>
                        <li><strong>Periode ($T$):</strong> Waktu yang diperlukan untuk melakukan satu getaran penuh.</li>
                    </ul>
                    <div class="highlight-box" style="--slide-accent: var(--color-phys-gelombang)">
                        <span>Hubungan Frekuensi & Periode</span>
                        \\[f = \\frac{1}{T} \\quad \\text{atau} \\quad T = \\frac{1}{f}\\]
                    </div>
                `,
                visualType: "info-vibration",
                visualTitle: "Getaran Bandul Periodik"
            },
            {
                title: "Gelombang Transversal & Longitudinal",
                content: `
                    <p><strong>Gelombang</strong> adalah getaran yang merambat membawa energi tanpa memindahkan medium perantaranya.</p>
                    <ol>
                        <li><strong>Gelombang Transversal:</strong> Arah rambat tegak lurus arah getar (contoh: gelombang air, tali, cahaya). Memiliki bukit dan lembah.</li>
                        <li><strong>Gelombang Longitudinal:</strong> Arah rambat sejajar arah getar (contoh: gelombang suara, slinki). Memiliki rapatan dan renggangan.</li>
                    </ol>
                    <p><strong>Instruksi Visual:</strong> Sesuaikan amplitudo dan frekuensi gelombang sinus pada simulator di panel kiri!</p>
                `,
                visualType: "sim-wave",
                visualTitle: "Simulator Gelombang Dinamis"
            },
            {
                title: "Cahaya, Pembiasan, dan Alat Optik",
                content: `
                    <p>Cahaya adalah gelombang elektromagnetik transversal yang dapat merambat tanpa medium (ruang hampa).</p>
                    <p><strong>Sifat Cahaya:</strong> Merambat lurus, menembus benda bening, dapat dipantulkan (refleksi), dan dapat dibiaskan (refraksi).</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-phys-gelombang)">
                        <span>Hukum Pembiasan Snellius</span>
                        <p>Cahaya yang merambat dari medium kurang rapat ke medium lebih rapat (misalnya dari udara ke air) akan dibiaskan mendekati garis normal.</p>
                    </div>
                `,
                visualType: "info-light",
                visualTitle: "Fenomena Pembiasan Cahaya"
            },
            {
                title: "Uji Kompetensi Gelombang & Cahaya",
                content: `
                    <p>Mari uji pengetahuan fisikamu mengenai teori getaran, jenis-jenis gelombang, serta sifat optik cahaya.</p>
                    <p>Selesaikan 3 nomor soal kuis interaktif berikut untuk memastikan pemahaman teoritis dan analitismu.</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-phys-gelombang)">
                        <span>Gelar Kelulusan</span>
                        <p>Sukses menjawab benar semua soal akan menganugerahkan badge <strong>"Wave Navigator" 🌊</strong>!</p>
                    </div>
                `,
                visualType: "quiz-start",
                visualTitle: "Kuis Evaluasi Bab 4"
            }
        ],
        quiz: [
            {
                question: "Jika sebuah bandul melakukan 40 getaran dalam waktu 10 detik, berapakah frekuensi getaran tersebut?",
                options: ["0.25 Hz", "4 Hz", "400 Hz", "40 Hz"],
                answer: 1,
                explanation: "Frekuensi (f) = Jumlah Getaran (n) / Waktu (t) = 40 / 10 = 4 Hz."
            },
            {
                question: "Manakah contoh gelombang longitudinal dalam kehidupan sehari-hari?",
                options: ["Gelombang cahaya matahari", "Gelombang bunyi di udara", "Gelombang pada tali jemuran", "Gelombang air laut"],
                answer: 1,
                explanation: "Bunyi adalah gelombang longitudinal yang merambat melalui kompresi (rapatan) dan ekspansi (renggangan) partikel udara."
            },
            {
                question: "Peristiwa pensil terlihat patah saat dimasukkan ke dalam gelas berisi air adalah bukti sifat cahaya yaitu...",
                options: ["Pemantulan", "Merambat Lurus", "Pembiasan", "Pemisahan (Dispersi)"],
                answer: 2,
                explanation: "Perbedaan kerapatan optik udara dan air membelokkan jalannya cahaya (pembiasan), sehingga pensil tampak patah."
            }
        ]
    },
    5: {
        title: "Unsur, Senyawa dan Campuran",
        tag: "BAB 5",
        subject: "Kimia",
        themeColor: "var(--color-chem-materi)",
        badgeName: "Ahli Alkimia Modern",
        badgeIcon: "🧪",
        slides: [
            {
                title: "Klasifikasi Materi",
                content: `
                    <p>Semua benda di alam semesta yang menempati ruang dan memiliki massa disebut <strong>materi</strong>. Berdasarkan komposisinya, materi dibagi menjadi:</p>
                    <ul>
                        <li><strong>Zat Tunggal:</strong> Zat murni yang terdiri dari satu jenis materi.
                            <ul>
                                <li><strong>Unsur:</strong> Zat tunggal terkecil yang tidak dapat dibagi lagi secara kimia biasa (contoh: Emas (Au), Oksigen (O), Hidrogen (H)).</li>
                                <li><strong>Senyawa:</strong> Gabungan dua atau lebih unsur kimia yang berbeda melalui ikatan kimia dengan perbandingan tetap (contoh: Air (H₂O), Karbondioksida (CO₂)).</li>
                            </ul>
                        </li>
                    </ul>
                `,
                visualType: "info-chemistry-intro",
                visualTitle: "Bagan Klasifikasi Materi Zat"
            },
            {
                title: "Perbedaan Senyawa & Campuran",
                content: `
                    <p>Meskipun sama-sama gabungan zat, keduanya memiliki sifat yang bertolak belakang:</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Karakteristik</th>
                                <th>Senyawa</th>
                                <th>Campuran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pembentukan</td>
                                <td>Reaksi Kimia</td>
                                <td>Fisika Biasa</td>
                            </tr>
                            <tr>
                                <td>Sifat Asal Zat</td>
                                <td>Hilang/Berubah</td>
                                <td>Tetap Ada</td>
                            </tr>
                            <tr>
                                <td>Pemisahan</td>
                                <td>Kimiawi saja</td>
                                <td>Fisik (Penyaringan)</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="highlight-box" style="--slide-accent: var(--color-chem-materi)">
                        <span>Visualizer Molekul</span>
                        <p>Pilih senyawa kimia di panel visual kiri untuk memvisualisasikan bagaimana atom berikatan membentuk molekul senyawa!</p>
                    </div>
                `,
                visualType: "sim-chemistry",
                visualTitle: "Pemodelan Molekul Senyawa"
            },
            {
                title: "Campuran Homogen & Heterogen",
                content: `
                    <p>Campuran dibedakan berdasarkan kemudahan partikel penyusunnya menyatu:</p>
                    <ol>
                        <li><strong>Campuran Homogen (Larutan):</strong> Campuran yang serba sama di setiap bagiannya, zat pelarut dan terlarut tidak dapat dibedakan lagi secara kasat mata (contoh: Larutan gula, udara, kuningan).</li>
                        <li><strong>Campuran Heterogen:</strong> Campuran yang zat penyusunnya masih dapat dibedakan dengan jelas karena tidak menyatu sempurna (contoh: Air kopi, campuran minyak dan air, air pasir).</li>
                    </ol>
                `,
                visualType: "info-mixtures",
                visualTitle: "Klasifikasi Campuran"
            },
            {
                title: "Uji Keahlian Kimia Kimu!",
                content: `
                    <p>Apakah kamu sudah menguasai klasifikasi materi atom, unsur, senyawa dan jenis campuran?</p>
                    <p>Uji pemahaman teoritis kimiamu melalui 3 pertanyaan kuis seru berikut.</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-chem-materi)">
                        <span>Tantangan Emas</span>
                        <p>Kumpulkan poin sempurna dan dapatkan lencana <strong>"Ahli Alkimia Modern" 🧪</strong>!</p>
                    </div>
                `,
                visualType: "quiz-start",
                visualTitle: "Kuis Evaluasi Bab 5"
            }
        ],
        quiz: [
            {
                question: "Zat tunggal yang secara kimia biasa tidak dapat diuraikan lagi menjadi zat lain yang lebih sederhana disebut...",
                options: ["Campuran", "Unsur", "Senyawa", "Larutan"],
                answer: 1,
                explanation: "Unsur adalah zat tunggal murni yang merupakan bahan dasar penyusun materi dan tidak bisa disederhanakan lagi secara kimia."
            },
            {
                question: "Manakah di bawah ini yang dikategorikan sebagai zat senyawa kimia?",
                options: ["Emas murni (Au)", "Garam dapur (NaCl)", "Air kopi", "Udara bersih"],
                answer: 1,
                explanation: "Garam dapur (Natrium Klorida / NaCl) dibentuk dari penggabungan unsur Natrium dan Klorin melalui ikatan kimia kimiawi."
            },
            {
                question: "Campuran homogen yang zat terlarutnya tidak dapat dibedakan lagi dengan pelarutnya disebut...",
                options: ["Suspensi", "Koloid", "Larutan", "Campuran Kasar"],
                answer: 2,
                explanation: "Larutan adalah campuran homogen sempurna antara zat terlarut dan pelarut sehingga tampak menyatu secara seragam."
            }
        ]
    },
    6: {
        title: "Struktur Bumi dan Perkembangannya",
        tag: "BAB 6",
        subject: "Geologi",
        themeColor: "var(--color-earth-bumi)",
        badgeName: "Geofisikawan Handal",
        badgeIcon: "🌋",
        slides: [
            {
                title: "Lapisan Utama Bumi",
                content: `
                    <p>Bumi kita tidak padat merata, melainkan berlapis-lapis mirip bawang bombai dengan karakteristik berbeda:</p>
                    <ol>
                        <li><strong>Kerak Bumi (Crust):</strong> Lapisan terluar tempat kita hidup. Sangat tipis (5-70 km). Terdiri dari lempeng samudera & benua.</li>
                        <li><strong>Mantel Bumi (Mantle):</strong> Lapisan terbesar (tebal &plusmn; 2.900 km). Berisi batuan semi-cair panas bersuhu tinggi.</li>
                        <li><strong>Inti Luar (Outer Core):</strong> Lapisan cair tebal terdiri dari besi & nikel cair, bersuhu mencapai 4.000&deg;C.</li>
                        <li><strong>Inti Dalam (Inner Core):</strong> Bola logam padat akibat tekanan sangat tinggi, suhunya menyamai permukaan matahari (5.400&deg;C).</li>
                    </ol>
                `,
                visualType: "sim-earth",
                visualTitle: "Penampang Lapisan Bumi"
            },
            {
                title: "Lempeng Tektonik & Pergeserannya",
                content: `
                    <p>Kerak bumi terpecah menjadi lempeng-lempeng tektonik yang selalu bergerak lambat akibat arus konveksi di bawah mantel bumi.</p>
                    <p><strong>Jenis Batas Lempeng:</strong></p>
                    <ul>
                        <li><strong>Konvergen:</strong> Dua lempeng saling bertumbukan (menyebabkan terbentuknya gunung api & palung laut).</li>
                        <li><strong>Divergen:</strong> Dua lempeng saling menjauh (menyebabkan magma naik dan membentuk lantai samudera baru).</li>
                        <li><strong>Transform (Sesar):</strong> Lempeng bergeseran secara sejajar (menyebabkan gempa bumi kuat tanpa magma).</li>
                    </ul>
                `,
                visualType: "info-tectonics",
                visualTitle: "Pergerakan Lempeng Litosfer"
            },
            {
                title: "Gempa Bumi & Mitigasi Bencana",
                content: `
                    <p>Indonesia berada di zona <em>Ring of Fire</em> (Cincin Api Pasifik), pertemuan 3 lempeng tektonik aktif utama dunia (Indo-Australia, Eurasia, Pasifik).</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-earth-bumi)">
                        <span>Mitigasi Gempa Bumi</span>
                        <p>1. <strong>Saat Gempa:</strong> Lindungi kepala di bawah meja kokoh, jauhi kaca dan benda gantung.</p>
                        <p>2. <strong>Sesudah Gempa:</strong> Evakuasi ke titik kumpul terbuka, waspadai potensi tsunami jika tinggal di pesisir pantai.</p>
                    </div>
                `,
                visualType: "info-earthquake",
                visualTitle: "Cincin Api Pasifik & Gempa"
            },
            {
                title: "Uji Pemahaman Kebumianmu!",
                content: `
                    <p>Selamat! Kamu telah mencapai bab terakhir pembelajaran.</p>
                    <p>Mari tuntaskan petualangan belajarmu dengan menjawab 3 kuis terakhir tentang geologi bumi.</p>
                    <div class="highlight-box" style="--slide-accent: var(--color-earth-bumi)">
                        <span>Lencana Terakhir</span>
                        <p>Dapatkan nilai sempurna untuk meraih badge pamungkas <strong>"Geofisikawan Handal" 🌋</strong>!</p>
                    </div>
                `,
                visualType: "quiz-start",
                visualTitle: "Kuis Evaluasi Bab 6"
            }
        ],
        quiz: [
            {
                question: "Lapisan bumi yang wujudnya berupa logam padat yang sangat panas dan berada di pusat bumi adalah...",
                options: ["Kerak Bumi", "Inti Dalam", "Mantel Bumi", "Inti Luar"],
                answer: 1,
                explanation: "Inti dalam adalah bola logam besi-nikel padat karena mendapat tekanan gravitasi yang luar biasa dari lapisan di atasnya."
            },
            {
                question: "Pergerakan lempeng tektonik yang saling bertumbukan dinamakan...",
                options: ["Divergen", "Konvergen", "Transform", "Sesar mendatar"],
                answer: 1,
                explanation: "Konvergen adalah batas gerakan lempeng yang saling mendekat dan bertumbukan, sering kali memicu gempa bumi dan pegunungan vulkanik."
            },
            {
                question: "Mengapa wilayah Indonesia sering mengalami gempa bumi tektonik?",
                options: ["Berada di garis khatulistiwa", "Dilalui angin topan muson tropis", "Terletak di pertemuan 3 lempeng tektonik utama", "Memiliki banyak sungai besar"],
                answer: 2,
                explanation: "Indonesia berada di pertemuan Lempeng Indo-Australia, Eurasia, dan Pasifik yang aktif bertabrakan sehingga rawan gempa."
            }
        ]
    }
};

// 2. AUDIO SYNTHESIZER ENGINE (Web Audio API)
const AudioSynth = {
    ctx: null,
    enabled: true,

    init() {
        if (this.ctx) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        } catch (e) {
            console.warn("Web Audio API tidak didukung pada browser ini.");
        }
    },

    toggle() {
        this.enabled = !this.enabled;
        this.init();
        return this.enabled;
    },

    playTone(freq, type, duration, volume = 0.1) {
        if (!this.enabled || !this.ctx) return;
        
        // Resume context if suspended (browser security autoplays)
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = type; // 'sine', 'square', 'sawtooth', 'triangle'
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        
        gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
        // Exponential decay envelope
        gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    },

    // Audio SFX Preset
    playClick() {
        this.init();
        this.playTone(600, 'sine', 0.15, 0.15);
    },

    playSweep() {
        this.init();
        if (!this.enabled || !this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.3);

        gainNode.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    },

    playCorrect() {
        this.init();
        const now = this.ctx ? this.ctx.currentTime : 0;
        // Arpeggio chord C major
        setTimeout(() => this.playTone(523.25, 'sine', 0.25, 0.1), 0); // C5
        setTimeout(() => this.playTone(659.25, 'sine', 0.25, 0.1), 100); // E5
        setTimeout(() => this.playTone(783.99, 'sine', 0.25, 0.1), 200); // G5
        setTimeout(() => this.playTone(1046.50, 'sine', 0.4, 0.15), 300); // C6
    },

    playWrong() {
        this.init();
        if (!this.enabled || !this.ctx) return;
        this.playTone(150, 'sawtooth', 0.3, 0.25);
    },

    playTriumph() {
        this.init();
        if (!this.enabled || !this.ctx) return;
        const chords = [392.00, 523.25, 659.25, 783.99, 1046.50, 1318.51]; // G4, C5, E5, G5, C6, E6
        chords.forEach((freq, idx) => {
            setTimeout(() => {
                this.playTone(freq, 'triangle', 0.5, 0.12);
            }, idx * 120);
        });
    }
};

// 3. CANVAS PARTICLE SYSTEM ENGINE
const ParticleEngine = {
    canvas: null,
    ctx: null,
    particles: [],
    animationId: null,
    currentTheme: 'default', // 'default', 'bio', 'phys', 'chem', 'earth'

    init() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
        this.start();
    },

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createParticles();
    },

    setTheme(theme) {
        this.currentTheme = theme;
        this.createParticles();
    },

    createParticles() {
        this.particles = [];
        const count = Math.min(Math.floor(window.innerWidth / 15), 80);
        
        for (let i = 0; i < count; i++) {
            this.particles.push(this.spawnParticle());
        }
    },

    spawnParticle() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        const p = {
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 3 + 1,
            color: 'rgba(99, 102, 241, 0.2)',
            type: 'dot',
            extra: {}
        };

        // Theme modifications
        if (this.currentTheme === 'bio') {
            p.color = Math.random() > 0.5 ? 'rgba(16, 185, 129, 0.25)' : 'rgba(52, 211, 153, 0.2)';
            p.size = Math.random() * 8 + 4; // larger biological blobs
            p.type = 'cell';
            p.extra = {
                pulseSpeed: Math.random() * 0.05 + 0.01,
                angle: Math.random() * Math.PI
            };
        } else if (this.currentTheme === 'phys') {
            p.color = Math.random() > 0.5 ? 'rgba(6, 182, 212, 0.3)' : 'rgba(59, 130, 246, 0.25)';
            p.vx = (Math.random() - 0.5) * 1.5; // faster electrical energy
            p.vy = (Math.random() - 0.5) * 1.5;
            p.type = 'energy';
        } else if (this.currentTheme === 'chem') {
            p.color = 'rgba(168, 85, 247, 0.25)';
            p.size = Math.random() * 4 + 2;
            p.type = 'atom';
            p.extra = {
                orbitRadius: Math.random() * 20 + 10,
                orbitSpeed: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.03 + 0.01),
                angle: Math.random() * Math.PI * 2
            };
        } else if (this.currentTheme === 'earth') {
            p.color = Math.random() > 0.5 ? 'rgba(245, 158, 11, 0.25)' : 'rgba(239, 68, 68, 0.2)';
            p.vy = -Math.random() * 0.5 - 0.1; // rising magma ashes
            p.vx = (Math.random() - 0.5) * 0.3;
            p.size = Math.random() * 5 + 1;
            p.type = 'ash';
        }

        return p;
    },

    start() {
        const loop = () => {
            this.update();
            this.draw();
            this.animationId = requestAnimationFrame(loop);
        };
        loop();
    },

    update() {
        const w = this.canvas.width;
        const h = this.canvas.height;

        this.particles.forEach(p => {
            if (p.type === 'atom') {
                p.extra.angle += p.extra.orbitSpeed;
                p.x += p.vx;
                p.y += p.vy;
            } else if (p.type === 'ash') {
                p.x += p.vx;
                p.y += p.vy;
                if (p.y < -10) {
                    p.y = h + 10;
                    p.x = Math.random() * w;
                }
            } else {
                p.x += p.vx;
                p.y += p.vy;
            }

            // Boundary wrap around
            if (p.x < -20) p.x = w + 20;
            if (p.x > w + 20) p.x = -20;
            if (p.y < -20 && p.type !== 'ash') p.y = h + 20;
            if (p.y > h + 20 && p.type !== 'ash') p.y = -20;
        });
    },

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            this.ctx.beginPath();
            if (p.type === 'cell') {
                // Biological cell (circle with nucleolus outline)
                p.extra.angle += p.extra.pulseSpeed;
                const r = p.size + Math.sin(p.extra.angle) * 1.5;
                this.ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
                this.ctx.fillStyle = p.color;
                this.ctx.fill();
                // inner nucleus
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, r * 0.35, 0, Math.PI * 2);
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                this.ctx.fill();
            } else if (p.type === 'atom') {
                // Draw atom core
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fillStyle = p.color;
                this.ctx.fill();
                // Draw orbiting electrons path
                this.ctx.beginPath();
                this.ctx.ellipse(p.x, p.y, p.extra.orbitRadius, p.extra.orbitRadius * 0.4, Math.PI / 4, 0, Math.PI * 2);
                this.ctx.strokeStyle = 'rgba(168, 85, 247, 0.08)';
                this.ctx.lineWidth = 1;
                this.ctx.stroke();

                // Electron dot
                const ex = p.x + Math.cos(p.extra.angle) * p.extra.orbitRadius;
                const ey = p.y + Math.sin(p.extra.angle) * p.extra.orbitRadius * 0.4;
                this.ctx.beginPath();
                this.ctx.arc(ex, ey, 2, 0, Math.PI * 2);
                this.ctx.fillStyle = '#c084fc';
                this.ctx.fill();
            } else {
                // Default dot
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                this.ctx.fillStyle = p.color;
                this.ctx.fill();
            }
        });
    }
};

// 4. MAIN APP STATE & CONTROLLER
const App = {
    // State Variables
    currentScreen: 'cover', // 'cover', 'dashboard', 'workspace'
    currentChapterId: null,
    currentSlideIdx: 0,
    
    // User Session Stats (stored in memory)
    stats: {
        completedChapters: {}, // chapterId: true/false
        quizScores: {},       // chapterId: score
        unlockedBadges: [],   // list of badge names
    },

    // Wave Simulator state (Bab 4)
    waveState: {
        amplitude: 40,
        frequency: 0.02,
        phase: 0,
        animId: null
    },

    // Init function
    init() {
        // Elements Binding
        this.bindEvents();
        
        // Init Background Particles
        ParticleEngine.init();
        ParticleEngine.setTheme('default');
    },

    bindEvents() {
        // Start Button
        document.getElementById('btn-start').addEventListener('click', () => {
            AudioSynth.playSweep();
            this.switchScreen('dashboard');
        });

        // Open Chapters Modal Button
        document.getElementById('btn-open-chapters').addEventListener('click', () => {
            AudioSynth.playClick();
            this.showChaptersModal(true);
        });

        // Close Chapters Modal Button
        document.getElementById('btn-close-modal').addEventListener('click', () => {
            AudioSynth.playClick();
            this.showChaptersModal(false);
        });

        // Click outside modal to close
        document.getElementById('chapter-modal').addEventListener('click', (e) => {
            if (e.target.id === 'chapter-modal') {
                this.showChaptersModal(false);
            }
        });

        // Back to Dashboard from Workspace Button
        document.getElementById('btn-back-dashboard').addEventListener('click', () => {
            AudioSynth.playClick();
            this.exitWorkspace();
        });

        // Prev & Next Slide Buttons
        document.getElementById('btn-prev-slide').addEventListener('click', () => this.navigateSlide(-1));
        document.getElementById('btn-next-slide').addEventListener('click', () => this.navigateSlide(1));

        // Sound Toggle buttons
        const toggleSound = () => {
            const enabled = AudioSynth.toggle();
            const icons = [document.querySelector('#btn-sound-toggle i'), document.querySelector('#btn-sound-toggle-ws i')];
            icons.forEach(icon => {
                if (icon) {
                    icon.setAttribute('data-lucide', enabled ? 'volume-2' : 'volume-x');
                }
            });
            lucide.createIcons();
            if (enabled) AudioSynth.playClick();
        };
        document.getElementById('btn-sound-toggle').addEventListener('click', toggleSound);
        document.getElementById('btn-sound-toggle-ws').addEventListener('click', toggleSound);

        // Quick chapter items clicking
        document.querySelectorAll('.quick-chapter-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.getAttribute('data-chapter'));
                this.startChapter(id);
            });
        });

        // Modal chapter cards clicking
        document.querySelectorAll('.modal-chapter-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.getAttribute('data-chapter'));
                this.showChaptersModal(false);
                this.startChapter(id);
            });
        });

        // Global delegate for PDF LKPD buttons
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('#btn-download-pdf-tp1, #btn-open-pdf-top, .btn-pdf-download, .btn-pdf-toggle');
            if (btn) {
                e.preventDefault();
                AudioSynth.playClick();
                this.generateTP1PDF();
            }
        });
    },

    // Navigation and screen control
    switchScreen(screenName) {
        this.currentScreen = screenName;
        
        document.getElementById('cover-screen').className = screenName === 'cover' ? 'active-screen' : 'hidden';
        document.getElementById('dashboard-screen').className = screenName === 'dashboard' ? '' : 'hidden';
        document.getElementById('presentation-workspace').className = screenName === 'workspace' ? '' : 'hidden';

        // Background Particles theme matching
        if (screenName === 'cover' || screenName === 'dashboard') {
            ParticleEngine.setTheme('default');
        }
    },

    showChaptersModal(show) {
        const modal = document.getElementById('chapter-modal');
        if (show) {
            modal.classList.remove('hidden');
        } else {
            modal.classList.add('hidden');
        }
    },

    // Chapter Session Start
    startChapter(id) {
        this.currentChapterId = id;
        this.currentSlideIdx = 0;
        
        // Play Audio transition
        AudioSynth.playSweep();

        // Match Particle System Theme to Subject
        const chData = CHAPTERS_DATA[id];
        if (id === 1 || id === 2) ParticleEngine.setTheme('bio');
        else if (id === 3 || id === 4) ParticleEngine.setTheme('phys');
        else if (id === 5) ParticleEngine.setTheme('chem');
        else if (id === 6) ParticleEngine.setTheme('earth');

        this.switchScreen('workspace');
        this.renderSlide();
    },

    exitWorkspace() {
        // Stop any active simulations loops
        if (this.waveState.animId) {
            cancelAnimationFrame(this.waveState.animId);
            this.waveState.animId = null;
        }

        // Restore normal grid layout
        const wsGrid = document.querySelector('.workspace-grid');
        const contentPanel = document.querySelector('.content-panel');
        if (wsGrid) wsGrid.classList.remove('wb-fullwidth-mode');
        if (contentPanel) contentPanel.classList.remove('hidden');

        this.updateDashboardStats();
        this.switchScreen('dashboard');
    },

    // Slide Rendering
    renderSlide() {
        const chData = CHAPTERS_DATA[this.currentChapterId];
        const slides = chData.slides;
        const slide = slides[this.currentSlideIdx];

        // 1. Update Title and Tags
        document.getElementById('ws-badge').innerText = chData.tag;
        document.getElementById('ws-title').innerText = chData.title;
        document.getElementById('slide-num').innerText = `Slide ${this.currentSlideIdx + 1} dari ${slides.length}`;

        // Set Slide Accent Color Variable
        document.getElementById('presentation-workspace').style.setProperty('--slide-accent', chData.themeColor);

        // 2. Render Text Content Panel
        const contentArea = document.getElementById('slide-content-area');
        contentArea.innerHTML = `
            <h2>${slide.title}</h2>
            <div class="slide-body-inner">
                ${slide.content}
            </div>
        `;

        // 3. Render Visual Simulator Panel & Handle Full-Width for Interactive Whiteboard (Slide 4)
        const wsGrid = document.querySelector('.workspace-grid');
        const contentPanel = document.querySelector('.content-panel');
        const isWhiteboardSlide = (slide.visualType === 'interactive-whiteboard-tp1');

        if (isWhiteboardSlide) {
            if (wsGrid) wsGrid.classList.add('wb-fullwidth-mode');
            if (contentPanel) contentPanel.classList.add('hidden');
        } else {
            if (wsGrid) wsGrid.classList.remove('wb-fullwidth-mode');
            if (contentPanel) contentPanel.classList.remove('hidden');
        }

        const viewport = document.getElementById('viewport-content');
        document.getElementById('panel-title').innerText = slide.visualTitle;
        
        // Stop any active animation loop
        if (this.waveState.animId) {
            cancelAnimationFrame(this.waveState.animId);
            this.waveState.animId = null;
        }

        viewport.innerHTML = ''; // clear viewport
        this.renderVisualComponent(slide.visualType, viewport);

        // 4. Update Navigation Buttons
        const prevBtn = document.getElementById('btn-prev-slide');
        const nextBtn = document.getElementById('btn-next-slide');
        
        prevBtn.disabled = this.currentSlideIdx === 0;
        
        // If last slide, change Next button text to "Kuis" or "Selesai"
        const isLastSlide = this.currentSlideIdx === slides.length - 1;
        const nextBtnSpan = nextBtn.querySelector('span');
        const nextBtnIcon = nextBtn.querySelector('i');
        
        if (isLastSlide) {
            nextBtn.classList.remove('next-highlight');
            nextBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            nextBtnSpan.innerText = 'Dashboard';
            nextBtnIcon.setAttribute('data-lucide', 'home');
        } else {
            nextBtn.className = 'btn-nav-slide next-highlight';
            nextBtn.style.background = '';
            // If next slide is quiz-start
            if (slides[this.currentSlideIdx + 1].visualType === 'quiz-start') {
                nextBtnSpan.innerText = 'Mulai Kuis';
                nextBtnIcon.setAttribute('data-lucide', 'check-circle');
            } else {
                nextBtnSpan.innerText = 'Selanjutnya';
                nextBtnIcon.setAttribute('data-lucide', 'chevron-right');
            }
        }

        // Render Slide Dots Indicators
        const dotsContainer = document.getElementById('slide-dots-container');
        dotsContainer.innerHTML = '';
        slides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = `dot ${idx === this.currentSlideIdx ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                AudioSynth.playClick();
                this.currentSlideIdx = idx;
                this.renderSlide();
            });
            dotsContainer.appendChild(dot);
        });

        // Trigger math expression rendering (LaTeX)
        if (window.MathJax) {
            MathJax.typesetPromise([contentArea]);
        }

        // Listener untuk tombol Download / Buka LKPD PDF TP.1
        const btnPdf = document.getElementById('btn-download-pdf-tp1');
        if (btnPdf) {
            btnPdf.addEventListener('click', () => {
                AudioSynth.playClick();
                this.generateTP1PDF();
            });
        }

        lucide.createIcons();
    },

    navigateSlide(direction) {
        const chData = CHAPTERS_DATA[this.currentChapterId];
        const slides = chData.slides;

        // If next clicked on last slide, exit back to dashboard
        if (direction === 1 && this.currentSlideIdx === slides.length - 1) {
            this.stats.completedChapters[this.currentChapterId] = true;
            this.exitWorkspace();
            return;
        }

        AudioSynth.playClick();
        this.currentSlideIdx += direction;
        
        // Clamp indices
        if (this.currentSlideIdx < 0) this.currentSlideIdx = 0;
        if (this.currentSlideIdx >= slides.length) this.currentSlideIdx = slides.length - 1;

        this.renderSlide();
    },

    // RENDER INTERACTIVE WIDGETS
    renderVisualComponent(type, container) {
        const chData = CHAPTERS_DATA[this.currentChapterId];
        const slide = chData ? chData.slides[this.currentSlideIdx] : null;

        switch (type) {
            case 'img-viewer':
                const imgSrc = slide ? slide.imgSrc : '';
                const imgCaption = slide ? (slide.imgCaption || slide.visualTitle) : '';
                container.innerHTML = `
                    <div class="visual-img-container">
                        <div class="visual-img-wrapper" id="btn-zoom-img">
                            <img src="${imgSrc}" alt="${imgCaption}" class="visual-slide-img" />
                            <div class="visual-img-overlay">
                                <i data-lucide="zoom-in"></i>
                                <span>Klik untuk Memperbesar Gambar</span>
                            </div>
                        </div>
                        <div class="visual-img-caption">
                            <i data-lucide="image" style="color:var(--slide-accent)"></i>
                            <span>${imgCaption}</span>
                        </div>
                    </div>
                `;
                const zoomBtn = container.querySelector('#btn-zoom-img');
                if (zoomBtn) {
                    zoomBtn.addEventListener('click', () => {
                        AudioSynth.playClick();
                        this.openImageModal(imgSrc, imgCaption);
                    });
                }
                break;

            case 'interactive-whiteboard-tp1':
                this.initInteractiveWhiteboardTP1(container);
                break;

            case 'info-default':
                container.innerHTML = `
                    <div class="fallback-placeholder">
                        <i data-lucide="book-open" class="placeholder-icon" style="color: var(--slide-accent)"></i>
                        <p style="font-size: 1.1rem; color: white;">Mari pelajari materi ini dengan teliti</p>
                    </div>
                `;
                break;
            
            case 'info-organelles':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="microscope" style="width: 72px; height: 72px; color: var(--color-bio-sel); animation: bounce 3s infinite;"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Eksplorasi Sel Organisme</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Organel terkecil memiliki struktur fungsional yang menyerupai organ manusia skala mikroskopis.</p>
                    </div>
                `;
                break;

            case 'sim-cell':
                this.initCellSimulator(container);
                break;

            case 'info-digestive':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="activity" style="width: 72px; height: 72px; color: var(--color-bio-tubuh); animation: pulseScale 2s infinite;"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Metabolisme Nutrisi</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Makanan dicerna oleh tubuh secara mekanis dan kimiawi guna menyerap glukosa, asam amino, dan energi.</p>
                    </div>
                `;
                break;

            case 'sim-organ':
                this.initOrganSimulator(container);
                break;

            case 'info-disease':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="shield-alert" style="width: 72px; height: 72px; color: var(--color-bio-tubuh);"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Pencegahan Patologis</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Olahraga teratur, minum air putih minimal 2 liter per hari, dan diet tinggi serat mencegah maag dan gagal ginjal.</p>
                    </div>
                `;
                break;

            case 'info-physics-intro':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="zap" style="width: 72px; height: 72px; color: var(--color-phys-energi); animation: bounce 3s infinite;"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Hukum Newton & Usaha</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Usaha ($W$) terjadi jika gaya ($F$) menghasilkan perpindahan posisi sejauh ($s$).</p>
                    </div>
                `;
                break;

            case 'info-simple-machines':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="settings" style="width: 72px; height: 72px; color: var(--color-phys-energi); animation: spin 15s infinite linear;"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Mekanisme Efisiensi Kerja</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Pesawat sederhana membantu mengalikan gaya kuasa manusia sehingga mempermudah pekerjaan berat.</p>
                    </div>
                `;
                break;

            case 'sim-lever':
                this.initLeverSimulator(container);
                break;

            case 'info-vibration':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="clock" style="width: 72px; height: 72px; color: var(--color-phys-gelombang); animation: bounce 2s infinite;"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Frekuensi & Waktu Getar</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Satu getaran penuh didefinisikan sebagai gerak bandul dari titik awal kembali ke titik awal (A-B-C-B-A).</p>
                    </div>
                `;
                break;

            case 'sim-wave':
                this.initWaveSimulator(container);
                break;

            case 'info-light':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="sun" style="width: 72px; height: 72px; color: var(--color-phys-gelombang); animation: pulseScale 4s infinite;"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Sifat Refraksi Cahaya</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Pembiasan cahaya terjadi akibat perbedaan indeks bias kecepatan cahaya saat melewati medium yang berbeda.</p>
                    </div>
                `;
                break;

            case 'info-chemistry-intro':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="atom" class="icon-spin" style="width: 72px; height: 72px; color: var(--color-chem-materi);"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Sistem Periodik Unsur</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Unsur diidentifikasikan oleh jumlah proton intinya, disusun rapi dalam Tabel Periodik Unsur.</p>
                    </div>
                `;
                break;

            case 'sim-chemistry':
                this.initChemistrySimulator(container);
                break;

            case 'info-mixtures':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="flame" style="width: 72px; height: 72px; color: var(--color-chem-materi); animation: bounce 3s infinite;"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Pemisahan Campuran Fisika</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Metode filtrasi (penyaringan), distilasi (penyulingan), dan evaporasi didasarkan pada sifat fisik zat penyusun campuran.</p>
                    </div>
                `;
                break;

            case 'sim-earth':
                this.initEarthSimulator(container);
                break;

            case 'info-tectonics':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="mountain" style="width: 72px; height: 72px; color: var(--color-earth-bumi); animation: pulseScale 3s infinite;"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Konveksi Mantel & Orogenesis</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Suhu ekstrem di mantel bumi menimbulkan arus konveksi magma cair yang menggeser lempeng kerak bumi di atasnya.</p>
                    </div>
                `;
                break;

            case 'info-earthquake':
                container.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; text-align:center; padding: 2rem;">
                        <i data-lucide="shield-alert" style="width: 72px; height: 72px; color: var(--color-earth-bumi);"></i>
                        <h4 style="font-size: 1.1rem; font-family: var(--font-display);">Mitigasi Aman Gempa</h4>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); max-width: 320px;">Mengingat kondisi geologis Indonesia, edukasi mitigasi kebencanaan sejak dini sangat penting untuk menyelamatkan jiwa.</p>
                    </div>
                `;
                break;

            case 'quiz-start':
                this.initQuizPanel(container);
                break;

            default:
                container.innerHTML = `
                    <div class="fallback-placeholder">
                        <i data-lucide="orbit" class="placeholder-icon icon-spin"></i>
                        <p>Simulasi Interaktif</p>
                    </div>
                `;
        }
        lucide.createIcons();
    },

    /* SIMULATOR 1: CELL STRUCTURE */
    initCellSimulator(container) {
        container.innerHTML = `
            <div class="cell-simulator">
                <div class="cell-toggle-btn">
                    <button class="btn-toggle-sub active" id="btn-cell-plant">🌿 Sel Tumbuhan (3D)</button>
                    <button class="btn-toggle-sub" id="btn-cell-animal">🐾 Sel Hewan</button>
                </div>
                <div class="cell-display-area" id="cell-svg-container">
                    <!-- Content loaded dynamically -->
                </div>
                <div class="organelle-desc-box" id="cell-desc-box">
                    <h5>Arahkan kursor ke organel sel</h5>
                    <p>Klik atau sorot bagian berwarna pada gambar sel untuk melihat fungsi organel tersebut.</p>
                </div>
            </div>
        `;

        const renderCellSvg = (type) => {
            const isPlant = type === 'plant';
            const containerSvg = document.getElementById('cell-svg-container');
            const descBox = document.getElementById('cell-desc-box');

            if (isPlant) {
                // Show Sketchfab 3D Plant Cell embed
                descBox.style.display = 'none';
                containerSvg.style.height = '340px';
                containerSvg.innerHTML = `
                    <div style="width:100%;height:100%;border-radius:var(--radius-md);overflow:hidden;background:#0a0d16;">
                        <iframe
                            title="Sel Tumbuhan"
                            frameborder="0"
                            allowfullscreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            xr-spatial-tracking
                            execution-while-out-of-viewport
                            execution-while-not-rendered
                            web-share
                            src="https://sketchfab.com/models/8694bdda0afc4886b005da10fefae8ad/embed?autospin=1&autostart=1&ui_theme=dark"
                            style="width:100%;height:100%;border:none;border-radius:var(--radius-md);"
                        ></iframe>
                    </div>
                    <p style="font-size:11px;color:var(--text-muted);text-align:center;margin-top:4px;">
                        Model 3D <a href="https://sketchfab.com/3d-models/sel-tumbuhan-8694bdda0afc4886b005da10fefae8ad" target="_blank" rel="nofollow" style="color:#1CAAD9;font-weight:600;">Sel Tumbuhan</a> oleh Astari28 di Sketchfab — Putar & Zoom bebas!
                    </p>
                `;
            } else {
                // Show Sketchfab 3D Animal Cell embed
                descBox.style.display = 'none';
                containerSvg.style.height = '340px';
                containerSvg.innerHTML = `
                    <div style="width:100%;height:100%;border-radius:var(--radius-md);overflow:hidden;background:#0a0d16;">
                        <iframe
                            title="Sel Hewan"
                            frameborder="0"
                            allowfullscreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                            xr-spatial-tracking
                            execution-while-out-of-viewport
                            execution-while-not-rendered
                            web-share
                            src="https://sketchfab.com/models/a1084f376880435d8dbd314ff4ec1caa/embed?autospin=1&autostart=1&ui_theme=dark"
                            style="width:100%;height:100%;border:none;border-radius:var(--radius-md);"
                        ></iframe>
                    </div>
                    <p style="font-size:11px;color:var(--text-muted);text-align:center;margin-top:4px;">
                        Model 3D <a href="https://sketchfab.com/3d-models/sel-hewan-a1084f376880435d8dbd314ff4ec1caa" target="_blank" rel="nofollow" style="color:#1CAAD9;font-weight:600;">Sel Hewan</a> oleh YohanAurinoBrianPatria di Sketchfab — Putar &amp; Zoom bebas!
                    </p>
                `;
            }
        };

        // Default: show 3D plant cell on load
        renderCellSvg('plant');

        const btnPlant = document.getElementById('btn-cell-plant');
        const btnAnimal = document.getElementById('btn-cell-animal');

        btnPlant.addEventListener('click', () => {
            AudioSynth.playClick();
            btnPlant.classList.add('active');
            btnAnimal.classList.remove('active');
            renderCellSvg('plant');
        });

        btnAnimal.addEventListener('click', () => {
            AudioSynth.playClick();
            btnAnimal.classList.add('active');
            btnPlant.classList.remove('active');
            renderCellSvg('animal');
        });
    },

    /* SIMULATOR 2: HUMAN ORGANS */
    initOrganSimulator(container) {
        container.innerHTML = `
            <div class="organ-simulator">
                <div class="organ-interactive-view">
                    <!-- Silhouette SVG of human torso -->
                    <svg viewBox="0 0 100 120" style="height:90%; max-height:260px;" class="body-silhouette">
                        <path d="M 50,10 C 53,10 56,12 55,18 C 54,23 58,26 62,28 C 66,32 68,38 68,44 L 68,75 C 68,85 64,115 50,115 C 36,115 32,85 32,75 L 32,44 C 32,38 34,32 38,28 C 42,26 46,23 45,18 C 44,12 47,10 50,10 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
                    </svg>

                    <!-- Organ Hotspot Markers -->
                    <!-- 1. Mouth/Saliva -->
                    <div class="organ-marker" style="top: 15%; left: 50%;" data-name="Mulut (Sistem Pencernaan)" data-desc="Pencernaan mekanis dengan gigi dan kimiawi dengan enzim amilase (ptialin) untuk merubah zat pati menjadi gula."></div>
                    <!-- 2. Lungs -->
                    <div class="organ-marker" style="top: 36%; left: 42%;" data-name="Paru-Paru (Sistem Pernapasan)" data-desc="Tempat pertukaran gas pernapasan. Di dalam alveolus, oksigen diikat oleh hemoglobin darah dan karbon dioksida dilepaskan ke udara hembusan."></div>
                    <!-- 3. Heart -->
                    <div class="organ-marker" style="top: 38%; left: 52%;" data-name="Jantung (Sistem Peredaran Darah)" data-desc="Pompa otot yang memompa darah beroksigen dari paru-paru ke seluruh sel tubuh (sirkulasi sistemik) dan mengirim darah kotor kembali ke paru-paru (sirkulasi pulmonal)."></div>
                    <!-- 4. Stomach -->
                    <div class="organ-marker" style="top: 55%; left: 45%;" data-name="Lambung (Sistem Pencernaan)" data-desc="Mengaduk makanan dan merendamnya dalam Asam Lambung (HCl) untuk membunuh kuman. Enzim pepsin memecah protein menjadi pepton."></div>
                    <!-- 5. Kidneys -->
                    <div class="organ-marker" style="top: 70%; left: 55%;" data-name="Ginjal (Sistem Ekskresi)" data-desc="Dua organ berbentuk kacang merah penyaring limbah urea dan racun dari darah. Menghasilkan urin yang dikirim ke kandung kemih."></div>
                </div>
                <div class="organelle-desc-box" id="organ-desc-box" style="position:relative; width:100%; border-radius:var(--radius-sm);">
                    <h5>Sentuh penanda organ merah berkedip</h5>
                    <p>Sorot penanda lingkaran di atas torso tubuh untuk melihat penamaan organ dan kontribusinya pada sistem biologis manusia.</p>
                </div>
            </div>
        `;

        container.querySelectorAll('.organ-marker').forEach(marker => {
            const showOrganInfo = () => {
                const name = marker.getAttribute('data-name');
                const desc = marker.getAttribute('data-desc');
                document.getElementById('organ-desc-box').innerHTML = `
                    <h5 style="color: var(--color-bio-tubuh); font-family: var(--font-display);">${name}</h5>
                    <p>${desc}</p>
                `;
            };
            
            marker.addEventListener('mouseover', showOrganInfo);
            marker.addEventListener('touchstart', (e) => {
                e.preventDefault();
                AudioSynth.playClick();
                showOrganInfo();
            });
        });
    },

    /* SIMULATOR 3: LEVER PHYSICS */
    initLeverSimulator(container) {
        container.innerHTML = `
            <div class="lever-simulator">
                <div class="simulation-canvas-area">
                    <svg viewBox="0 0 200 100" class="physics-graphic" id="lever-svg">
                        <!-- Fulcrum (Titik Tumpu) -->
                        <polygon points="100,75 92,90 108,90" fill="#f59e0b" stroke="#d97706" stroke-width="1.5" />
                        <!-- Lever Plank (Papan Jungkat-jungkit) -->
                        <line x1="40" y1="75" x2="160" y2="75" stroke="#374151" stroke-width="6" stroke-linecap="round" id="lever-plank" />
                        
                        <!-- Load Weight Box (Beban) -->
                        <rect x="50" y="55" width="20" height="20" fill="#3b82f6" stroke="#2563eb" stroke-width="1" id="lever-load-box" />
                        <text x="60" y="68" fill="white" font-size="9" font-weight="700" text-anchor="middle" id="lever-load-txt">Beban</text>
                        
                        <!-- Force Arrow (Gaya Kuasa) -->
                        <g id="lever-force-arrow">
                            <line x1="140" y1="35" x2="140" y2="70" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)" />
                            <text x="140" y="30" fill="#ef4444" font-size="9" font-weight="700" text-anchor="middle">Gaya (F)</text>
                        </g>

                        <!-- SVG Marker for Arrow -->
                        <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
                            </marker>
                        </defs>
                    </svg>
                </div>
                <div class="sim-controls-panel">
                    <div class="control-group">
                        <label>Beban ($W$): <span id="val-load" class="control-val">100 N</span></label>
                        <input type="range" id="input-load" min="50" max="250" value="100" />
                    </div>
                    <div class="control-group">
                        <label>Lengan Beban ($L_b$): <span id="val-lb" class="control-val">50 cm</span></label>
                        <input type="range" id="input-lb" min="20" max="90" value="50" />
                    </div>
                    <div class="control-group">
                        <label>Lengan Kuasa ($L_k$): <span id="val-lk" class="control-val">50 cm</span></label>
                        <input type="range" id="input-lk" min="20" max="90" value="50" />
                    </div>
                </div>
                <div class="organelle-desc-box" style="position:relative; width:100%; border-radius:var(--radius-sm);" id="lever-math-box">
                    <h5>Gaya Diperlukan: F = 100.0 Newton</h5>
                    <p>Keuntungan Mekanis (KM) = 1.00. (Usaha lebih mudah jika Lengan Kuasa lebih panjang daripada Lengan Beban).</p>
                </div>
            </div>
        `;

        const loadInput = document.getElementById('input-load');
        const lbInput = document.getElementById('input-lb');
        const lkInput = document.getElementById('input-lk');

        const updateLeverSim = () => {
            const W = parseFloat(loadInput.value);
            const Lb = parseFloat(lbInput.value);
            const Lk = parseFloat(lkInput.value);

            // Update label readouts
            document.getElementById('val-load').innerText = `${W} N`;
            document.getElementById('val-lb').innerText = `${Lb} cm`;
            document.getElementById('val-lk').innerText = `${Lk} cm`;

            // Calculate Required Force: F = W * Lb / Lk
            const F = (W * Lb) / Lk;
            const KM = Lk / Lb;

            // Render equations text
            document.getElementById('lever-math-box').innerHTML = `
                <h5 style="color: var(--color-phys-energi); font-family: var(--font-display);">Gaya Diperlukan: F = ${F.toFixed(1)} Newton</h5>
                <p>Keuntungan Mekanis (KM) = <strong>${KM.toFixed(2)}</strong>. (W * Lb = F * Lk → ${W} N * ${Lb} cm = ${F.toFixed(0)} N * ${Lk} cm).</p>
            `;

            if (window.MathJax) {
                MathJax.typesetPromise([document.getElementById('lever-math-box')]);
            }

            // Animate SVG elements based on values
            const fulcrumX = 100;
            const pxPerCm = 0.6; // Scale cm lengths to SVG coordinate space
            
            const plankLeft = fulcrumX - (Lb * pxPerCm);
            const plankRight = fulcrumX + (Lk * pxPerCm);

            const plank = document.getElementById('lever-plank');
            plank.setAttribute('x1', plankLeft);
            plank.setAttribute('x2', plankRight);

            const loadBox = document.getElementById('lever-load-box');
            const boxWidth = 14 + (W / 30); // box grows slightly with weight
            loadBox.setAttribute('x', plankLeft + 2);
            loadBox.setAttribute('y', 75 - boxWidth);
            loadBox.setAttribute('width', boxWidth);
            loadBox.setAttribute('height', boxWidth);

            const loadTxt = document.getElementById('lever-load-txt');
            loadTxt.setAttribute('x', plankLeft + 2 + (boxWidth/2));
            loadTxt.setAttribute('y', 75 - (boxWidth/2) + 3);

            const forceArrow = document.getElementById('lever-force-arrow');
            // Move force arrow to right edge of plank
            const arrowLine = forceArrow.querySelector('line');
            arrowLine.setAttribute('x1', plankRight - 2);
            arrowLine.setAttribute('x2', plankRight - 2);
            // Height of arrow matches required force scaled
            const arrowH = Math.min(20 + (F / 5), 55);
            arrowLine.setAttribute('y1', 75 - arrowH);
            arrowLine.setAttribute('y2', 71); // stop just above plank

            const forceTxt = forceArrow.querySelector('text');
            forceTxt.setAttribute('x', plankRight - 2);
            forceTxt.setAttribute('y', 75 - arrowH - 5);
        };

        // Bind sliders
        loadInput.addEventListener('input', updateLeverSim);
        lbInput.addEventListener('input', updateLeverSim);
        lkInput.addEventListener('input', updateLeverSim);

        updateLeverSim();
    },

    /* SIMULATOR 4: WAVE GENERATOR */
    initWaveSimulator(container) {
        container.innerHTML = `
            <div class="wave-simulator">
                <canvas class="wave-display-canvas" id="wave-canvas"></canvas>
                <div class="sim-controls-panel">
                    <div class="control-group">
                        <label>Amplitudo: <span id="val-wave-amp" class="control-val">40</span></label>
                        <input type="range" id="input-wave-amp" min="10" max="70" value="40" />
                    </div>
                    <div class="control-group">
                        <label>Frekuensi: <span id="val-wave-freq" class="control-val">0.02</span></label>
                        <input type="range" id="input-wave-freq" min="5" max="50" value="20" step="1" />
                    </div>
                </div>
            </div>
        `;

        const canvas = document.getElementById('wave-canvas');
        const canvasCtx = canvas.getContext('2d');
        
        // Resize canvas to parent viewport size
        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.clientWidth - 30; // padding offset
            canvas.height = 180;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const ampInput = document.getElementById('input-wave-amp');
        const freqInput = document.getElementById('input-wave-freq');

        ampInput.addEventListener('input', () => {
            this.waveState.amplitude = parseFloat(ampInput.value);
            document.getElementById('val-wave-amp').innerText = this.waveState.amplitude;
        });

        freqInput.addEventListener('input', () => {
            const raw = parseFloat(freqInput.value);
            this.waveState.frequency = raw / 1000;
            document.getElementById('val-wave-freq').innerText = this.waveState.frequency.toFixed(3);
        });

        // Wave animation rendering loop
        const drawWave = () => {
            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw axis line
            canvasCtx.beginPath();
            canvasCtx.moveTo(0, canvas.height / 2);
            canvasCtx.lineTo(canvas.width, canvas.height / 2);
            canvasCtx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            canvasCtx.lineWidth = 1;
            canvasCtx.stroke();

            // Draw Sine Wave
            canvasCtx.beginPath();
            canvasCtx.strokeStyle = 'var(--color-phys-gelombang)';
            canvasCtx.lineWidth = 3;
            canvasCtx.shadowColor = 'var(--color-phys-gelombang)';
            canvasCtx.shadowBlur = 10;

            const midY = canvas.height / 2;
            const amp = this.waveState.amplitude;
            const freq = this.waveState.frequency;
            
            for (let x = 0; x < canvas.width; x++) {
                // Sine wave equation: y = A * sin(k*x - omega*t)
                const y = midY + Math.sin(x * freq + this.waveState.phase) * amp;
                if (x === 0) {
                    canvasCtx.moveTo(x, y);
                } else {
                    canvasCtx.lineTo(x, y);
                }
            }
            canvasCtx.stroke();
            canvasCtx.shadowBlur = 0; // reset glow shadow

            // Animate phase offset to make it scroll
            this.waveState.phase -= 0.05;

            this.waveState.animId = requestAnimationFrame(drawWave);
        };

        drawWave();
    },

    /* SIMULATOR 5: CHEMISTRY MOLECULE BUILDER */
    initChemistrySimulator(container) {
        container.innerHTML = `
            <div class="chemistry-simulator">
                <div class="chemical-cards-grid">
                    <div class="chem-card active" data-mol="h2o">
                        <h5>Air ($H_2O$)</h5>
                        <p>Senyawa Hidrogen & Oksigen</p>
                    </div>
                    <div class="chem-card" data-mol="co2">
                        <h5>Karbondioksida ($CO_2$)</h5>
                        <p>Senyawa Karbon & Oksigen</p>
                    </div>
                    <div class="chem-card" data-mol="ch4">
                        <h5>Metana ($CH_4$)</h5>
                        <p>Senyawa Karbon & Hidrogen</p>
                    </div>
                    <div class="chem-card" data-mol="o2">
                        <h5>Oksigen ($O_2$)</h5>
                        <p>Molekul Unsur</p>
                    </div>
                </div>
                <div class="molecule-visualization" id="molecule-canvas-box">
                    <!-- Molecule graphic gets generated here -->
                </div>
            </div>
        `;

        if (window.MathJax) {
            MathJax.typesetPromise([container]);
        }

        const renderMolecule = (type) => {
            const box = document.getElementById('molecule-canvas-box');
            let svgHtml = '';

            if (type === 'h2o') {
                svgHtml = `
                    <svg viewBox="0 0 100 80" style="width: 75%; height: 75%; max-height: 180px;">
                        <!-- Bonds -->
                        <line x1="50" y1="40" x2="28" y2="55" stroke="rgba(255,255,255,0.4)" stroke-width="3" />
                        <line x1="50" y1="40" x2="72" y2="55" stroke="rgba(255,255,255,0.4)" stroke-width="3" />
                        <!-- Oxygen (O) Center -->
                        <circle cx="50" cy="40" r="14" fill="#ef4444" stroke="#dc2626" stroke-width="1.5" />
                        <text x="50" y="44" fill="white" font-size="12" font-weight="700" text-anchor="middle">O</text>
                        <!-- Hydrogens (H) -->
                        <circle cx="28" cy="55" r="9" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5" />
                        <text x="28" y="58" fill="#1e293b" font-size="8" font-weight="700" text-anchor="middle">H</text>
                        <circle cx="72" cy="55" r="9" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5" />
                        <text x="72" y="75" fill="var(--text-muted)" font-size="7" text-anchor="middle"></text>
                        <text x="72" y="58" fill="#1e293b" font-size="8" font-weight="700" text-anchor="middle">H</text>
                    </svg>
                `;
            } else if (type === 'co2') {
                svgHtml = `
                    <svg viewBox="0 0 100 80" style="width: 80%; height: 80%; max-height: 180px;">
                        <!-- Double Bonds -->
                        <!-- Left -->
                        <line x1="50" y1="38" x2="20" y2="38" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
                        <line x1="50" y1="42" x2="20" y2="42" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
                        <!-- Right -->
                        <line x1="50" y1="38" x2="80" y2="38" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
                        <line x1="50" y1="42" x2="80" y2="42" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
                        <!-- Carbon (C) Center -->
                        <circle cx="50" cy="40" r="14" fill="#374151" stroke="#1f2937" stroke-width="1.5" />
                        <text x="50" y="44" fill="white" font-size="12" font-weight="700" text-anchor="middle">C</text>
                        <!-- Oxygens (O) -->
                        <circle cx="20" cy="40" r="11" fill="#ef4444" stroke="#dc2626" stroke-width="1.5" />
                        <text x="20" y="44" fill="white" font-size="10" font-weight="700" text-anchor="middle">O</text>
                        <circle cx="80" cy="40" r="11" fill="#ef4444" stroke="#dc2626" stroke-width="1.5" />
                        <text x="80" y="44" fill="white" font-size="10" font-weight="700" text-anchor="middle">O</text>
                    </svg>
                `;
            } else if (type === 'ch4') {
                svgHtml = `
                    <svg viewBox="0 0 100 80" style="width: 80%; height: 80%; max-height: 180px;">
                        <!-- Bonds -->
                        <line x1="50" y1="40" x2="50" y2="18" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" />
                        <line x1="50" y1="40" x2="50" y2="62" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" />
                        <line x1="50" y1="40" x2="22" y2="40" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" />
                        <line x1="50" y1="40" x2="78" y2="40" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" />
                        <!-- Carbon (C) Center -->
                        <circle cx="50" cy="40" r="13" fill="#374151" stroke="#1f2937" stroke-width="1.5" />
                        <text x="50" y="44" fill="white" font-size="11" font-weight="700" text-anchor="middle">C</text>
                        <!-- Hydrogens -->
                        <circle cx="50" cy="18" r="8" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5" />
                        <text x="50" y="21" fill="#1e293b" font-size="8" font-weight="700" text-anchor="middle">H</text>
                        <circle cx="50" cy="62" r="8" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5" />
                        <text x="50" y="65" fill="#1e293b" font-size="8" font-weight="700" text-anchor="middle">H</text>
                        <circle cx="22" cy="40" r="8" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5" />
                        <text x="22" y="43" fill="#1e293b" font-size="8" font-weight="700" text-anchor="middle">H</text>
                        <circle cx="78" cy="40" r="8" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5" />
                        <text x="78" y="43" fill="#1e293b" font-size="8" font-weight="700" text-anchor="middle">H</text>
                    </svg>
                `;
            } else if (type === 'o2') {
                svgHtml = `
                    <svg viewBox="0 0 100 80" style="width: 80%; height: 80%; max-height: 180px;">
                        <!-- Double Bond between O=O -->
                        <line x1="35" y1="37" x2="65" y2="37" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
                        <line x1="35" y1="43" x2="65" y2="43" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
                        <!-- Oxygen 1 -->
                        <circle cx="35" cy="40" r="13" fill="#ef4444" stroke="#dc2626" stroke-width="1.5" />
                        <text x="35" y="44" fill="white" font-size="11" font-weight="700" text-anchor="middle">O</text>
                        <!-- Oxygen 2 -->
                        <circle cx="65" cy="40" r="13" fill="#ef4444" stroke="#dc2626" stroke-width="1.5" />
                        <text x="65" y="44" fill="white" font-size="11" font-weight="700" text-anchor="middle">O</text>
                    </svg>
                `;
            }

            box.innerHTML = svgHtml;
        };

        renderMolecule('h2o');

        container.querySelectorAll('.chem-card').forEach(card => {
            card.addEventListener('click', () => {
                AudioSynth.playClick();
                container.querySelectorAll('.chem-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                
                const type = card.getAttribute('data-mol');
                renderMolecule(type);
            });
        });
    },

    /* SIMULATOR 6: EARTH STRUCTURE LAYERS */
    initEarthSimulator(container) {
        container.innerHTML = `
            <div class="earth-simulator">
                <div class="earth-layers-visual">
                    <!-- Layer 1: Crust -->
                    <div class="earth-layer layer-crust" data-name="Kerak Bumi (Crust)" data-depth="5 - 70 km" data-temp="Up to 900°C" data-comp="Silikat, Granit, Basalt" data-info="Lapisan paling tipis di mana benua dan samudra berada. Merupakan batu padat dingin tempat seluruh kehidupan berlindung.">
                        <!-- Layer 2: Mantle -->
                        <div class="earth-layer layer-mantle" data-name="Mantel Bumi (Mantle)" data-depth="~2.900 km" data-temp="1000°C - 3700°C" data-comp="Peridotit, Silikon, Magnesium" data-info="Lapisan tebal batuan silikat semi-cair kental panas. Arus konveksi magma terjadi di sini, menggerakkan lempeng tektonik.">
                            <!-- Layer 3: Outer Core -->
                            <div class="earth-layer layer-outer-core" data-name="Inti Luar Bumi (Outer Core)" data-depth="2.900 - 5.150 km" data-temp="4000°C - 5000°C" data-comp="Besi Cair, Nikel Cair" data-info="Logam cair yang berputar lambat. Gerakan aliran besi cair di sini bertanggung jawab membangkitkan medan magnet bumi.">
                                <!-- Layer 4: Inner Core -->
                                <div class="earth-layer layer-inner-core" data-name="Inti Dalam Bumi (Inner Core)" data-depth="5.150 - 6.370 km" data-temp="~5400°C" data-comp="Besi Padat, Nikel Padat" data-info="Bola logam pekat padat bersuhu setara permukaan matahari. Tetap padat karena tekanan gravitasi bumi yang luar biasa."></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="organelle-desc-box" id="earth-desc-box" style="position:relative; width:100%; border-radius:var(--radius-sm);">
                    <h5>Klik lapisan Bumi untuk menganalisis</h5>
                    <p>Pilih salah satu lingkaran warna mewakili kerak, mantel, inti luar, atau inti dalam untuk meneliti data geologinya.</p>
                </div>
            </div>
        `;

        container.querySelectorAll('.earth-layer').forEach(layer => {
            const showLayerInfo = (e) => {
                e.stopPropagation(); // prevent nested click bubbling
                
                const name = layer.getAttribute('data-name');
                const depth = layer.getAttribute('data-depth');
                const temp = layer.getAttribute('data-temp');
                const comp = layer.getAttribute('data-comp');
                const info = layer.getAttribute('data-info');

                document.getElementById('earth-desc-box').innerHTML = `
                    <h5 style="color: var(--color-earth-bumi); font-family: var(--font-display);">${name}</h5>
                    <p style="font-size:0.8rem; color:#f59e0b; margin-bottom:0.35rem;">
                        <strong>Ketebalan:</strong> ${depth} | <strong>Suhu:</strong> ${temp} | <strong>Komposisi:</strong> ${comp}
                    </p>
                    <p>${info}</p>
                `;
            };

            layer.addEventListener('click', (e) => {
                AudioSynth.playClick();
                showLayerInfo(e);
            });

            layer.addEventListener('touchstart', (e) => {
                e.preventDefault();
                AudioSynth.playClick();
                showLayerInfo(e);
            });
        });
    },

    /* 5. QUIZ INTERACTION PANEL */
    initQuizPanel(container) {
        const chData = CHAPTERS_DATA[this.currentChapterId];
        const quiz = chData.quiz;
        let score = 0;
        let currentQIdx = 0;

        const renderQuestion = () => {
            const q = quiz[currentQIdx];
            container.innerHTML = `
                <div class="quiz-container">
                    <div class="quiz-question-header">
                        <span class="quiz-badge">Pertanyaan ${currentQIdx + 1} dari ${quiz.length}</span>
                        <span class="quiz-score-live">Skor Live: ${score}</span>
                    </div>
                    <div class="quiz-question-text">${q.question}</div>
                    <div class="quiz-options-list" id="quiz-options-box">
                        ${q.options.map((opt, idx) => `
                            <button class="quiz-option-btn" data-idx="${idx}">
                                <i data-lucide="circle" style="width: 16px; height: 16px;"></i>
                                <span>${opt}</span>
                            </button>
                        `).join('')}
                    </div>
                    <div class="quiz-feedback-box hidden" id="quiz-feedback-box">
                        <!-- feedback text -->
                    </div>
                </div>
            `;
            lucide.createIcons();

            // Bind Options
            const buttons = container.querySelectorAll('.quiz-option-btn');
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const chosenIdx = parseInt(btn.getAttribute('data-idx'));
                    handleAnswer(chosenIdx, btn, buttons);
                });
            });
        };

        const handleAnswer = (chosenIdx, clickedBtn, allButtons) => {
            const q = quiz[currentQIdx];
            const isCorrect = chosenIdx === q.answer;
            
            // Disable all buttons to freeze choice
            allButtons.forEach(btn => btn.disabled = true);

            // Show feedback
            const feedbackBox = document.getElementById('quiz-feedback-box');
            feedbackBox.classList.remove('hidden');

            if (isCorrect) {
                AudioSynth.playCorrect();
                score += 10;
                clickedBtn.classList.add('correct');
                clickedBtn.querySelector('i').setAttribute('data-lucide', 'check-circle-2');
                
                feedbackBox.className = "quiz-feedback-box correct-bg";
                feedbackBox.innerHTML = `
                    <h5 style="font-weight: 700; margin-bottom: 0.25rem;">Benar sekali! 🎉</h5>
                    <p>${q.explanation}</p>
                `;
            } else {
                AudioSynth.playWrong();
                clickedBtn.classList.add('wrong');
                clickedBtn.querySelector('i').setAttribute('data-lucide', 'x-circle');
                
                // Highlight the correct one in green
                allButtons[q.answer].classList.add('correct');
                allButtons[q.answer].querySelector('i').setAttribute('data-lucide', 'check-circle-2');

                feedbackBox.className = "quiz-feedback-box wrong-bg";
                feedbackBox.innerHTML = `
                    <h5 style="font-weight: 700; margin-bottom: 0.25rem;">Kurang Tepat! 😅</h5>
                    <p>${q.explanation}</p>
                `;
            }
            lucide.createIcons();

            // Add button to go to next question or complete
            const nextQBtn = document.createElement('button');
            nextQBtn.className = 'btn-primary ripple';
            nextQBtn.style.marginTop = '1rem';
            nextQBtn.style.alignSelf = 'flex-end';
            
            const isLastQuestion = currentQIdx === quiz.length - 1;
            nextQBtn.innerHTML = `
                <span>${isLastQuestion ? 'Lihat Hasil' : 'Pertanyaan Berikutnya'}</span>
                <i data-lucide="${isLastQuestion ? 'award' : 'arrow-right'}"></i>
            `;
            
            feedbackBox.appendChild(nextQBtn);
            lucide.createIcons();

            nextQBtn.addEventListener('click', () => {
                AudioSynth.playClick();
                if (isLastQuestion) {
                    showCompleteScreen();
                } else {
                    currentQIdx++;
                    renderQuestion();
                }
            });
        };

        const showCompleteScreen = () => {
            const maxScore = quiz.length * 10;
            const percentage = (score / maxScore) * 100;
            const perfectScore = score === maxScore;
            
            // Save scores to stats
            App.stats.quizScores[App.currentChapterId] = score;

            // Badge rewards logic
            const badgeAdded = perfectScore && !App.stats.unlockedBadges.includes(chData.badgeName);
            if (badgeAdded) {
                App.stats.unlockedBadges.push(chData.badgeName);
                AudioSynth.playTriumph();
            }

            container.innerHTML = `
                <div class="quiz-complete-card">
                    <i data-lucide="trophy" class="quiz-complete-icon"></i>
                    <h3 style="font-family:var(--font-display); font-size:1.6rem; font-weight:700;">Kuis Selesai!</h3>
                    <p style="color:var(--text-secondary); max-width: 300px;">Kamu berhasil menyelesaikan evaluasi bab dengan baik.</p>
                    
                    <div style="font-size:2.2rem; font-family:var(--font-display); font-weight:800; color:var(--slide-accent);">
                        ${score} / ${maxScore} <span style="font-size:1rem; color:var(--text-muted); font-weight:300;">Poin</span>
                    </div>

                    ${badgeAdded ? `
                        <div class="quiz-badge-award">
                            <span class="quiz-badge-icon">${chData.badgeIcon}</span>
                            <span class="quiz-badge-name">${chData.badgeName}</span>
                            <span style="font-size:0.7rem; color:var(--text-secondary);">Unlocked! Sempurna.</span>
                        </div>
                    ` : perfectScore ? `
                        <div style="font-size:0.8rem; color:#10b981; font-weight:600;">Lencana ${chData.badgeIcon} sudah dikoleksi sebelumnya.</div>
                    ` : `
                        <p style="font-size:0.8rem; color:var(--text-muted);">Jawab benar semua pertanyaan untuk mendapatkan Badge Lencana Kehormatan Bab!</p>
                    `}

                    <div class="quiz-actions" style="margin-top:1rem;">
                        <button class="btn-nav" id="btn-quiz-retry"><i data-lucide="rotate-ccw"></i> Coba Kuis Lagi</button>
                    </div>
                </div>
            `;
            lucide.createIcons();

            document.getElementById('btn-quiz-retry').addEventListener('click', () => {
                AudioSynth.playClick();
                score = 0;
                currentQIdx = 0;
                renderQuestion();
            });
        };

        renderQuestion();
    },

    // Stat tracking calculations
    updateDashboardStats() {
        const keys = Object.keys(CHAPTERS_DATA);
        
        // Progress percentage calculation
        const completedCount = Object.keys(this.stats.completedChapters).filter(k => this.stats.completedChapters[k]).length;
        const progressPercent = Math.round((completedCount / keys.length) * 100);
        document.getElementById('stat-progress').innerText = `${progressPercent}%`;

        // Total score calculation
        let totalScore = 0;
        Object.keys(this.stats.quizScores).forEach(k => {
            totalScore += this.stats.quizScores[k];
        });
        document.getElementById('stat-score').innerText = totalScore;

        // Badge count update
        const badgeCount = this.stats.unlockedBadges.length;
        document.getElementById('stat-badges').innerText = `${badgeCount}/6`;
    },

    /* PAPAN TULIS INTERAKTIF LKPD TP.1 (2 KELOMPOK) */
    initInteractiveWhiteboardTP1(container) {
        if (!this.whiteboardState) {
            this.whiteboardState = {
                group1: {}, // qId: true (locked)
                group2: {}
            };
        }
        if (!this.whiteboardInputs) {
            this.whiteboardInputs = {
                group1: {}, // qId: saved input value
                group2: {}
            };
        }
        if (!this.whiteboardActiveQ) {
            this.whiteboardActiveQ = {
                group1: 1,
                group2: 1
            };
        }
        if (!this.whiteboardExpanded) {
            this.whiteboardExpanded = { group1: {}, group2: {} };
            for (let i = 1; i <= TP1_QUESTIONS.length; i++) {
                this.whiteboardExpanded.group1[i] = true;
                this.whiteboardExpanded.group2[i] = true;
            }
        }

        const wbState = this.whiteboardState;
        const wbInputs = this.whiteboardInputs;
        const wbExpanded = this.whiteboardExpanded;

        container.innerHTML = `
            <div class="wb-wrapper">
                <div class="wb-header-bar">
                    <div class="wb-group-badge g1">
                        <div class="wb-group-title"><i data-lucide="users"></i> Kelompok 1</div>
                        <div class="wb-bar-track"><div class="wb-bar-fill" id="wb-bar-g1" style="width:0%"></div></div>
                        <span class="wb-count-text" id="wb-txt-g1">0/25 Terkunci</span>
                    </div>

                    <div class="wb-center-title">
                        <i data-lucide="sparkles" class="icon-spin"></i>
                        <span>Papan Tulis Interaktif TP.1</span>
                        <button id="btn-show-guide-modal" class="btn-guide-toggle ripple" title="Buka Panduan Pengerjaan LKPD">
                            <i data-lucide="help-circle"></i>
                            <span>Panduan Pengerjaan</span>
                        </button>
                        <button id="btn-wb-fullscreen" class="btn-fs-wb ripple" title="Toggle Layar Penuh Papan Tulis">
                            <i data-lucide="maximize" id="wb-fs-icon"></i>
                            <span>Layar Penuh</span>
                        </button>
                        <button id="btn-open-pdf-top" class="btn-pdf-toggle ripple" title="Buka / Cetak Dokumen LKPD PDF">
                            <i data-lucide="file-text"></i>
                            <span>Cetak LKPD PDF</span>
                        </button>
                        <button id="btn-show-key-modal" class="btn-key-toggle ripple" title="Lihat Kunci Jawaban Guru">
                            <i data-lucide="key"></i>
                            <span>Kunci Jawaban</span>
                        </button>
                    </div>

                    <div class="wb-group-badge g2">
                        <div class="wb-group-title"><i data-lucide="users"></i> Kelompok 2</div>
                        <div class="wb-bar-track"><div class="wb-bar-fill" id="wb-bar-g2" style="width:0%"></div></div>
                        <span class="wb-count-text" id="wb-txt-g2">0/25 Terkunci</span>
                    </div>
                </div>

                <!-- Toast Alert Notification Container -->
                <div id="wb-toast-area" class="wb-toast-area"></div>

                <!-- Panduan Pengerjaan Modal -->
                <div id="wb-guide-modal" class="modal-overlay hidden">
                    <div class="modal-container card animate-zoom-in" style="max-width: 680px;">
                        <button id="btn-close-guide-modal" class="btn-close">&times;</button>
                        <div class="modal-header">
                            <i data-lucide="book-open" class="header-icon" style="color: #38bdf8;"></i>
                            <div>
                                <h3>Panduan Pengerjaan LKPD TP.1</h3>
                                <p>Petunjuk penggunaan Papan Tulis Interaktif untuk Kelompok 1 & 2</p>
                            </div>
                        </div>
                        <div class="modal-body" style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
                            <ol style="margin-left: 1.2rem; margin-bottom: 1rem; display:flex; flex-direction:column; gap:0.5rem;">
                                <li><strong>Cetak / Unduh LKPD Manual:</strong> Cetak atau unduh dokumen <strong>LKPD Manual TP.1 (PDF)</strong> terlebih dahulu untuk dibahas bersama tim.</li>
                                <li><strong>Kerjakan Bersama Kelompok:</strong> Diskusikan dan kerjakan 25 soal evaluasi konsep sel pada lembar fisik/manual.</li>
                                <li><strong>Input Jawaban:</strong> Salin dan masukkan jawaban kelompokmu menggunakan <strong>Keyboard Layar Interaktif</strong> masing-masing kelompok!</li>
                            </ol>
                            <div class="pdf-download-card" style="margin-bottom: 0.8rem;">
                                <div class="pdf-info">
                                    <i data-lucide="file-text" class="pdf-icon"></i>
                                    <div>
                                        <h4>Dokumen LKPD TP.1 (Konsep Sel)</h4>
                                        <p>Format PDF Siap Cetak • 25 Soal Evaluasi</p>
                                    </div>
                                </div>
                                <button id="btn-download-pdf-modal-guide" class="btn-pdf-download ripple">
                                    <i data-lucide="download"></i>
                                    <span>Buka / Unduh LKPD PDF</span>
                                </button>
                            </div>
                            <div class="highlight-box" style="--slide-accent: var(--color-bio-sel); margin-top: 0.8rem;">
                                <span>Fitur Papan Tulis Interaktif</span>
                                <ul style="margin-left: 1rem; margin-top: 0.4rem;">
                                    <li>🔒 <strong>Sistem Verifikasi:</strong> Jawaban yang benar akan otomatis <strong>TERKUNCI</strong>.</li>
                                    <li>⚠️ <strong>Umpan Balik Instan:</strong> Jawaban salah akan menampilkan notifikasi agar dapat diperbaiki.</li>
                                    <li>👥 <strong>Multi-Kelompok:</strong> Pengerjaan dibagi 2 kelompok dengan area scroll & keyboard independen.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Kunci Jawaban Modal -->
                <div id="wb-key-modal" class="modal-overlay hidden">
                    <div class="modal-container card animate-zoom-in" style="max-width: 750px;">
                        <button id="btn-close-key-modal" class="btn-close">&times;</button>
                        <div class="modal-header">
                            <i data-lucide="key" class="header-icon" style="color: #f59e0b;"></i>
                            <div>
                                <h3>Kunci Jawaban Guru (LKPD TP.1)</h3>
                                <p>Referensi jawaban 25 nomor soal untuk verifikasi pengerjaan kelompok</p>
                            </div>
                        </div>
                        <div class="modal-body" style="max-height: 60vh; overflow-y: auto;">
                            <table style="width:100%; border-collapse:collapse; font-size:0.85rem;">
                                <thead>
                                    <tr style="background: rgba(255,255,255,0.08); color: var(--text-primary); text-align: left;">
                                        <th style="padding: 8px;">No</th>
                                        <th style="padding: 8px;">Tipe</th>
                                        <th style="padding: 8px;">Kunci Jawaban Tepat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${TP1_QUESTIONS.map(q => {
                                        let keyStr = '';
                                        if (q.type === 'pg') keyStr = q.options[q.correct];
                                        else if (q.type === 'isian') keyStr = q.correctAnswers.join(' / ');
                                        else if (q.type === 'bs') keyStr = q.correct === 'B' ? 'Benar (B)' : 'Salah (S)';
                                        else if (q.type === 'pg_kompleks') keyStr = q.correct.join(', ');
                                        else if (q.type === 'jodoh') keyStr = `1-${q.correct[1]}, 2-${q.correct[2]}, 3-${q.correct[3]}, 4-${q.correct[4]}`;
                                        
                                        return `
                                            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                                                <td style="padding: 8px; font-weight: bold; color: var(--color-bio-sel);">#${q.id}</td>
                                                <td style="padding: 8px; color: var(--text-secondary);">${q.typeLabel}</td>
                                                <td style="padding: 8px; color: #38bdf8; font-weight: 600;">${keyStr}</td>
                                            </tr>
                                        `;
                                    }).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="wb-columns-layout">
                    <!-- KELOMPOK 1 COLUMN -->
                    <div class="wb-group-column g1-theme">
                        <div class="wb-col-top">
                            <div style="display:flex; align-items:center; gap:0.5rem;">
                                <span class="wb-col-badge g1-bg">Kelompok 1</span>
                                <span class="wb-col-sub" id="kb-target-g1">Target Keyboard: Soal #1</span>
                            </div>
                            <button class="btn-kb-toggle ripple" id="btn-toggle-kb-g1" title="Sembunyikan/Tampilkan Keyboard Kelompok 1">
                                <i data-lucide="keyboard"></i>
                            </button>
                        </div>

                        <!-- WORDWALL NUMBER TILES GRID (1-25) -->
                        <div class="wb-tiles-grid" id="wb-tiles-g1"></div>

                        <!-- ACTIVE QUESTION VIEWER -->
                        <div class="wb-active-q-container" id="wb-active-q-g1"></div>

                        <!-- VIRTUAL KEYBOARD KELOMPOK 1 -->
                        <div class="wb-keyboard-panel g1-kb" id="kb-panel-g1">
                            <div class="kb-rows">
                                <div class="kb-row">
                                    <button class="kb-key key-opt" data-key="A">A</button>
                                    <button class="kb-key key-opt" data-key="B">B</button>
                                    <button class="kb-key key-opt" data-key="C">C</button>
                                    <button class="kb-key key-opt" data-key="D">D</button>
                                    <button class="kb-key key-opt" data-key="E">E</button>
                                    <button class="kb-key key-num" data-key="1">1</button>
                                    <button class="kb-key key-num" data-key="2">2</button>
                                    <button class="kb-key key-num" data-key="3">3</button>
                                    <button class="kb-key key-num" data-key="4">4</button>
                                    <button class="kb-key key-num" data-key="5">5</button>
                                </div>
                                <div class="kb-row">
                                    <button class="kb-key" data-key="Q">Q</button>
                                    <button class="kb-key" data-key="W">W</button>
                                    <button class="kb-key" data-key="E">E</button>
                                    <button class="kb-key" data-key="R">R</button>
                                    <button class="kb-key" data-key="T">T</button>
                                    <button class="kb-key" data-key="Y">Y</button>
                                    <button class="kb-key" data-key="U">U</button>
                                    <button class="kb-key" data-key="I">I</button>
                                    <button class="kb-key" data-key="O">O</button>
                                    <button class="kb-key" data-key="P">P</button>
                                </div>
                                <div class="kb-row">
                                    <button class="kb-key" data-key="A">A</button>
                                    <button class="kb-key" data-key="S">S</button>
                                    <button class="kb-key" data-key="D">D</button>
                                    <button class="kb-key" data-key="F">F</button>
                                    <button class="kb-key" data-key="G">G</button>
                                    <button class="kb-key" data-key="H">H</button>
                                    <button class="kb-key" data-key="J">J</button>
                                    <button class="kb-key" data-key="K">K</button>
                                    <button class="kb-key" data-key="L">L</button>
                                    <button class="kb-key key-num" data-key="0">0</button>
                                </div>
                                <div class="kb-row">
                                    <button class="kb-key" data-key="Z">Z</button>
                                    <button class="kb-key" data-key="X">X</button>
                                    <button class="kb-key" data-key="C">C</button>
                                    <button class="kb-key" data-key="V">V</button>
                                    <button class="kb-key" data-key="B">B</button>
                                    <button class="kb-key" data-key="N">N</button>
                                    <button class="kb-key" data-key="M">M</button>
                                    <button class="kb-key key-action key-space" data-key="SPACE">Space</button>
                                    <button class="kb-key key-action key-back" data-key="BACKSPACE">⌫</button>
                                    <button class="kb-key key-action key-send" data-key="SUBMIT">↵ Kirim</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- KELOMPOK 2 COLUMN -->
                    <div class="wb-group-column g2-theme">
                        <div class="wb-col-top">
                            <div style="display:flex; align-items:center; gap:0.5rem;">
                                <span class="wb-col-badge g2-bg">Kelompok 2</span>
                                <span class="wb-col-sub" id="kb-target-g2">Target Keyboard: Soal #1</span>
                            </div>
                            <button class="btn-kb-toggle ripple" id="btn-toggle-kb-g2" title="Sembunyikan/Tampilkan Keyboard Kelompok 2">
                                <i data-lucide="keyboard"></i>
                            </button>
                        </div>

                        <!-- WORDWALL NUMBER TILES GRID (1-25) -->
                        <div class="wb-tiles-grid" id="wb-tiles-g2"></div>

                        <!-- ACTIVE QUESTION VIEWER -->
                        <div class="wb-active-q-container" id="wb-active-q-g2"></div>

                        <!-- VIRTUAL KEYBOARD KELOMPOK 2 -->
                        <div class="wb-keyboard-panel g2-kb" id="kb-panel-g2">
                            <div class="kb-rows">
                                <div class="kb-row">
                                    <button class="kb-key key-opt" data-key="A">A</button>
                                    <button class="kb-key key-opt" data-key="B">B</button>
                                    <button class="kb-key key-opt" data-key="C">C</button>
                                    <button class="kb-key key-opt" data-key="D">D</button>
                                    <button class="kb-key key-opt" data-key="E">E</button>
                                    <button class="kb-key key-num" data-key="1">1</button>
                                    <button class="kb-key key-num" data-key="2">2</button>
                                    <button class="kb-key key-num" data-key="3">3</button>
                                    <button class="kb-key key-num" data-key="4">4</button>
                                    <button class="kb-key key-num" data-key="5">5</button>
                                </div>
                                <div class="kb-row">
                                    <button class="kb-key" data-key="Q">Q</button>
                                    <button class="kb-key" data-key="W">W</button>
                                    <button class="kb-key" data-key="E">E</button>
                                    <button class="kb-key" data-key="R">R</button>
                                    <button class="kb-key" data-key="T">T</button>
                                    <button class="kb-key" data-key="Y">Y</button>
                                    <button class="kb-key" data-key="U">U</button>
                                    <button class="kb-key" data-key="I">I</button>
                                    <button class="kb-key" data-key="O">O</button>
                                    <button class="kb-key" data-key="P">P</button>
                                </div>
                                <div class="kb-row">
                                    <button class="kb-key" data-key="A">A</button>
                                    <button class="kb-key" data-key="S">S</button>
                                    <button class="kb-key" data-key="D">D</button>
                                    <button class="kb-key" data-key="F">F</button>
                                    <button class="kb-key" data-key="G">G</button>
                                    <button class="kb-key" data-key="H">H</button>
                                    <button class="kb-key" data-key="J">J</button>
                                    <button class="kb-key" data-key="K">K</button>
                                    <button class="kb-key" data-key="L">L</button>
                                    <button class="kb-key key-num" data-key="0">0</button>
                                </div>
                                <div class="kb-row">
                                    <button class="kb-key" data-key="Z">Z</button>
                                    <button class="kb-key" data-key="X">X</button>
                                    <button class="kb-key" data-key="C">C</button>
                                    <button class="kb-key" data-key="V">V</button>
                                    <button class="kb-key" data-key="B">B</button>
                                    <button class="kb-key" data-key="N">N</button>
                                    <button class="kb-key" data-key="M">M</button>
                                    <button class="kb-key key-action key-space" data-key="SPACE">Space</button>
                                    <button class="kb-key key-action key-back" data-key="BACKSPACE">⌫</button>
                                    <button class="kb-key key-action key-send" data-key="SUBMIT">↵ Kirim</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        lucide.createIcons();

        // 1. FULLSCREEN TOGGLE LISTENER FOR BOARD
        const btnWbFs = document.getElementById('btn-wb-fullscreen');
        if (btnWbFs) {
            btnWbFs.addEventListener('click', () => {
                AudioSynth.playClick();
                const wbWrapper = document.querySelector('.wb-wrapper');
                if (wbWrapper) {
                    wbWrapper.classList.toggle('wb-fullscreen');
                    const isFs = wbWrapper.classList.contains('wb-fullscreen');
                    const icon = document.getElementById('wb-fs-icon');
                    if (icon) icon.setAttribute('data-lucide', isFs ? 'minimize' : 'maximize');
                    const span = btnWbFs.querySelector('span');
                    if (span) span.textContent = isFs ? 'Keluar Penuh' : 'Layar Penuh';
                    lucide.createIcons();
                }
                FullscreenController.toggle();
            });
        }

        // 2. TOGGLE KEYBOARD PANELS
        const btnToggleKbG1 = document.getElementById('btn-toggle-kb-g1');
        if (btnToggleKbG1) {
            btnToggleKbG1.addEventListener('click', () => {
                AudioSynth.playClick();
                const panel = document.getElementById('kb-panel-g1');
                if (panel) panel.classList.toggle('hidden');
            });
        }
        const btnToggleKbG2 = document.getElementById('btn-toggle-kb-g2');
        if (btnToggleKbG2) {
            btnToggleKbG2.addEventListener('click', () => {
                AudioSynth.playClick();
                const panel = document.getElementById('kb-panel-g2');
                if (panel) panel.classList.toggle('hidden');
            });
        }

        const updateGroupProgress = () => {
            const countG1 = Object.keys(wbState.group1).filter(k => wbState.group1[k]).length;
            const countG2 = Object.keys(wbState.group2).filter(k => wbState.group2[k]).length;
            
            const pctG1 = Math.round((countG1 / TP1_QUESTIONS.length) * 100);
            const pctG2 = Math.round((countG2 / TP1_QUESTIONS.length) * 100);

            const bar1 = document.getElementById('wb-bar-g1');
            const txt1 = document.getElementById('wb-txt-g1');
            if (bar1 && txt1) {
                bar1.style.width = `${pctG1}%`;
                txt1.innerText = `${countG1}/25 Terkunci`;
            }

            const bar2 = document.getElementById('wb-bar-g2');
            const txt2 = document.getElementById('wb-txt-g2');
            if (bar2 && txt2) {
                bar2.style.width = `${pctG2}%`;
                txt2.innerText = `${countG2}/25 Terkunci`;
            }
        };

        const tileColors = [
            '#0284c7', '#ef4444', '#f97316', '#16a34a',
            '#a855f7', '#2563eb', '#06b6d4', '#ea580c',
            '#3b82f6', '#ec4899', '#10b981', '#f59e0b',
            '#6366f1', '#d97706', '#0284c7', '#ef4444',
            '#f97316', '#16a34a', '#a855f7', '#2563eb',
            '#06b6d4', '#ea580c', '#3b82f6', '#ec4899', '#10b981'
        ];

        const renderGroupView = (groupKey) => {
            const tilesEl = document.getElementById(groupKey === 'group1' ? 'wb-tiles-g1' : 'wb-tiles-g2');
            const activeQBoxEl = document.getElementById(groupKey === 'group1' ? 'wb-active-q-g1' : 'wb-active-q-g2');
            if (!tilesEl || !activeQBoxEl) return;

            const currentActiveId = this.whiteboardActiveQ[groupKey] || 1;

            // 1. Render 25 Wordwall-Style Number Tiles
            tilesEl.innerHTML = TP1_QUESTIONS.map((q, idx) => {
                const isLocked = !!wbState[groupKey][q.id];
                const isSelected = (q.id === currentActiveId);
                const color = tileColors[idx % tileColors.length];

                return `
                    <button class="wb-tile ${isLocked ? 'is-locked' : ''} ${isSelected ? 'is-selected' : ''}" 
                            style="${!isLocked ? `background: ${color};` : ''}"
                            data-qid="${q.id}"
                            title="Soal #${q.id} [${q.typeLabel}] ${isLocked ? '(Terkunci)' : ''}">
                        ${q.id}
                    </button>
                `;
            }).join('');

            // Attach click listener for tiles
            tilesEl.querySelectorAll('.wb-tile').forEach(tileBtn => {
                tileBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    AudioSynth.playClick();
                    const qId = parseInt(tileBtn.getAttribute('data-qid'));
                    this.whiteboardActiveQ[groupKey] = qId;
                    renderGroupView(groupKey);
                    
                    const inputEl = document.getElementById(`input-${groupKey}-${qId}`);
                    if (inputEl) inputEl.focus();
                });
            });

            // 2. Render Active Question Details Card
            const q = TP1_QUESTIONS.find(item => item.id === currentActiveId);
            const isLocked = !!wbState[groupKey][q.id];
            const savedVal = wbInputs[groupKey][q.id] !== undefined ? wbInputs[groupKey][q.id] : '';

            let optionsHTML = '';
            if (q.type === 'pg') {
                optionsHTML = `
                    <div class="wb-q-options-grid">
                        ${q.options.map((opt, idx) => {
                            const letter = String.fromCharCode(65 + idx);
                            const isChoiceSelected = (savedVal.toUpperCase() === letter);
                            return `
                                <button class="wb-option-card ${isChoiceSelected ? 'is-selected' : ''} ${isLocked ? 'is-disabled' : ''}" data-letter="${letter}">
                                    <span class="opt-letter">${letter}</span>
                                    <span class="opt-text">${opt}</span>
                                </button>
                            `;
                        }).join('')}
                    </div>
                `;
            } else if (q.type === 'pg_kompleks') {
                optionsHTML = `
                    <div class="wb-q-options-grid">
                        ${q.options.map(opt => `
                            <div class="wb-option-card" style="cursor:default;">
                                <span class="opt-letter">${opt.id}</span>
                                <span class="opt-text">${opt.text}</span>
                            </div>
                        `).join('')}
                    </div>
                    <p style="font-size:0.72rem; color:var(--text-muted); margin-top:0.3rem;">💡 Ketik gabungan huruf opsi pilihanmu (misalnya: <strong>ABD</strong>)</p>
                `;
            } else if (q.type === 'jodoh') {
                optionsHTML = `
                    <div class="wb-matching-grid">
                        <div class="match-col">
                            <strong style="color:var(--text-muted); font-size:0.75rem; margin-bottom:0.2rem; display:block;">Pernyataan:</strong>
                            ${q.leftItems.map(l => `<div class="match-item">${l.label}</div>`).join('')}
                        </div>
                        <div class="match-col">
                            <strong style="color:var(--text-muted); font-size:0.75rem; margin-bottom:0.2rem; display:block;">Pasangan:</strong>
                            ${q.rightItems.map(r => `<div class="match-item">${r.label}</div>`).join('')}
                        </div>
                    </div>
                    <p style="font-size:0.72rem; color:var(--text-muted); margin-top:0.3rem;">💡 Ketik urutan huruf pasangan (misalnya: <strong>bcda</strong>)</p>
                `;
            }

            let placeholderText = '';
            if (q.type === 'pg') placeholderText = 'Ketik A / B / C / D atau klik opsi di atas...';
            else if (q.type === 'isian') placeholderText = 'Ketik jawaban isian singkat...';
            else if (q.type === 'bs') placeholderText = 'Ketik B (Benar) / S (Salah)...';
            else if (q.type === 'pg_kompleks') placeholderText = 'Gabungan huruf opsi (misal: ABD)...';
            else if (q.type === 'jodoh') placeholderText = 'Urutan huruf pasangan (misal: bcda)...';

            activeQBoxEl.innerHTML = `
                <div class="wb-q-active-card card ${isLocked ? 'is-locked-card' : ''}">
                    <div class="wb-q-card-header">
                        <div style="display:flex; align-items:center; gap:0.4rem;">
                            <span class="wb-q-num-badge">Soal #${q.id}</span>
                            <span class="wb-q-tag">${q.typeLabel}</span>
                        </div>
                        ${isLocked ? `
                            <span class="wb-status-locked-tag"><i data-lucide="lock" style="width:13px; height:13px;"></i> TERKUNCI</span>
                        ` : `
                            <span class="wb-status-open-tag"><i data-lucide="edit-3" style="width:13px; height:13px;"></i> Terbuka</span>
                        `}
                    </div>

                    <div class="wb-q-text-body">
                        ${q.text}
                    </div>

                    ${optionsHTML}

                    <div class="wb-q-card-footer">
                        ${isLocked ? `
                            <div class="wb-locked-banner-compact" style="width:100%; justify-content:center; padding:0.5rem; background:rgba(16,185,129,0.2);">
                                <i data-lucide="check-circle-2" style="width:16px; height:16px;"></i>
                                <span>JAWABAN BENAR & TERKUNCI</span>
                            </div>
                        ` : `
                            <div class="wb-ans-input-wrapper">
                                <input type="text" id="input-${groupKey}-${q.id}" class="wb-text-field-sm is-active-input" placeholder="${placeholderText}" value="${savedVal}" readonly inputmode="none" autocomplete="off">
                                <button class="btn-wb-submit-sm ripple" id="btn-submit-${groupKey}-${q.id}" title="Kirim Jawaban Soal #${q.id}">
                                    <span>Kirim</span>
                                    <i data-lucide="send"></i>
                                </button>
                            </div>
                        `}

                        <div class="wb-card-nav-row">
                            <button class="btn-card-nav" id="btn-prev-q-${groupKey}" ${q.id === 1 ? 'disabled' : ''}>
                                <i data-lucide="chevron-left"></i> Soal #${q.id - 1}
                            </button>
                            <span style="font-size:0.75rem; color:var(--text-muted);">Nomor ${q.id} dari ${TP1_QUESTIONS.length}</span>
                            <button class="btn-card-nav" id="btn-next-q-${groupKey}" ${q.id === 25 ? 'disabled' : ''}>
                                Soal #${q.id + 1} <i data-lucide="chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;

            lucide.createIcons();

            // Event listener for input box changes
            if (!isLocked) {
                const inputEl = document.getElementById(`input-${groupKey}-${q.id}`);
                if (inputEl) {
                    inputEl.addEventListener('input', (e) => {
                        wbInputs[groupKey][q.id] = e.target.value;
                    });
                    inputEl.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            wbInputs[groupKey][q.id] = e.target.value;
                            this.verifyAnswer(groupKey, q, groupKey === 'group1' ? 'wb-scroll-g1' : 'wb-scroll-g2');
                        }
                    });
                }

                const submitBtn = document.getElementById(`btn-submit-${groupKey}-${q.id}`);
                if (submitBtn) {
                    submitBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.verifyAnswer(groupKey, q, groupKey === 'group1' ? 'wb-scroll-g1' : 'wb-scroll-g2');
                    });
                }

                // Option cards clicking (for PG)
                activeQBoxEl.querySelectorAll('.wb-option-card[data-letter]').forEach(optCard => {
                    optCard.addEventListener('click', () => {
                        AudioSynth.playClick();
                        const letter = optCard.getAttribute('data-letter');
                        wbInputs[groupKey][q.id] = letter;
                        if (inputEl) inputEl.value = letter;
                        activeQBoxEl.querySelectorAll('.wb-option-card[data-letter]').forEach(c => c.classList.remove('is-selected'));
                        optCard.classList.add('is-selected');
                    });
                });
            }

            // Prev / Next card navigation
            const prevBtn = document.getElementById(`btn-prev-q-${groupKey}`);
            const nextBtn = document.getElementById(`btn-next-q-${groupKey}`);

            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    AudioSynth.playClick();
                    if (q.id > 1) {
                        this.whiteboardActiveQ[groupKey] = q.id - 1;
                        renderGroupView(groupKey);
                    }
                });
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    AudioSynth.playClick();
                    if (q.id < 25) {
                        this.whiteboardActiveQ[groupKey] = q.id + 1;
                        renderGroupView(groupKey);
                    }
                });
            }
        };

        // BIND VIRTUAL KEYBOARD HANDLERS FOR EACH GROUP
        const setupVirtualKeyboard = (groupKey) => {
            const kbPanel = document.getElementById(`kb-panel-${groupKey === 'group1' ? 'g1' : 'g2'}`);
            if (!kbPanel) return;

            const findActiveQId = () => {
                const activeId = this.whiteboardActiveQ[groupKey];
                if (activeId && !wbState[groupKey][activeId]) {
                    return activeId;
                }
                const firstUnlocked = TP1_QUESTIONS.find(q => !wbState[groupKey][q.id]);
                if (firstUnlocked) {
                    this.whiteboardActiveQ[groupKey] = firstUnlocked.id;
                    return firstUnlocked.id;
                }
                return activeId || 1;
            };

            const updateTargetLabel = () => {
                const qId = findActiveQId();
                const label = document.getElementById(`kb-target-${groupKey === 'group1' ? 'g1' : 'g2'}`);
                if (label) {
                    if (qId) label.innerText = `Target Keyboard: Soal #${qId}`;
                    else label.innerText = `Semua Soal Terkunci! 🎉`;
                }
            };

            updateTargetLabel();

            kbPanel.querySelectorAll('.kb-key').forEach(keyBtn => {
                keyBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    AudioSynth.playClick();

                    const qId = findActiveQId();
                    if (!qId) return;

                    const questionObj = TP1_QUESTIONS.find(q => q.id === qId);
                    const inputEl = document.getElementById(`input-${groupKey}-${qId}`);
                    const keyVal = keyBtn.getAttribute('data-key');
                    const scrollContainerId = groupKey === 'group1' ? 'wb-scroll-g1' : 'wb-scroll-g2';

                    if (keyVal === 'SUBMIT') {
                        if (inputEl) wbInputs[groupKey][qId] = inputEl.value;
                        this.verifyAnswer(groupKey, questionObj, scrollContainerId);
                    } else if (keyVal === 'BACKSPACE') {
                        let current = inputEl ? inputEl.value : (wbInputs[groupKey][qId] || '');
                        current = current.slice(0, -1);
                        if (inputEl) inputEl.value = current;
                        wbInputs[groupKey][qId] = current;

                        const activeQBoxEl = document.getElementById(groupKey === 'group1' ? 'wb-active-q-g1' : 'wb-active-q-g2');
                        if (activeQBoxEl) {
                            activeQBoxEl.querySelectorAll('.wb-option-card[data-letter]').forEach(c => {
                                if (c.getAttribute('data-letter') === current.toUpperCase()) c.classList.add('is-selected');
                                else c.classList.remove('is-selected');
                            });
                        }
                    } else if (keyVal === 'SPACE') {
                        let current = inputEl ? inputEl.value : (wbInputs[groupKey][qId] || '');
                        current += ' ';
                        if (inputEl) inputEl.value = current;
                        wbInputs[groupKey][qId] = current;
                    } else {
                        let current = inputEl ? inputEl.value : (wbInputs[groupKey][qId] || '');
                        if (questionObj && questionObj.type === 'pg') {
                            current = keyVal;
                        } else {
                            current += keyVal;
                        }
                        if (inputEl) inputEl.value = current;
                        wbInputs[groupKey][qId] = current;

                        const activeQBoxEl = document.getElementById(groupKey === 'group1' ? 'wb-active-q-g1' : 'wb-active-q-g2');
                        if (activeQBoxEl) {
                            activeQBoxEl.querySelectorAll('.wb-option-card[data-letter]').forEach(c => {
                                if (c.getAttribute('data-letter') === current.toUpperCase()) c.classList.add('is-selected');
                                else c.classList.remove('is-selected');
                            });
                        }
                    }

                    if (inputEl) {
                        inputEl.focus();
                    }
                });
            });
        };

        renderGroupView('group1');
        renderGroupView('group2');
        setupVirtualKeyboard('group1');
        setupVirtualKeyboard('group2');

        // Prevent touchmove events in group columns from scrolling adjacent elements or parent page
        container.querySelectorAll('.wb-group-column').forEach(col => {
            col.addEventListener('touchmove', (e) => {
                e.stopPropagation();
            }, { passive: true });
        });

        // Physical Keyboard Event Listener for IFP / PC
        if (!this._wbKeyHandlerBound) {
            this._wbKeyHandlerBound = true;
            window.addEventListener('keydown', (e) => {
                const activeSlide = this.currentSlide;
                if (!activeSlide || activeSlide.visualType !== 'interactive-whiteboard-tp1') return;

                if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') && !e.target.readOnly) return;

                const groupKey = 'group1';
                const qId = this.whiteboardActiveQ[groupKey] || 1;
                if (this.whiteboardState[groupKey][qId]) return;

                const questionObj = TP1_QUESTIONS.find(q => q.id === qId);
                const inputEl = document.getElementById(`input-${groupKey}-${qId}`);

                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.verifyAnswer(groupKey, questionObj, 'wb-scroll-g1');
                } else if (e.key === 'Backspace') {
                    e.preventDefault();
                    let cur = inputEl ? inputEl.value : (this.whiteboardInputs[groupKey][qId] || '');
                    cur = cur.slice(0, -1);
                    if (inputEl) inputEl.value = cur;
                    this.whiteboardInputs[groupKey][qId] = cur;
                } else if (e.key === ' ') {
                    e.preventDefault();
                    let cur = inputEl ? inputEl.value : (this.whiteboardInputs[groupKey][qId] || '');
                    cur += ' ';
                    if (inputEl) inputEl.value = cur;
                    this.whiteboardInputs[groupKey][qId] = cur;
                } else if (e.key.length === 1 && /[a-zA-Z0-9]/.test(e.key)) {
                    e.preventDefault();
                    let cur = inputEl ? inputEl.value : (this.whiteboardInputs[groupKey][qId] || '');
                    if (questionObj && questionObj.type === 'pg') {
                        cur = e.key.toUpperCase();
                    } else {
                        cur += e.key;
                    }
                    if (inputEl) inputEl.value = cur;
                    this.whiteboardInputs[groupKey][qId] = cur;
                }
            });
        }

        updateGroupProgress();

        // Panduan Pengerjaan Modal Event Listeners
        const btnShowGuide = document.getElementById('btn-show-guide-modal');
        const btnCloseGuide = document.getElementById('btn-close-guide-modal');
        const modalGuide = document.getElementById('wb-guide-modal');

        if (btnShowGuide && modalGuide) {
            btnShowGuide.addEventListener('click', () => {
                AudioSynth.playClick();
                modalGuide.classList.remove('hidden');
            });
        }

        if (btnCloseGuide && modalGuide) {
            btnCloseGuide.addEventListener('click', () => {
                AudioSynth.playClick();
                modalGuide.classList.add('hidden');
            });
        }

        const btnGuidePdf = document.getElementById('btn-download-pdf-modal-guide');
        if (btnGuidePdf) {
            btnGuidePdf.addEventListener('click', () => {
                AudioSynth.playClick();
                if (modalGuide) modalGuide.classList.add('hidden');
                this.generateTP1PDF();
            });
        }

        // Kunci Jawaban Modal Event Listeners
        const btnShowKey = document.getElementById('btn-show-key-modal');
        const btnCloseKey = document.getElementById('btn-close-key-modal');
        const modalKey = document.getElementById('wb-key-modal');

        if (btnShowKey && modalKey) {
            btnShowKey.addEventListener('click', () => {
                AudioSynth.playClick();
                modalKey.classList.remove('hidden');
            });
        }

        if (btnCloseKey && modalKey) {
            btnCloseKey.addEventListener('click', () => {
                AudioSynth.playClick();
                modalKey.classList.add('hidden');
            });
        }
    },

    verifyAnswer(groupKey, question, scrollContainerId) {
        const q = question;
        const gName = groupKey === 'group1' ? 'Kelompok 1' : 'Kelompok 2';
        const inputEl = document.getElementById(`input-${groupKey}-${q.id}`);
        const rawVal = inputEl ? inputEl.value.trim() : (this.whiteboardInputs[groupKey][q.id] || '').trim();

        if (!rawVal) {
            this.showWhiteboardToast(`⚠️ ${gName}: Silakan ketik jawaban pada Soal #${q.id} terlebih dahulu!`, true);
            return;
        }

        let isCorrect = false;

        if (q.type === 'pg') {
            const expectedLetter = String.fromCharCode(65 + q.correct); // 0 -> 'A', 1 -> 'B', 2 -> 'C', 3 -> 'D'
            let userLetter = '';
            const standaloneMatch = rawVal.toUpperCase().match(/\b[A-D]\b/);
            if (standaloneMatch) {
                userLetter = standaloneMatch[0];
            } else {
                const allMatches = rawVal.toUpperCase().match(/[A-D]/g);
                userLetter = allMatches ? allMatches[allMatches.length - 1] : '';
            }
            isCorrect = (userLetter === expectedLetter);
        } else if (q.type === 'pg_kompleks') {
            const expectedStr = q.correct.slice().sort().join('');
            const matches = rawVal.toUpperCase().match(/[A-E]/g);
            const validOptions = q.options.map(o => o.id);
            const userLetters = matches ? matches.filter(m => validOptions.includes(m)) : [];
            const userStr = Array.from(new Set(userLetters)).sort().join('');
            isCorrect = (userStr === expectedStr);
        } else if (q.type === 'isian') {
            const norm = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
            const valNorm = norm(rawVal);
            isCorrect = q.correctAnswers.some(ans => {
                const cleanAns = norm(ans);
                return valNorm === cleanAns || valNorm.includes(cleanAns) || cleanAns.includes(valNorm);
            });
        } else if (q.type === 'bs') {
            const valLower = rawVal.toLowerCase();
            let userChoice = '';
            if (valLower.startsWith('b') || valLower.includes('benar')) userChoice = 'B';
            else if (valLower.startsWith('s') || valLower.includes('salah')) userChoice = 'S';
            else userChoice = rawVal.toUpperCase();
            isCorrect = (userChoice === q.correct);
        } else if (q.type === 'jodoh') {
            const expectedSeq = `${q.correct[1]}${q.correct[2]}${q.correct[3]}${q.correct[4]}`.toLowerCase();
            const matches = rawVal.toLowerCase().match(/[a-d]/g);
            const userSeq = matches ? matches.join('') : '';
            isCorrect = (userSeq === expectedSeq);
        }

        if (isCorrect) {
            AudioSynth.playTriumph();
            this.whiteboardState[groupKey][q.id] = true;

            // Calculate remaining unlocked questions
            const lockedCount = Object.keys(this.whiteboardState[groupKey]).filter(k => this.whiteboardState[groupKey][k]).length;
            const remainingCount = TP1_QUESTIONS.length - lockedCount;

            // Announce voice notification for correct answer
            let voiceMsg = '';
            if (remainingCount > 0) {
                voiceMsg = `${gName} benar! Tersisa ${remainingCount} soal lagi.`;
            } else {
                voiceMsg = `Luarrr biasa! ${gName} telah menyelesaikan seluruh 25 soal!`;
            }
            this.speakVoiceNotification(voiceMsg);

            // Auto-advance target question for virtual keyboard to next unlocked question
            const nextUnlocked = TP1_QUESTIONS.find(item => item.id > q.id && !this.whiteboardState[groupKey][item.id]) 
                              || TP1_QUESTIONS.find(item => !this.whiteboardState[groupKey][item.id]);
            if (nextUnlocked) {
                this.whiteboardActiveQ[groupKey] = nextUnlocked.id;
            }

            // Re-render question cards & update stats
            this.initInteractiveWhiteboardTP1(document.getElementById('viewport-content'));

            // Apresiasi Notifikasi Jawaban Benar
            const praises = [
                "🎉 HEBAT BANGET! Jawaban Sempurna!",
                "🌟 LUAR BIASA! Jawaban Tepat 100%!",
                "🏆 KERJA BAGUS! Pertahankan Semangat!",
                "✨ FANTASTIS! Jawaban Benar & Terkunci!",
                "👏 SANGAT BAGUS! Poin Berhasil Diraih!"
            ];
            const praiseText = praises[(q.id - 1) % praises.length];
            this.showWhiteboardToast(`${praiseText} (${gName} - Tersisa ${remainingCount} Soal)`, false);
        } else {
            AudioSynth.playWrong();
            const voiceMsg = `${gName} salah. Coba periksa kembali jawabannya.`;
            this.speakVoiceNotification(voiceMsg);

            this.showWhiteboardToast(`❌ Jawaban ${gName} untuk Soal #${q.id} belum tepat. Periksa kembali LKPD kalian!`, true);
        }
    },

    speakVoiceNotification(text) {
        if ('speechSynthesis' in window) {
            try {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'id-ID';
                utterance.rate = 1.0;
                utterance.pitch = 1.1;

                const voices = window.speechSynthesis.getVoices();
                const idVoice = voices.find(v => v.lang && (v.lang.includes('id') || v.lang.includes('ID')));
                if (idVoice) utterance.voice = idVoice;

                window.speechSynthesis.speak(utterance);
            } catch (err) {
                console.warn('SpeechSynthesis error:', err);
            }
        }
    },

    showWhiteboardToast(message, isError) {
        const area = document.getElementById('wb-toast-area');
        if (!area) return;

        const toast = document.createElement('div');
        toast.className = `wb-toast ${isError ? 'toast-error' : 'toast-success'} animate-toast`;
        toast.innerHTML = `
            <i data-lucide="${isError ? 'alert-triangle' : 'check-circle-2'}" class="toast-icon"></i>
            <span>${message}</span>
        `;
        area.appendChild(toast);
        lucide.createIcons();

        setTimeout(() => {
            toast.classList.add('toast-fadeout');
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    },

    /* CETAK / DOWNLOAD LKPD MANUAL TP.1 PDF */
    generateTP1PDF() {
        let modal = document.getElementById('pdf-preview-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'pdf-preview-modal';
            modal.className = 'modal-overlay hidden';
            document.body.appendChild(modal);
        }

        const questionsHTML = TP1_QUESTIONS.map(q => {
            let bodyHTML = '';
            if (q.type === 'pg') {
                bodyHTML = `<div class="pdf-options" style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-left:10px; font-size:12px;">${q.options.map(o => `<div>[ &nbsp; ] ${o}</div>`).join('')}</div>`;
            } else if (q.type === 'isian') {
                bodyHTML = `<div class="pdf-fill-line" style="margin-top:5px; font-style:italic; font-size:12px;">Jawab: __________________________________________________</div>`;
            } else if (q.type === 'bs') {
                bodyHTML = `<div class="pdf-bs" style="margin-top:4px; font-weight:bold; font-size:12px;">Pilihan: ( &nbsp; B &nbsp; / &nbsp; S &nbsp; )</div>`;
            } else if (q.type === 'pg_kompleks') {
                bodyHTML = `<div class="pdf-options" style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-left:10px; font-size:12px;">${q.options.map(o => `<div>[ &nbsp; ] (${o.id}) ${o.text}</div>`).join('')}</div>`;
            } else if (q.type === 'jodoh') {
                bodyHTML = `
                    <div class="pdf-matching" style="margin-top:4px; border:1px dashed #666; padding:6px;">
                        <table style="width:100%; font-size:12px; border-collapse:collapse; color:#000;">
                            <tr>
                                <td style="width:45%; vertical-align:top;">
                                    ${q.leftItems.map(l => `<div>${l.label}</div>`).join('')}
                                </td>
                                <td style="width:55%; vertical-align:top;">
                                    ${q.rightItems.map(r => `<div>${r.label}</div>`).join('')}
                                </td>
                            </tr>
                        </table>
                        <div style="margin-top:6px; font-weight:bold; font-size:12px;">Pasangan: 1-___ &nbsp;&nbsp; 2-___ &nbsp;&nbsp; 3-___ &nbsp;&nbsp; 4-___</div>
                    </div>
                `;
            }

            return `
                <div class="pdf-q-item" style="margin-bottom:14px; page-break-inside:avoid;">
                    <div class="pdf-q-title" style="font-weight:bold; font-size:13px; margin-bottom:2px;"><strong>Soal No. ${q.id}</strong> [${q.typeLabel}]</div>
                    <div class="pdf-q-text" style="font-size:13px; margin-bottom:5px;">${q.text}</div>
                    ${bodyHTML}
                </div>
            `;
        }).join('');

        const fullDocumentHTML = `
            <div style="text-align:center; border-bottom:3px double #000; padding-bottom:10px; margin-bottom:15px;">
                <h2 style="margin:0 0 4px 0; font-size:18px; text-transform:uppercase; color:#000;">LEMBAR KERJA PESERTA DIDIK (LKPD) MANUAL</h2>
                <h3 style="margin:0 0 4px 0; font-size:15px; color:#000;">TUGAS PEMBELAJARAN (TP.1) : KONSEP & STRUKTUR SEL</h3>
                <p style="margin:0; font-size:12px; font-style:italic; color:#333;">Mata Pelajaran: IPA / Biologi | Kelas VIII SMP/MTs | Total: 25 Soal Evaluasi</p>
            </div>

            <div style="display:flex; justify-content:space-between; border:1px solid #000; padding:8px 12px; margin-bottom:15px; font-weight:bold; font-size:12px; color:#000;">
                <div>NAMA KELOMPOK / SISWA: ___________________________</div>
                <div>KELAS: __________</div>
                <div>NO. ABSEN: _____</div>
            </div>

            <p style="font-size:11px; margin-bottom:15px; font-style:italic; color:#444;">
                * Petunjuk: Isilah jawaban pada lembar LKPD manual ini terlebih dahulu. Setelah selesai, kumpulkan dan masukkan hasilnya pada Papan Tulis Interaktif di layar presentasi!
            </p>

            ${questionsHTML}

            <div style="margin-top:30px; text-align:right; color:#000; font-size:12px; page-break-inside:avoid;">
                <p>Tanggal Pengerjaan: ___________________________</p>
                <p style="margin-top:40px;">Tanda Tangan Guru / Pembimbing: ____________________</p>
            </div>
        `;

        modal.innerHTML = `
            <div class="modal-container card animate-zoom-in" style="max-width: 950px; width: 95%; max-height: 90vh; display:flex; flex-direction:column; background: #0f172a; border: 1px solid rgba(255,255,255,0.2);">
                <button id="btn-close-pdf-modal" class="btn-close">&times;</button>
                <div class="modal-header" style="display:flex; justify-content:space-between; align-items:center; flex-shrink:0; padding: 1rem 1.25rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                        <i data-lucide="file-text" class="header-icon" style="color: #10b981; width: 28px; height: 28px;"></i>
                        <div>
                            <h3 style="margin:0; font-size: 1.1rem; color: #ffffff;">Dokumen LKPD Manual TP.1 (Siap Cetak PDF)</h3>
                            <p style="margin:0; font-size: 0.8rem; color: var(--text-secondary);">25 Soal Evaluasi Konsep Sel — Siap Dicetak untuk Peserta Didik</p>
                        </div>
                    </div>
                    <div style="display:flex; gap:0.5rem;">
                        <button id="btn-print-pdf-win" class="btn-primary ripple" style="padding: 0.5rem 1rem; font-size: 0.85rem; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);">
                            <i data-lucide="external-link"></i>
                            <span>Buka Jendela Cetak PDF</span>
                        </button>
                        <button id="btn-print-pdf-direct" class="btn-primary ripple" style="padding: 0.5rem 1.1rem; font-size: 0.85rem; background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
                            <i data-lucide="printer"></i>
                            <span>Cetak Langsung</span>
                        </button>
                    </div>
                </div>
                <div class="modal-body" style="flex:1; overflow-y:auto; background:#ffffff; color:#000000; padding:2.5rem; border-radius:8px; margin: 1rem; font-family:'Times New Roman', Times, serif;" id="pdf-printable-area">
                    ${fullDocumentHTML}
                </div>
            </div>
        `;

        lucide.createIcons();
        modal.classList.remove('hidden');
        modal.style.display = 'flex';

        document.getElementById('btn-close-pdf-modal').addEventListener('click', () => {
            AudioSynth.playClick();
            modal.classList.add('hidden');
            modal.style.display = 'none';
        });

        // Handler Cetak Langsung
        document.getElementById('btn-print-pdf-direct').addEventListener('click', () => {
            AudioSynth.playClick();
            window.print();
        });

        // Handler Buka Jendela Cetak Baru (Print Window popup)
        document.getElementById('btn-print-pdf-win').addEventListener('click', () => {
            AudioSynth.playClick();
            const printWin = window.open('', '_blank', 'width=900,height=800');
            if (printWin) {
                printWin.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>LKPD TP.1 Konsep Sel - Siap Cetak</title>
                        <style>
                            body { font-family: 'Times New Roman', Times, serif; padding: 2cm; background: #fff; color: #000; }
                            @page { size: A4; margin: 1.5cm; }
                            .pdf-q-item { page-break-inside: avoid; }
                        </style>
                    </head>
                    <body>
                        ${fullDocumentHTML}
                        <script>
                            window.onload = function() {
                                window.print();
                            };
                        </script>
                    </body>
                    </html>
                `);
                printWin.document.close();
            } else {
                window.print();
            }
        });
    },

    openImageModal(src, caption) {
        let modal = document.getElementById('image-zoom-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'image-zoom-modal';
            modal.className = 'modal-overlay hidden';
            document.body.appendChild(modal);
        }
        modal.innerHTML = `
            <div class="modal-container card animate-zoom-in" style="max-width: 90vw; max-height: 90vh; padding: 1.5rem; display:flex; flex-direction:column; align-items:center; background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(255,255,255,0.2); z-index: 10000;">
                <button id="btn-close-img-modal" class="btn-close">&times;</button>
                <h4 style="margin-bottom:1rem; color:white; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;">
                    <i data-lucide="image" style="color:var(--slide-accent)"></i>
                    <span>${caption}</span>
                </h4>
                <div style="flex:1; width:100%; display:flex; justify-content:center; align-items:center; overflow:hidden;">
                    <img src="${src}" alt="${caption}" style="max-width:100%; max-height:75vh; object-fit:contain; border-radius:8px; box-shadow: 0 10px 30px rgba(0,0,0,0.6);" />
                </div>
            </div>
        `;
        lucide.createIcons();
        modal.classList.remove('hidden');
        modal.style.display = 'flex';

        document.getElementById('btn-close-img-modal').addEventListener('click', () => {
            AudioSynth.playClick();
            modal.classList.add('hidden');
            modal.style.display = 'none';
        });
    }
};

// ============================================================
// FULLSCREEN CONTROLLER
// ============================================================
const FullscreenController = {
    isFullscreen: false,

    init() {
        // Bind all three fullscreen buttons
        const btnCover   = document.getElementById('btn-fullscreen-cover');
        const btnHeader  = document.getElementById('btn-fullscreen-header');
        const btnFloat   = document.getElementById('btn-fullscreen-float');

        if (btnCover)  btnCover.addEventListener('click',  () => this.toggle());
        if (btnHeader) btnHeader.addEventListener('click', () => this.toggle());
        if (btnFloat)  btnFloat.addEventListener('click',  () => this.toggle());

        // Listen for external fullscreen changes (e.g. user presses Esc)
        document.addEventListener('fullscreenchange',       () => this.onStateChange());
        document.addEventListener('webkitfullscreenchange', () => this.onStateChange());
        document.addEventListener('mozfullscreenchange',    () => this.onStateChange());
        document.addEventListener('msfullscreenchange',     () => this.onStateChange());
    },

    toggle() {
        if (!this.isFullscreen) {
            this.enter();
        } else {
            this.exit();
        }
    },

    enter() {
        const el = document.documentElement;
        if (el.requestFullscreen)            el.requestFullscreen();
        else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
        else if (el.mozRequestFullScreen)    el.mozRequestFullScreen();
        else if (el.msRequestFullscreen)     el.msRequestFullscreen();
    },

    exit() {
        if (document.exitFullscreen)            document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.mozCancelFullScreen)  document.mozCancelFullScreen();
        else if (document.msExitFullscreen)     document.msExitFullscreen();
    },

    onStateChange() {
        this.isFullscreen = !!(
            document.fullscreenElement       ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement    ||
            document.msFullscreenElement
        );
        this.updateIcons();
    },

    updateIcons() {
        // Switch icon: maximize <-> minimize
        const iconName = this.isFullscreen ? 'minimize' : 'maximize';

        const iconIds = ['fs-cover-icon', 'fs-header-icon', 'fs-float-icon'];
        iconIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.setAttribute('data-lucide', iconName);
            }
        });

        // Re-render Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Update tooltip labels
        const label = this.isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh';
        ['btn-fullscreen-cover', 'btn-fullscreen-header', 'btn-fullscreen-float'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.title = label;
                // Update inner text span for cover button
                const span = btn.querySelector('span');
                if (span) span.textContent = this.isFullscreen ? 'Keluar Penuh' : 'Layar Penuh';
            }
        });
    }
};

// Start the app once DOM content is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    App.init();
    FullscreenController.init();
});
