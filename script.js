// Character data
const characterData = {
    yudhistira: {
        name: "Yudhistira",
        deskripsi: "Pandawa pertama ingkang dikenal sebijaksana lan adil. Minangka raja Astina, piyambakipun dados tuntunan babagan kepemimpinan ingkang luhur lan keadilan kangge sedaya rakyatipun.",
        kesatria: "Pandawa Lima",
        ayah: "Prabu Pandu",
        ibu: "Dewi Kunti",
        pasangan: "Dewi Dropadi",
        watak: "Jujur, sabar, bijaksana, adil",
        senjata: "Jamus Kalimasada",
        kendaraan: "Kuda Turangga",
        kematian: "Meninggal dunia setelah menyelesaikan tugasnya sebagai raja, naik ke surga bersama saudara-saudaranya",
        ajaran: "Kepemimpinan yang adil, kejujuran, dan kebijaksanaan dalam mengambil keputusan"
      
    },
    bima: {
        name: "Bima/Werkudara",
        deskripsi: "Pandawa kedua ingkang paling berani lan kuat. Dikenal sebab keberanianipun mbela kebenaran lan keteguhan pendirianipun nglawan kejahatan tanpa wedi.",
        kesatria: "Pandawa Lima",
        ayah: "Prabu Pandu",
        ibu: "Dewi Kunti",
        pasangan: "Dewi Arimbi",
        watak: "Berani, tegas, jujur, setia, protektif",
        senjata: "Gada Rujakpala",
        kendaraan: "Naga Kencana",
        kematian: "Meninggal dalam medan perang Bharatayuddha dengan cara yang ksatria",
        ajaran: "Keberanian membela kebenaran, keteguhan pendirian, dan perlindungan terhadap yang lemah"
    },
    arjuna: {
        name: "Arjuna",
        deskripsi: "Pandawa ketiga ingkang paling tampan lan ahli memanah. Dikenal sebab kecerdasanipun, ketekunanipun, lan kemampuanipun nggarap senjata panah.",
        kesatria: "Pandawa Lima",
        ayah: "Prabu Pandu",
        ibu: "Dewi Kunti",
        pasangan: "Dewi Srikandi, Dewi Subadra, Dewi Ulupi",
        watak: "Tampan, cerdas, bijaksana, ahli memanah",
        senjata: "Panah Ardhadali",
        kendaraan: "Kuda Ciptaning",
        kematian: "Meninggal di akhir zaman setelah menyelesaikan tugasnya sebagai ksatria",
        ajaran: "Kecerdasan, ketekunan, dan keseimbangan antara dunia dan akhirat"
    },
    nakula: {
        name: "Nakula",
        deskripsi: "Pandawa keempat ingkang pandai merawat kuda. Dikenal sebab keahlianipun ngurus jaran lan kesetiaanipun dhateng kulawarga Pandawa.",
        kesatria: "Pandawa Lima",
        ayah: "Prabu Pandu",
        ibu: "Dewi Madrim",
        pasangan: "Dewi Suyati",
        watak: "Pandai merawat kuda, ramah, setia",
        senjata: "Kapak Layang Sungsang",
        kendaraan: "Kuda Prawata",
        kematian: "Meninggal bersama saudara-saudaranya setelah Bharatayuddha",
        ajaran: "Kecintaan terhadap alam, kesetiaan, dan kepedulian terhadap sesama"
    },
    sadewa: {
        name: "Sadewa",
        deskripsi: "Pandawa kelima ingkang paling enom lan pandai merawat sapi. Dikenal sebab kesabaranipun lan kebijaksanaanipun sanajan taksih enom.",
        kesatria: "Pandawa Lima",
        ayah: "Prabu Pandu",
        ibu: "Dewi Madrim",
        pasangan: "Dewi Padmasari",
        watak: "Pandai merawat sapi, bijaksana, sabar",
        senjata: "Panah Cundamanik",
        kendaraan: "Sapi Lembu Andini",
        kematian: "Meninggal bersama saudara-saudaranya setelah Bharatayuddha",
        ajaran: "Kesabaran, kebijaksanaan, dan ketulusan hati"
    },
    kresna: {
        name: "Kresna",
        deskripsi: "Avatar Dewa Wisnu ingkang dados penasihat Pandawa. Dikenal sebab kebijaksanaanipun, cinta kasihipun, lan kemampuanipun mberi petunjuk kangge kebaikan.",
        kesatria: "Avatar Dewa Wisnu",
        ayah: "Basudewa",
        ibu: "Dewi Rohini",
        pasangan: "Dewi Rukmini, Dewi Jembawati, Dewi Satyabama, Dewi Kalindi",
        watak: "Bijaksana, cerdas, penyayang, adil",
        senjata: "Cakra Sudarsana",
        kendaraan: "Kuda Kesiwi",
        kematian: "Kembali ke surga setelah menyelesaikan tugasnya di dunia",
        ajaran: "Kebijaksanaan, keadilan, dan cinta kasih tanpa pamrih"
    },
    srikandi: {
        name: "Srikandi",
        deskripsi: "Permaisuri Arjuna ingkang berani lan pinter memanah. Dikenal sebab keberanianipun ndamel perempuan bisa setara kaliyan pria ing perang.",
        kesatria: "Puteri Prabu Drupada",
        ayah: "Prabu Drupada",
        ibu: "Dewi Gandawati",
        pasangan: "Arjuna",
        watak: "Berani, tegas, cantik, pandai memanah",
        senjata: "Panah Gandewa",
        kendaraan: "Kuda Cempaka",
        kematian: "Tewas dalam Bharatayuddha melawan Bisma",
        ajaran: "Keberanian wanita, keteguhan pendirian, dan kesetaraan gender"
    },
    hanoman: {
        name: "Hanoman",
        deskripsi: "Putera Bathara Guru ingkang setia dhateng Rama. Dikenal sebab kekuatan spiritualipun, kesetiaanipun tanpa pamrih, lan kemampuanipun mbantu nylametaken Sita.",
        kesatria: "Putera Bathara Guru",
        ayah: "Bathara Guru",
        ibu: "Dewi Anjani",
        pasangan: "Tidak ada (brahmacari)",
        watak: "Setia, kuat, bijaksana, pemberani",
        senjata: "Gada Gajah",
        kendaraan: "Terbang",
        kematian: "Abadi sebagai pahlawan setia",
        ajaran: "Kesetiaan tanpa pamrih, kekuatan spiritual, dan kebijaksanaan"
    },
    rahwana: {
        name: "Rahwana",
        deskripsi: "Raja Alengka ingkang kuat lan cerdas nanging rakus. Dikenal sebab kekuatanipun nanging ujung-ujungipun kalah amargi keangkuhan lan kejahatanipun.",
        kesatria: "Raja Alengka",
        ayah: "Wisrawa",
        ibu: "Dewi Sukesi",
        pasangan: "Dewi Mandudari",
        watak: "Cerdas, kuat, tampan, tapi sombong dan rakus",
        senjata: "Senjata Cakra",
        kendaraan: "Terbang Pesawat Puspaka",
        kematian: "Tewas di tangan Rama dalam perang",
        ajaran: "Pentingnya mengendalikan nafsu dan keangkuhan"
    }
};

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Variabel global untuk melacak status bahasa
let isAksaraJawa = false;
let currentPage = 'beranda';
let isMainContentVisible = false;

