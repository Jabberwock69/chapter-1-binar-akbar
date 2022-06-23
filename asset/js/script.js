      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoHeight: true,
        nav: true,
        center:true,
        dots:false,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 2,
          },
        },
      });

