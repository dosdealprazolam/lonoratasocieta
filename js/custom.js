(function ($) {
"use strict";

  // PRE LOADER
  $(window).load(function(){
    $('.preloader').fadeOut(1000);    
  });

  // MENU COLLAPSE
  $('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
  });

  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // SLIDER (OWL CAROUSEL)
  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items:1,
    loop:true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
  });

  // PARALLAX EFFECT
  $.stellar({
    horizontalScrolling: false,
  }); 

  // MAGNIFIC POPUP
  $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });  

})(jQuery);

/* =========================================
   FUNCIONES PERSONALIZADAS
   ========================================= */

// 1. Cambiador de Tema (Modo Oscuro / Claro)
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlTag = document.documentElement;

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            htmlTag.classList.toggle('night-mode');
            if (htmlTag.classList.contains('night-mode')) {
                themeIcon.className = 'fa fa-sun-o'; 
            } else {
                themeIcon.className = 'fa fa-moon-o'; 
            }
        });
    }

    // 2. Mostrar/Ocultar y Acción del Botón Volver Arriba
    const topBtn = document.getElementById('scrollToTopBtn');
    if (topBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                topBtn.classList.add('show');
            } else {
                topBtn.classList.remove('show');
            }
        });

        topBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Formulario de Cotización enviado a WhatsApp
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var name = document.getElementById('ws-name').value;
            var ruc = document.getElementById('ws-ruc').value || 'No especificado';
            var producto = document.getElementById('ws-producto').value;
            var telefono = document.getElementById('ws-telefono').value;
            var email = document.getElementById('ws-email').value;
            var message = document.getElementById('ws-message').value || 'Sin detalles adicionales';

            var phone = '51982212167';

            var text = '*NUEVA SOLICITUD DE COTIZACIÓN - LONORATA SOCIETÀ*' + '%0A%0A' +
                       '*Razón Social:* ' + encodeURIComponent(name) + '%0A' +
                       '*RUC:* ' + encodeURIComponent(ruc) + '%0A' +
                       '*Servicio:* ' + encodeURIComponent(producto) + '%0A' +
                       '*Teléfono:* ' + encodeURIComponent(telefono) + '%0A' +
                       '*Correo:* ' + encodeURIComponent(email) + '%0A' +
                       '*Detalles:* ' + encodeURIComponent(message);

            var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phone + '&text=' + text;
            window.open(whatsappUrl, '_blank');
        });
    }
});