// Fungsi untuk toggle bahasa
function toggleBahasa() {
    // Dapatkan semua elemen yang memiliki class 'ganti-bahasa-teks'
    const kontainerBahasa = document.querySelectorAll('.ganti-bahasa-teks');
    
    // Toggle status
    isAksaraJawa = !isAksaraJawa;
    
    // Loop melalui setiap kontainer
    kontainerBahasa.forEach(function(kontainer) {
        // Dapatkan elemen bahasa Jawa dan Aksara Jawa dalam kontainer ini
        const elemenJawa = kontainer.querySelector('.bahasa-jawa');
        const elemenAksara = kontainer.querySelector('.aksara-jawa');
        
        if (elemenJawa && elemenAksara) {
            if (isAksaraJawa) {
                // Tampilkan Aksara Jawa, sembunyikan Bahasa Jawa
                elemenJawa.style.display = 'none';
                elemenAksara.style.display = 'block';
            } else {
                // Tampilkan Bahasa Jawa, sembunyikan Aksara Jawa
                elemenJawa.style.display = 'block';
                elemenAksara.style.display = 'none';
            }
        }
    });
    
    // Update button text untuk memberi feedback visual
    const toggleBtn = document.getElementById('languageToggle');
    if (isAksaraJawa) {
        toggleBtn.textContent = 'ꦗꦮ / Jawa';
        toggleBtn.classList.add('bg-yellow-600');
    } else {
        toggleBtn.textContent = 'Jawa / ꦗꦮ';
        toggleBtn.classList.remove('bg-yellow-600');
    }
}

