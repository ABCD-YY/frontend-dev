class Main {
  #observers = [];
  constructor() {
    this.hero = new HeroSlider('.swiper');
    this.sides = document.querySelectorAll(".side");
    this.#ScrollInit()
  }
  destroy() {
    this.#observers.forEach(so => so.destroy());
  }
  #ScrollInit() {
    this.#observers.push(
      new ScrollObserver('#main-content', this.#sideAnimation.bind(this), { once: false, rootMargin: "-300px 0px" }),
      new ScrollObserver('.swiper', this.#toggleSlideAnimation.bind(this), { once: false }),
      new ScrollObserver('.appear', this.#inviewAnimation),
      new ScrollObserver('.cover-slide', this.#inviewAnimation),
      new ScrollObserver('.tween-animate-title', this.#textAnimation)
    )
  }
  #sideAnimation(el, inview) {
    if (inview) {
      sides.forEach(side => side.classList.add('inview'));
    } else {
      sides.forEach(side => side.classList.remove('inview'));
    }
  }
  #toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    }
    else {
      this.hero.stop();
    }
  }
  #textAnimation(el, inview) {
    if (inview) {
      const ta = new TextAnimation(el);
      ta.animate()
    }
  }
  #inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    }
    else {
      el.classList.remove('inview');
    }
  }
}
const main = new Main;
const filters = document.querySelectorAll('.filters li');
filters.forEach(filter => {
  filter.addEventListener('click', function () {
    filters.forEach(filter => {
      filter.classList.remove('active');
      filter.classList.remove('hidden');
    });
    const filterValue = filter.getAttribute('data-filter');
    const items = document.querySelectorAll('.filters__items');
    items.forEach(item => {
      item.style.display = 'block';
      if (item.classList.contains(filterValue)) {
      } else {
        item.style.display = 'none';
      }
    });
    filter.classList.add('active');
  });
});
console.log(main.js);
// const startValue = 1500;
// const endValue = 8000;
// const duration = 5000;

// function countUp(timestamp, startTimestamp, counterElement) {
//   const progress = timestamp - startTimestamp;
//   const currentValue = Math.min(Math.floor((progress / duration) * (endValue - startValue) + startValue), endValue);


//   counterElement.textContent = currentValue;

//   if (progress < duration) {
//     requestAnimationFrame((nextTimestamp) => countUp(nextTimestamp, startTimestamp, counterElement));
//   }
// }

// window.addEventListener("load", () => {
//   const counterElement = document.querySelector(".counter");
//   const startTimestamp = performance.now();

//   requestAnimationFrame((timestamp) => countUp(timestamp, startTimestamp, counterElement));
// });


// var header = document.querySelector(".header");
// let baka = 10;
// function css() {
//   const a = "height: " + baka + "rem;"
//   header.setAttribute("style", a);
//   updateScrollY();
//   console.log(baka);
// }
// function updateScrollY() {
//   currentScrollY = window.scrollY;
//   if(currentScrollY >= 400) {
//     baka = currentScrollY / 40;
//   }
//   console.log("Current Scroll Y:", currentScrollY);
// }
// window.addEventListener("scroll", css);
