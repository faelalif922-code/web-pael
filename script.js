// =============================================
// SCRIPT.JS - Rafael Alif Portofolio
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    
    renderPortfolio();

    // Contact Form
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const pesan = document.getElementById('pesan').value;
            
            if (nama && email && pesan) {
                const btn = form.querySelector('button');
                const originalText = btn.textContent;
                btn.textContent = 'Mengirim...';
                btn.disabled = true;
                
                setTimeout(() => {
                    alert(`🎉 Terima kasih, ${nama}!\n\nPesan kamu telah dikirim ke saya.`);
                    form.reset();
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 1500);
            } else {
                alert('Mohon isi semua field ya!');
            }
        });
    }

    console.log('%c✅ Portofolio Rafael Alif dengan 5 Project sudah siap!', 'color: #67e8f9; font-size: 14px');
});

// ================== DATA PORTOFOLIO (5 ITEM) ==================
const portfolioItems = [
    {
        id: 1,
        title: "Blogger LKPD Digital",
        description: "Implementasi pembuatan dan pengelolaan Lembar Kerja Peserta Didik (LKPD) berbasis digital pada bidang Teknik Jaringan Komputer dan Telekomunikasi.",
        image: "images/bloger.jpg"   // ganti dengan foto kamu nanti
        link: "https://rafaelaliframadhanxtjkt2.blogspot.com"
    },

    {
        id: 2,
        title: "NAT Static + Port Forwarding",
        description: "Konfigurasi NAT Static dan Port Forwarding pada Mikrotik RouterOS agar server lokal bisa diakses dari internet.",
        image: "images/nat-static.jpg"   // ganti dengan foto kamu nanti
    },

    {
        id: 3,
        title: "Website Portofolio Pribadi",
        description: "Membuat website personal branding responsif ini menggunakan HTML, Tailwind CSS, dan JavaScript.",
        image: "images/website-portofolio.jpg"
    },

    {
        id: 4,
        title: "Topologi Jaringan Sekolah",
        description: "Desain dan simulasi topologi jaringan lengkap SMK Negeri 1 Bandung dengan VLAN, DHCP, dan Wireless.",
        image: "images/topologi-sekolah.jpg"
    },

    {
        id: 5,
        title: "Konfigurasi Mikrotik Hotspot",
        description: "Pembuatan user hotspot dengan bandwidth limit dan captive portal untuk praktikum jaringan.",
        image: "images/mikrotik-hotspot.jpg"
    }
];

// Render Portfolio Cards
function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    let html = '';
    portfolioItems.forEach(item => {
        html += `
            <div class="portfolio-card bg-slate-800 border border-white/10 hover:border-cyan-400 rounded-3xl overflow-hidden transition-all hover:-translate-y-2">
                
                <img src="${item.image}" 
                     alt="${item.title}"
                     class="w-full h-64 md:h-80 object-cover">

                <div class="p-7">
                    <h3 class="text-2xl font-bold mb-3">${item.title}</h3>
                    <p class="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-6">
                        ${item.description}
                    </p>
                    
                    <a href="${item.link}" target="_blank" 
                       class="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-2xl transition-all">
                        <i class="fas fa-external-link-alt"></i>
                        Lihat Project
                    </a>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}