// Fungsi untuk toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// Fungsi untuk menampilkan konten utama
function showMainContent() {
    const mainContent = document.getElementById('mainContent');
    const landingPage = document.getElementById('beranda');
    
    // Hide landing page
    landingPage.classList.remove('active');
    
    // Show main content
    mainContent.classList.add('show');
    isMainContentVisible = true;
    
    // Show Ramayana page as default
    showPage('ramayana');
    
    // Scroll to top instantly (remove smooth for immediate effect)
    window.scrollTo(0, 0);
}

// SPA Navigation & State Management
function showPage(pageId) {
    // Hide all page sections
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        currentPage = pageId;
        
        // Update URL hash without adding to history stack for internal calls
        if (location.hash !== `#${pageId}`) {
            history.pushState({page: pageId}, null, `#${pageId}`);
        }
    }

    // Update active state on navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('nav-active');
        if (link.dataset.page === pageId) {
            link.classList.add('nav-active');
        }
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

// Fungsi untuk membuat kartu tokoh secara dinamis
function createCharacterCards() {
    const grid = document.getElementById('characterGrid');
    if (!grid) return;

    // Clear existing cards to prevent duplicates
    grid.innerHTML = '';

    for (const charId in characterData) {
        const character = characterData[charId];
        // Gunakan foto dari data jika ada, atau placeholder default
        const photoUrl = character.foto || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
        const card = `
            <div class="character-card bg-white rounded-2xl shadow-xl overflow-hidden">
                <div class="image-zoom h-48">
                    <img src="${photoUrl}" alt="${character.name}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <div class="ganti-bahasa-teks">
                        <h3 class="bahasa-jawa text-2xl font-bold text-wayang-dark mb-2 heading-font">${character.name}</h3>
                        <h3 class="aksara-jawa text-2xl font-bold text-wayang-dark mb-2 heading-font" style="display:none;">Lorem ipsum</h3>
                    </div>
                    <div class="ganti-bahasa-teks">
                        <p class="bahasa-jawa text-gray-600 mb-4 text-sm">
                            ${character.deskripsi}
                        </p>
                        <p class="aksara-jawa text-gray-600 mb-4 text-sm" style="display:none;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    }
}

// Character Modal Functions - REMOVED (duplicate - using enhanced version instead)

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Force scroll to top on page load to fix white screen issue
    window.scrollTo(0, 0);

    // Add event listener to language toggle button
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleBahasa);
    }
    
    // Add event listener to mobile menu button
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                // Only scroll to top if not navigating to landing page from within main content
                if (currentPage !== 'beranda' || pageId !== 'beranda') {
                    window.scrollTo(0, 0);
                }
                showPage(pageId);
                // Set focus for accessibility
                const activeSection = document.getElementById(pageId);
                if (activeSection) {
                    const heading = activeSection.querySelector('h2, h1, h3, h4');
                    if (heading) {
                        heading.setAttribute('tabindex', '-1');
                        heading.focus();
                    }
                }
            }
        });
    });

    // Handle browser back/forward navigation
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.page) {
            showPage(event.state.page);
        } else {
            // Default to beranda if state is null (initial page)
            showPage('beranda');
        }
    });

    // Buat kartu tokoh saat halaman dimuat
    createCharacterCards();

    // Handle initial page load - ensure Beranda is shown first
    setTimeout(function() {
        handleInitialLoad();
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('#beranda img');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Debug function
function debugLog(message, data) {
    console.log(`[DEBUG] ${message}`, data);
}

// Check character data integrity
function validateCharacterData() {
    const requiredFields = ['name', 'kesatria', 'ayah', 'ibu', 'pasangan', 'watak', 'senjata', 'kendaraan', 'kematian', 'ajaran'];
    const characters = Object.keys(characterData);
    
    characters.forEach(character => {
        const char = characterData[character];
        const missingFields = requiredFields.filter(field => !char[field]);
        if (missingFields.length > 0) {
            debugLog(`Character "${character}" missing fields: ${missingFields.join(', ')}`);
        }
    });
}

// Validate character data on load
validateCharacterData();

// Enhanced language switching with debug info
function toggleBahasa() {
    debugLog('Language toggle started', { isAksaraJawa: 'false', isMainContentVisible: 'false' });
    
    // Dapatkan semua elemen yang memiliki class 'ganti-bahasa-teks'
    const kontainerBahasa = document.querySelectorAll('.ganti-bahasa-teks');
    
    // Toggle status
    isAksaraJawa = !isAksaraJawa;
    
    debugLog('Language toggled to:', isAksaraJawa ? 'Aksara Jawa' : 'Bahasa Jawa');
    
    // Loop melalui setiap kontainer
    kontainerBahasa.forEach(function(kontainer) {
        const elemenJawa = kontainer.querySelector('.bahasa-jawa');
        const elemenAksara = kontainer.querySelector('.aksara-jawa');
        
        if (elemenJawa && elemenAksara) {
            if (isAksaraJawa) {
                // Tampilkan Aksara Jawa, sembunyikan Bahasa Jawa
                elemenJawa.style.display = 'none';
                elemenAksara.style.display = 'block';
            } else {
                // Tampilkan Bahasa Jawa, sembunyikan Aksara Jawa
                elemenJawa.style.display = 'block';
                elemenAksara.style.display = 'none';
            }
        }
    });
    
    // Update button text untuk memberi feedback visual
    const toggleBtn = document.getElementById('languageToggle');
    if (isAksaraJawa) {
        toggleBtn.textContent = 'ꦗꦮ / Jawa';
        toggleBtn.classList.add('bg-yellow-600');
    } else {
        toggleBtn.textContent = 'Jawa / ꦗꦮ';
        toggleBtn.classList.remove('bg-yellow-600');
    }
    
    debugLog('Button text updated to:', toggleBtn.textContent);
}

// Modal functions removed - Detail button removed from character cards

// Enhanced page navigation with better state management
function showPage(pageId) {
    debugLog('Navigating to page:', pageId);
    
    // If main content is not visible, show it first
    if (!isMainContentVisible) {
        showMainContent();
        return;
    }
    
    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        currentPage = pageId;
        
        // Update URL hash without adding to history stack for internal calls
        if (location.hash !== `#${pageId}`) {
            history.pushState({page: pageId}, null, `#${pageId}`);
        }
        
        // Update active nav state
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('nav-active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('nav-active');
            }
        });
    }
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
    
    debugLog('Navigation: Changed to page:', pageId, 'Current state:', { isMainContentVisible, currentPage });
}

