// =============================================
// SCRIPT.JS - Rafael Alif Portofolio
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Render Portofolio
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
                    alert(`🎉 Terima kasih, ${nama}!\nPesan kamu telah dikirim.`);
                    form.reset();
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 1500);
            } else {
                alert('Mohon isi semua field ya!');
            }
        });
    }

    console.log('%c✅ Website Rafael Alif sudah siap!', 'color: #67e8f9; font-size: 14px');
});

// ================== DATA PORTOFOLIO (5 ITEM) ==================
const portfolioItems = [
    {
        id: 1,
        title: "Blogger LKPD Digital",
        description: "Implementasi pembuatan dan pengelolaan Lembar Kerja Peserta Didik (LKPD) berbasis digital.",
        image: "images/bloger.jpg"
    },
    {
        id: 2,
        title: "PKL pada Mapel PKK",
        description: "Melakukan PKL di Hiway Mediatech, melakukan proses crimping straight-through, dan berkontribusi dalam proyek pemasangan CCTV.",
        image: "images/pkl.jpg"
    },
    {
        id: 3,
        title: "Website Portofolio Pribadi",
        description: "Membuat website personal branding responsif menggunakan HTML, Tailwind & JavaScript.",
        image: "images/website-portofolio.jpg"
    },
    {
        id: 4,
        title: "Topologi Jaringan Sekolah",
        description: "Desain topologi jaringan lengkap SMK Negeri 1 Bandung dengan VLAN dan DHCP.",
        image: "images/topologi-sekolah.jpg"
    },
    {
        id: 5,
        title: "Konfigurasi Mikrotik Hotspot",
        description: "Pembuatan hotspot dengan bandwidth limit dan captive portal.",
        image: "images/mikrotik-hotspot.jpg"
    }
];

// Render Portfolio
function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    let html = '';
    portfolioItems.forEach(item => {
        html += `
            <div onclick="showPortfolioModal(${item.id})" class="portfolio-card cursor-pointer bg-slate-800 border border-white/10 hover:border-cyan-400 rounded-3xl overflow-hidden transition-all hover:-translate-y-2">
                <img src="${item.image}" alt="${item.title}" class="w-full h-64 md:h-80 object-cover">
                <div class="p-7">
                    <h3 class="text-2xl font-bold mb-3">${item.title}</h3>
                    <p class="text-slate-300 text-sm leading-relaxed line-clamp-3">${item.description}</p>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

// Modal Portofolio
function showPortfolioModal(id) {
    const item = portfolioItems.find(i => i.id === id);
    if (!item) return;

    const modal = document.createElement('div');
    modal.id = 'portfolio-modal';
    modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4';
    modal.innerHTML = `
        <div class="bg-slate-900 max-w-2xl w-full rounded-3xl overflow-hidden" onclick="event.stopImmediatePropagation()">
            <img src="${item.image}" alt="${item.title}" class="w-full max-h-[450px] object-cover">
            <div class="p-8">
                <h3 class="text-3xl font-bold mb-4">${item.title}</h3>
                <p class="text-slate-300">${item.description}</p>
                <button onclick="closeModal()" class="mt-8 w-full py-4 bg-white/10 hover:bg-white/20 rounded-3xl font-medium">Tutup</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.getElementById('portfolio-modal');
    if (modal) modal.remove();
}

// Smooth Scroll
function smoothScrollTo(section) {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-btn').querySelector('i');
    if (menu && icon) {
        menu.classList.toggle('hidden');
        if (!menu.classList.contains('hidden')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }
}