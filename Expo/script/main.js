class Main {
  #observers = [];
  constructor() {
    this.hero = new HeroSlider('.swiper');
    // this.sides = document.querySelectorAll(".side");
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
    if(inview) {
      sides.forEach(side => side.classList.add('inview'));
    } else {
      sides.forEach(side => side.classList.remove('inview'));
    }
  }
  #toggleSlideAnimation(el, inview) {
    if(inview) {
      this.hero.start();
    } 
    else {
      this.hero.stop();
    }
  }
  #textAnimation(el, inview) {
    if(inview) {
      const ta = new TextAnimation(el);
      ta.animate()
    }
  }
  #inviewAnimation(el, inview) {
    if(inview) {
      el.classList.add('inview');
    } 
    else {
      el.classList.remove('inview');
    }
  }
}
const main = new Main;