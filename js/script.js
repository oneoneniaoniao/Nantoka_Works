// header固定
const header = document.getElementById("js-headerPC");
window.addEventListener("scroll", () => {
  let value = window.scrollY
  if (value < 5) {
    header.classList.remove("is_fixed");
  } else if (value > 10) {
    header.classList.add("is_fixed");
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