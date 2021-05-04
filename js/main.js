$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    // function navbarFixed() {
    //     if ($('.header_area').length) {
    //         $(window).scroll(function () {
    //             let scroll = $(window).scrollTop();
    //             if (scroll >= nav_offset_top) {
    //                 $('.header_area .main-menu').addClass('navbar_fixed');
    //             } else {
    //                 $('.header_area .main-menu').removeClass('navbar_fixed');
    //             }
    //         })
    //     }
    // }

    // navbarFixed();

});

document.querySelector("#subscribe").addEventListener("submit",(e)=>{
    e.preventDefault()
    var x = document.getElementById("txtnum").value;
    var y = document.getElementById("txtemail").value;
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1000000000 || x > 9999999999) {
    alert("Number not valid");
  } else if (y.match(mailformat)){  
    alert("Please enter a valid e-mail address");  
    }   
  else {
    alert("mailed");
  }
    
})