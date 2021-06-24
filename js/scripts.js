$(document).ready(function(){

    $(window).scroll(function(){
        //for navbar on scroll//
        if(this.scrollY >20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        };

        //for right side scroll button ///
        if(this.scrollY > 500){
           $('.scroll-up-btn').addClass('show')
        
        }else{
            $('.scroll-up-btn').removeClass('show')
        };
    });

    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop:0});

        return false;
        
    });
    

    
    ///////two buttons at home section//////////
    $('.btn-home').mouseenter(function(){
        $('.arrow').css({'color':'white','transform': 'rotate(90deg)'})
    })
    $('.btn-home').mouseleave(function(){
        $('.arrow').css({'color':'white','transform': 'rotate(0deg)'})
    })
    

    
        
    //at contact section. a pop up message once message is sent////
    $('.contact-submit-btn').click(function(e){
        e.preventDefault();

        let mail = $('.email').val();
        let user = $('.user').val();

        $('input').val("");
        if(mail.match(/^[a-zA-Z0-9.]{2,50}@[a-z]{5}.[a-z]{2,5}$/) && user != 0 ){
            alert('Message successfully sent')
        }else{
            mail = '';
            user = '';
        }
    });


    
    // Array.from(buttons).forEach((item)=>{
    //     item.addEventListener('mouseenter',function(){
    //         let arrows = document.querySelectorAll('.arrow');
    //         Array.from(arrows).forEach((items)=>{
    //             let cc = $(items).parent()
    //             console.log(cc)
    //         })
    //     })
    // })

        
    ////////for the type string on my home page//////////
    var typed = new Typed('.typing',{
        strings: [' Web Developer', 'Copywriter', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed('.typing-2',{
        strings: ['Developer', 'Designer', 'Writer', 'Blogger', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    // alert("gogo")



    


})