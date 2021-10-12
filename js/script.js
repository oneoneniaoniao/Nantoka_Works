// header固定
const header = document.getElementById("js-headerPC");
const headerLogo = document.getElementById("js-headerLogo")
window.addEventListener("scroll", () => {
  let value = window.scrollY
  if (value > 0) {
    header.classList.add("is_fixed");
    headerLogo.classList.add("is_fixed");
  } else {
    header.classList.remove("is_fixed");
    headerLogo.classList.remove("is_fixed");
  }
})


// ハンバーガーメニュー
const btnMenu = document.getElementById("js-hamburger");
const navSP = document.getElementById("js-navSP");
const overlay = document.getElementById("js-overlay");
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("is_active");
  navSP.classList.toggle("show");
  overlay.classList.toggle("gray");
})
overlay.addEventListener("click", () => {
  btnMenu.classList.toggle("is_active");
  navSP.classList.toggle("show");
  overlay.classList.toggle("gray");
})

// スクロールトップボタン
const scrollTopButton = document.querySelector('#js-scrollTopButton');
scrollTopButton.addEventListener('click', scroll_to_top);

function scroll_to_top() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
};

window.addEventListener('scroll', scroll_event);

function scroll_event() {
  if (window.pageYOffset > 300) {
    scrollTopButton.style.opacity = '1';
    scrollTopButton.style.visibility = 'visible';
  } else if (window.pageYOffset < 300) {
    scrollTopButton.style.opacity = '0';
    scrollTopButton.style.visibility = 'hidden';
  }
};

// ページ内スクロール

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let href = link.getAttribute("href").replace("#", "");
    let target = document.getElementById(href);
    const rect = target.getBoundingClientRect().top;
    const offset = window.pageYOffset
    const distance = rect + offset;
    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  });
})


var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
  loop: true,
  // effect: 'fade',
  slidesPerView:2,  //スライドを2つ（分）表示
  centeredSlides : true,  //アクティブなスライドを中央に表示
  effect: 'coverflow',  //スライドのエフェクトを coverflow に

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
