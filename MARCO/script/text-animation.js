class TextAnimation {
    constructor(els) {
        this.els = els;
        this.chars = this.els.innerHTML.trim().split("");
        this.els.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(" ", "&nbsp");
            return `${acc}<span class="char">${curr}</span>`
        }, "");
    }
    animate() {
        this.els.classList.add('inview');
    }
}
