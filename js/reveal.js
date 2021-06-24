//////REVEAL UP/////
const su = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});
    su.reveal('.text1',{})
    su.reveal('.text1',{delay:300})
    su.reveal('.text2',{delay:400})
    su.reveal('.about-img',{delay:600})
    su.reveal('.serve-serve1',{delay:600})
    su.reveal('.serve-serve3',{delay:800})
    su.reveal('.count-box',{delay:800})

//////REVEAL FOR BOTTOM/////
const sd = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
})    
    sd.reveal('.btn',{delay:500})
    sd.reveal('.serve-serve2',{delay:700});
    sd.reveal('.map',{delay:800})

    
///////REVEAL FOR LEFT//////////
const sl = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 3000,
    reset: true,
});
    sl.reveal('.section-title',{})
    sl.reveal('.section-title',{delay:400})


//////REVEAL FOR RIGHT/////
const sr = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
    sr.reveal('.freelancer-available',{})
    sr.reveal('.freelancer-available',{delay:500});
    sr.reveal('.my-works-item',{delay:800})
    sr.reveal('.contact-form',{delay:700})
    sr.reveal('.facts',{delay:800})
    sr.reveal('.about-text',{interval:800})

