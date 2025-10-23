// Data kategori masalah
const categories = [
    { name: 'Kesehatan', link: '/kategori/kesehatan' },
    { name: 'Keuangan', link: '/kategori/keuangan' },
    { name: 'Karier', link: '/kategori/karier' },
    { name: 'Keluarga', link: '/kategori/keluarga' },
    { name: 'Hubungan', link: '/kategori/hubungan' }
];

// Fungsi untuk memuat kategori
function loadCategories() {
    const categoryList = document.getElementById('category-list');
    categories.forEach(category => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${category.link}">${category.name}</a>`;
        categoryList.appendChild(li);
    });
}

// Fungsi pencarian (sementara)
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`Mencari solusi untuk: ${query}`);
    } else {
        alert('Masukkan kata kunci pencarian.');
    }
});

// Muat kategori saat halaman dimuat
window.onload = loadCategories;
