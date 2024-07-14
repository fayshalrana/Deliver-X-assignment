document.addEventListener("DOMContentLoaded", () => {
  const pageMenu = document.querySelector(".pages");
  const pageSubMenus = document.querySelector(".sub_menu_warper");
  const mobilePageMenu = document.querySelector(".mobilePagesMenu");
  const mobilePageBox = document.querySelector(".mobile_menu_page");
  const arrow = document.querySelector(".mobilePagesMenu .arrow");

  if (pageMenu && pageSubMenus) {
    let isHoveringMenu = false;
    let isHoveringSubMenu = false;

    pageMenu.addEventListener("mouseenter", () => {
      isHoveringMenu = true;
      pageSubMenus.classList.add("show_sub_menu");
    });

    pageMenu.addEventListener("mouseleave", () => {
      isHoveringMenu = false;
      setTimeout(() => {
        if (!isHoveringMenu && !isHoveringSubMenu) {
          pageSubMenus.classList.remove("show_sub_menu");
        }
      }, 10); 
    });

    pageSubMenus.addEventListener("mouseenter", () => {
      isHoveringSubMenu = true;
      pageSubMenus.classList.add("show_sub_menu");
    });

    pageSubMenus.addEventListener("mouseleave", () => {
      isHoveringSubMenu = false;
      setTimeout(() => {
        if (!isHoveringMenu && !isHoveringSubMenu) {
          pageSubMenus.classList.remove("show_sub_menu");
          console.log("mouse leave submenu");
        }
      }, 10); // Delay to ensure submenu doesn't disappear when moving between menu and submenu
    });
  } else {
    console.error("Menu elements not found");
  }

  mobilePageMenu.addEventListener('click', ()=>{
    mobilePageBox.classList.toggle('active')
    arrow.classList.toggle('active')
  });

});

// Mobile menus toggle button 
const toggleButton = document.querySelector(".toggle_menu");
const toggleBar = document.querySelectorAll(".toggle_menu span");
const mobile_menu = document.querySelector(".mobile_menu");

toggleButton.addEventListener("click", () => {
  toggleBar.forEach((item) => {
    item.classList.toggle('activeBar');
  });
  mobile_menu.classList.toggle('active');

  if (mobile_menu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});


//Open Add to cart Bar
const addToCartBtn = document.querySelectorAll(".addToCart");
const cartBar = document.querySelector(".cart_section");
const closeCartBtn = document.querySelector(".close_cart");

addToCartBtn.forEach((item)=>{
  item.addEventListener("click", ()=>{
    cartBar.classList.add('active')
  })
})
closeCartBtn.addEventListener("click", ()=>{
  cartBar.classList.remove('active')
})


//Nave bar scroll animation 
gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector('#header');
let lastScrollTop = 0;

ScrollTrigger.create({
  start: "top 10%",
  onUpdate: (self) => {
    let scrollTop = self.scroller.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      gsap.to(header, { top: '-120px', duration: 0.3, ease: 'power4.out' });
    } else {
      // Scrolling up
      gsap.to(header, { top: '0', duration: 0.3, ease: 'power4.out' });
    }
    lastScrollTop = scrollTop;
  }
});


// hero section scroll animation
gsap.from("#hero h3", {
  y: 10,
  opacity: 0,
  duration: 0.3,
});

gsap.from("#hero h1", {
  y: 10,
  opacity: 0,
  duration: 0.3,
  delay:.5,
});

gsap.from("#hero p", {
  y: 10,
  opacity: 0,
  duration: 0.3,
  delay:1,
});

gsap.from("#hero .hero_img img", {
  scale: 0,
  opacity: 0,
  duration: 0.3,
});




let direction = 1;

ScrollTrigger.create({
  trigger: "#hero",
  start: "top top",
  end: "bottom top",
  onUpdate: (self) => {
    if (self.direction === 1) {
      // Scrolling down
      gsap.to("#hero .hero_assist_one", {
        y: 20,
        duration: 6,
      });
    } else {
      // Scrolling up
      gsap.to("#hero .hero_assist_one", {
        y: -40,
        duration: 6,
      });
    }
  },
});
ScrollTrigger.create({
  trigger: "#hero",
  start: "top top",
  end: "bottom top",
  onUpdate: (self) => {
    if (self.direction === 1) {
      // Scrolling down
      gsap.to("#hero .hero_assist_two", {
        y: -20,
        duration: 6,
      });
    } else {
      // Scrolling up
      gsap.to("#hero .hero_assist_two", {
        y: 40,
        duration: 6,
      });
    }
  },
});

//status section scroll animation
gsap.from(".status .status_item", {
  y: 10,
  opacity: 0,
  duration: 0.3,
  stagger: 0.1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".status .status_item",
    start: "top 50%",
  },
});

//about section scroll animation
gsap.from("#about .about_first_image", {
  scale: 0.8,
  duration: 0.3,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about .about_first_image",
    scroller: "body",
    start: "top 100%",
  },
});

gsap.from("#about .about_second_image", {
  scale: 0.8,
  duration: 0.3,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about .about_second_image",
    scroller: "body",
    start: "top 100%",
  },
});

// journey section Animation
gsap.utils.toArray(".journey_items .items").forEach((item) => {
  gsap.from(item, {
    scale: 0,
    opacity: 0,
    duration: 0.2,
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      toggleActions: "play none none none",
      once: true,
    },
  });
});

//partners section scroll animation
const animateElement = (selector, trigger, start) => {
  gsap.from(selector, {
    y: 10,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
    scrollTrigger: {
      scroller: "body",
      trigger: trigger,
      start: start,
    },
  });
};

// Animate elements in #partners .partners_header
animateElement("#partners .partners_header h3", "#partners .partners_header h3", "top 90%");
animateElement("#partners .partners_header h2", "#partners .partners_header h2", "top 90%");
animateElement("#partners .partners_header p", "#partners .partners_header p", "top 90%");

// Animate #partners .partners_img
animateElement("#partners .partners_img", "#partners .partners_img", "top 50%");

//press_and_news section scroll animation
gsap.from("#press_and_news .news_header", {
    y: 10,
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
      scroller: "body",
      trigger: "#press_and_news .news_header",
      start: "top 90%",
    },
  });


  gsap.utils.toArray("#press_and_news .press_item").forEach((item) => {
    gsap.from(item, {
     y:20,
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });



//footer section scroll animation
  gsap.from("#footer #call_to_action", {
    scale: 0.9,
    duration: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: "#footer #call_to_action",
      scroller: "body",
      start: "top 100%",
    },
  });

  gsap.from("#footer #footer_items", {
    scale: 0.9,
    duration: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: "#footer #footer_items",
      scroller: "body",
      start: "top 50%",
    },
  });