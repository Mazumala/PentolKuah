// inisialisasi menu...
let menu = document.querySelector('.body-menu');
let fotoMenu = document.querySelector('.foto');
fotoMenu.style.display = 'none'

// Membuat data Menu dengan Class...
class Menu {
    constructor(nama,kategori,harga,poster) {
        // inisialisasi atribut...
        this.nama = nama;
        this.kategori = kategori;
        this.harga = harga;

        this.deskripsi = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, enim optio tempora modi quas voluptatem laudantium praesentium eum dolore vitae corporis accusantium reiciendis, alias amet nihil reprehenderit culpa. Ad, alias.`;

        this.poster = poster;
    };
};

// inisialisasi data menu untuk class...
let jamur = new Menu('Pentol Jamur','Pentol',3000,'5.jpg');
let selimut = new Menu('Pentol Selimut','Pentol',3000,'1.jpg');
let jagungKeju = new Menu('Pentol Jagung Keju','Pentol',3000,'7.jpg');
let mercon = new Menu('Pentol Mercon','Pentol',3000,'8.jpg');
let telurPuyuh = new Menu('Pentol Telur Puyuh','Pentol',3000,'6.jpg');
let tahuGoreng = new Menu('Tahu Goreng','Tahu',1500,'4.jpg');
let tahuPutih = new Menu('Tahu Putih','Tahu',1500,'9.jpg');
let tahuWalik = new Menu('Tahu Walik','Tahu',2000,'10.jpg');
let kecil = new Menu('Pentol kecil','Pentol',500,'2.jpg');
let kol = new Menu('Sayur Kol','Sayur',1500,'3.jpg');
let terong = new Menu('Terong Goreng','Sayur',2000,'11.jpg');
let baksoGoreng = new Menu('Bakso Goreng','Gorengan',2000,'13.jpg');
let pangsit = new Menu('Kerupuk Pangsit','Gorengan',1500,'12.jpg');

// masukkan data menu ke array...
let arrayMenu = [jamur,selimut,jagungKeju,mercon,telurPuyuh,tahuGoreng,tahuPutih,tahuWalik,kecil,kol,terong,baksoGoreng,pangsit];

// melakukan loop dan memasukan data class...
arrayMenu.forEach((item) => {
    let newFoto = fotoMenu.cloneNode(true);
    newFoto.style.display = 'block'
    newFoto.style.backgroundImage = `url(menu/${item.poster})`;

// inisialisasi bagian modal...
    let modal = document.querySelector('.modal');
    let img = document.querySelector('.m-img')
    let title = document.querySelector('.m-info h1');
    let harga = document.querySelector('.m-info a');
    let deskrip = document.querySelector('.m-info p');

// membuat agar modal bisa muncul saat klik bagian menu...
    newFoto.addEventListener('click' ,function() {
        modal.style.display = 'flex';
        img.style.backgroundImage = `url(menu/${item.poster})`
        title.textContent = item.nama;
        harga.textContent =`Rp.${item.harga} / Pcs`;
        deskrip.textContent = item.deskripsi;
    })

    window.addEventListener('click' , function(e) {
        if( e.target === modal) {
            modal.style.display = 'none';
        }
    })
    
    let place = document.createDocumentFragment();
    place.appendChild(newFoto)
    menu.appendChild(place)
})

// membuat animasi saat link dari navbar diklik...
let link = document.querySelectorAll('.navbar a');
link.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation()
        removeActive1()
        this.classList.add('active-1');
    });
});


// fungsi agar menghapus semua class active-1...
function removeActive1() {
    link.forEach( item => item.classList.remove('active-1'));
};

// menghapus kelas active-1 jika mengklik diluar link dari navbar...
window.addEventListener('click' , function() {
    removeActive1();
});

// saat diklik maka navbar akan hilang...
let navbar2 = document.querySelector('.navbar-2')
document.querySelector('#target2').onclick = (e) => {
    navbar2.style.display = 'none';
    document.querySelector('#target').style.display = 'block';
}

// saat garis tiga diklik maka akan meunculkan navbar....
document.querySelector('#target').onclick = (e) => {
    navbar2.style.display = 'flex';
    document.querySelector('#target2').style.display = 'block';
}

// saat klik diluar navbar....
window.addEventListener('click' , function(e) {
    if(e.target === navbar2) {
        navbar2.style.display = 'none';
    }
})

// membuat animasi untuk tiap section saat window discroll...
let sAbout = document.querySelector('.about');
let sMenu = document.querySelector('.menu');
let sContact = document.querySelector('.contact');
window.addEventListener('scroll' , function (){
    let SY = window.scrollY/10

    console.log(SY)

    if (SY  >= 50  && SY <= 165) {
        sAbout.style.opacity = '1';
    }else {
        sAbout.style.opacity = '0'}

    if (SY  >= 117  && SY <= 300) {
        sMenu.style.opacity = '1'
    }else {
        sMenu.style.opacity = '0'}

    if (SY  >= 280  && SY <= 400) {
        sContact.style.opacity = '1'
    }else {
        sContact.style.opacity = '0'}
})

// mengatur saat form diisi akan otomatis mengirim ke WA...
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default

    let name = document.getElementById('name').value;
    let nomor = document.getElementById('nomor').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Format pesan untuk WhatsApp
    let whatsappMessage = `Hallo saya : \nNama: ${name} \nNomor: ${nomor} \nEmail: ${email} \nPesan: ${message}`;

    // Ganti 'your-whatsapp-number' dengan nomor WhatsApp tujuan
    let whatsappURL = `https://wa.me/6281330382738?text=${encodeURIComponent(whatsappMessage)}`;

    // Arahkan pengguna ke WhatsApp
    window.open(whatsappURL, '_blank');
});
