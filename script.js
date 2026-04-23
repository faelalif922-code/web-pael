// script.js
// Inisialisasi Tailwind + Interaktivitas
function initializeTailwind() {
    return {
        config(userConfig = {}) {
            return {
                content: [],
                theme: {
                    extend: {
                        colors: {
                            cyan: {
                                300: '#67e8f9',
                                400: '#22d3ee',
                                500: '#06b67f'
                            }
                        }
                    }
                },
                plugins: [],
                ...userConfig,
            }
        },
        theme: {
            extend: {},
        },
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Jalankan Tailwind
    const config = initializeTailwind().config()
    // Tailwind CDN otomatis membaca config ini
    
    // Portfolio Data (bisa diganti gambar dengan foto asli kamu)
    const portfolioItems = [
        {
            id: 1,
            title: "Lab Routing RIP",
            description: "Implementasi dynamic routing RIP v2 menggunakan Cisco Packet Tracer. 5 router terhubung sempurna dengan full connectivity.",
            image: "https://picsum.photos/id/201/800/600",
            link: "#"
        },
        {
            id: 2,
            title: "NAT Static + Port Forwarding",
            description: "Konfigurasi NAT Static dan Port Forwarding pada Mikrotik RouterOS agar server lokal bisa diakses dari internet.",
            image: "https://picsum.photos/id/237/800/600",
            link: "#"
        },
        {
            id: 3,
            title: "Website Data Diri (Portofolio Ini)",
            description: "Website personal branding yang elegan ini dibuat menggunakan HTML, Tailwind CSS, dan JavaScript murni.",
            image: "https://picsum.photos/id/1005/800/600",
            link: "#"
        },
        {
            id: 4,
            title: "Topologi Jaringan Sekolah",
            description: "Desain topologi jaringan lengkap SMK Negeri 1 Bandung dengan VLAN, DHCP Server, dan Wireless Access Point.",
            image: "https://picsum.photos/id/1015/800/600",
            link: "#"
        },
        {
            id: 5,
            title: "Konfigurasi Mikrotik Hotspot",
            description: "Pembuatan user hotspot dengan bandwidth limit dan captive portal cantik untuk praktikum jaringan.",
            image: "https://picsum.photos/id/1009/800/600",
            link: "#"
        }
    ]

    // Render Portfolio Cards
    const grid = document.getElementById('portfolio-grid')
    portfolioItems.forEach(item => {
        const cardHTML = `
            <div onclick="showPortfolioModal(${item.id})" class="portfolio-card cursor-pointer bg-slate-800 border border-white/10 hover:border-cyan-400 rounded-3xl overflow-hidden">
                <div class="relative">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-56 object-cover">
                    <div class="absolute top-4 right-4 bg-black/70 text-cyan-300 text-xs px-3 py-1 rounded-3xl flex items-center gap-1">
                        <i class="fas fa-eye"></i> Detail
                    </div>
                </div>
                <div class="p-6">
                    <h4 class="font-semibold text-2xl mb-2">${item.title}</h4>
                    <p class="text-slate-400 text-sm line-clamp-3">${item.description}</p>
                </div>
            </div>
        `
        grid.innerHTML += cardHTML
    })

    // Contact Form Handler
    const form = document.getElementById('contact-form')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        
        const nama = document.getElementById('nama').value
        const email = document.getElementById('email').value
        const pesan = document.getElementById('pesan').value
        
        if (nama && email && pesan) {
            // Simulasi pengiriman
            const btn = form.querySelector('button')
            const originalText = btn.textContent
            btn.textContent = 'Mengirim...'
            btn.disabled = true
            
            setTimeout(() => {
                alert(`🎉 Terima kasih, ${nama}!\n\nPesan kamu telah dikirim ke saya.\n\nSaya akan balas secepatnya via email atau WhatsApp.`)
                form.reset()
                btn.textContent = originalText
                btn.disabled = false
            }, 1500)
        } else {
            alert('Mohon isi semua field ya!')
        }
    })

    console.log('%c✅ Portofolio Rafael Alif sudah siap! Indah, modern, dan penuh pemandangan 🌄', 'color:#67e8f9; font-family:monospace; font-size:13px')
})

// Fungsi Modal Portofolio
let currentPortfolio = null

function showPortfolioModal(id) {
    // Data portfolio (sama dengan array di atas)
    const items = {
        1: {
            title: "Lab Routing RIP",
            description: "Implementasi dynamic routing RIP v2 menggunakan Cisco Packet Tracer. 5 router terhubung sempurna dengan full connectivity. Termasuk tabel routing yang benar dan ping test berhasil 100%.",
            image: "https://picsum.photos/id/201/1200/800"
        },
        2: {
            title: "NAT Static + Port Forwarding",
            description: "Konfigurasi NAT Static dan Port Forwarding pada Mikrotik RouterOS agar server lokal bisa diakses dari internet. Proyek ini sangat berguna untuk akses remote server.",
            image: "https://picsum.photos/id/237/1200/800"
        },
        3: {
            title: "Website Data Diri (Portofolio Ini)",
            description: "Website personal branding yang elegan ini dibuat menggunakan HTML, Tailwind CSS via CDN, dan JavaScript murni. Responsif, animasi halus, dan desain modern.",
            image: "https://picsum.photos/id/1005/1200/800"
        },
        4: {
            title: "Topologi Jaringan Sekolah",
            description: "Desain topologi jaringan lengkap SMK Negeri 1 Bandung dengan VLAN, DHCP Server, dan Wireless Access Point. Termasuk dokumentasi lengkap dan simulasi di Packet Tracer.",
            image: "https://picsum.photos/id/1015/1200/800"
        },
        5: {
            title: "Konfigurasi Mikrotik Hotspot",
            description: "Pembuatan user hotspot dengan bandwidth limit dan captive portal cantik untuk praktikum jaringan. User login dengan voucher system.",
            image: "https://picsum.photos/id/1009/1200/800"
        }
    }

    const item = items[id]
    if (!item) return

    document.getElementById('modal-image').src = item.image
    document.getElementById('modal-title').textContent = item.title
    document.getElementById('modal-description').innerHTML = `<p>${item.description}</p>`
    
    // Tampilkan modal
    const modal = document.getElementById('portfolio-modal')
    modal.classList.remove('hidden')
    modal.classList.add('flex')
}

// Tutup modal
function closeModal() {
    const modal = document.getElementById('portfolio-modal')
    modal.classList.add('hidden')
    modal.classList.remove('flex')
}

// Smooth scroll
function smoothScrollTo(section) {
    const el = document.getElementById(section)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu')
    const icon = document.getElementById('mobile-menu-btn').querySelector('i')
    
    menu.classList.toggle('hidden')
    
    if (!menu.classList.contains('hidden')) {
        icon.classList.replace('fa-bars', 'fa-times')
    } else {
        icon.classList.replace('fa-times', 'fa-bars')
    }
}