// Handle browser back/forward navigation
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        showPage(event.state.page);
    } else {
        // Default to beranda if state is null (initial page)
        showPage('beranda');
    }
});

// Handle initial page load based on URL hash
function handleInitialLoad() {
    const hash = window.location.hash.substring(1);
    const validPages = ['beranda', 'ramayana', 'mahabharata', 'filosofi', 'tokoh'];
    
    if (hash && validPages.includes(hash)) {
        window.scrollTo(0, 0);
        showPage(hash);
    } else {
        showPage('beranda');
    }
}

/*************  ✨ Windsurf Command 🌟  *************/
// Validate character data on load

// Improved error handling for character modal
function safeSetElement(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = content;
        debugLog(`Set ${elementId} to:`, content);
    } else {
        debugLog(`Element not found: ${elementId}`);
    }
}

// Debug character data integrity
function validateCharacterData() {
    const requiredFields = ['name', 'kesatria', 'ayah', 'ibu', 'pasangan', 'watak', 'senjata', 'kendaraan', 'kematian', 'ajaran'];
    const characters = Object.keys(characterData);
    
    characters.forEach(character => {
        const char = characterData[character];
        const missingFields = requiredFields.filter(field => !char[field]);
        if (missingFields.length > 0) {
            console.error(`Character "${character}" missing fields: ${missingFields.join(', ')}`);
        }
    });
}

// Validate character data on load
validateCharacterData();
