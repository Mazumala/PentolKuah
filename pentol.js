// membuat navbar menghilang saat diklik...
document.querySelector('#target').onclick = () => {
    navbar.style.zIndex = '99999'
    navbar.classList.toggle('navbar-active')

};

let navbar = document.querySelector('#navbar');
window.addEventListener('click' , function(e) {
    if (e.target === navbar) {
       navbar.classList.add('navbar-active')
    }
})


// membuat animasi saat navbar diklik....
let link = document.querySelectorAll('.navbar a');

function removeAcctive() {
    link.forEach( e => e.classList.remove('nav-active'))
}

 link.forEach( e => {
    e.addEventListener('click' , function(e) {
        removeAcctive()
        e.stopPropagation()
        this.classList.add('nav-active')
    })
 })

 document.addEventListener('click' , function() {
    removeAcctive()
 })


//  membuat animasi zoom untuk background...
    window.addEventListener('scroll' , function () {
    let scroll = this.scrollY/10
    this.document.querySelector('.home').style.backgroundSize = 100 + scroll + '%';

    // membuat animasi untuk section...
    let section = document.querySelector('.about');
    let section1 = document.querySelector('.contact');
    let section2 = document.querySelector('.menu');
    if (scroll >= 40 && scroll <= 150 ) {
        section.style.opacity = '1'
        section.style.transform = 'translateY(0)'

    }else {
        section.style.opacity = '0'
        section.style.transform = 'translateY(-8rem)'
    }

    if (scroll >= 200 && scroll <= 350 ) {
        section1.style.opacity = '1'
        section1.style.transform = 'translateY(0)'

    }else {
        section1.style.opacity = '0'
        section1.style.transform = 'translateY(-8rem)'
    }

    if (scroll >= 100 && scroll <= 230 ) {
        section2.style.opacity = '1'
        section2.style.transform = 'translateY(0)'

    }else {
        section2.style.opacity = '0'
        section2.style.transform = 'translateY(-8rem)'
    }
})

// mengambil data dari json...
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(this.readyState === 4) {
        if (this.status === 200) {
            let data = JSON.parse(this.response).Menu;
            let place = document.querySelector('.body-menu')
            let image = document.querySelector('.foto')
            let nModal = document.querySelector('.m-info h1');
            let dModal = document.querySelector('.m-info p');
            let hModal = document.querySelector('.m-info  a');
            let fModal = document.querySelector('.m-img')
            image.style.display = 'none'

            // modal...
            let modalconta = document.querySelector('.modal-container')
            let modal = document.querySelector('.modal');
            modal.style.display = 'none'

            data.forEach( item => {
                let newImage = image.cloneNode(true);
                newImage.style.display = ' block'
                newImage.style.backgroundImage = `url(menu/${item.Poster})`
        

                newImage.addEventListener('click', function(){
                    nModal.textContent = item.nama;
                    dModal.textContent = item.Deskripsi;
                    hModal.textContent = `Rp.${item.Harga} | pcs`;
                    modal.style.display = 'flex'
                    fModal.style.backgroundImage = `url(menu/${item.Poster})`
                })

                window.addEventListener('click' , function (e) {
                    if (e.target === modal) {
                        modal.style.display = 'none'
                        
                    }
                })


            let fragment = document.createDocumentFragment();
            fragment.appendChild(newImage);

            place.appendChild(fragment);

            })       

        }else {
            console.warn(`Waduh Ada Yang Salah Bang..😢`)
        }
    }
}

xhr.open('GET' , `data.json`);
xhr.send();


// saat form submit...
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form dari submit default

    const name = document.getElementById('name').value;
    const nomor = document.getElementById('nomor').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Format pesan yang akan dikirim
    const whatsappMessage = ` Hallo Saya \nNama: ${name}\nNomor: ${nomor}\nEmail: ${email}\nPesan: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Nomor WhatsApp tujuan (ubah sesuai kebutuhan)
    const phoneNumber = '6281330382738'; // Gunakan format internasional tanpa tanda +

    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect ke URL WhatsApp
    window.open(whatsappURL, '_blank');
});




