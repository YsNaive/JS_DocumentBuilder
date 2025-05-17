export class Style {
    static #root = document.documentElement;

    static icon_url_arrow = "url(./resource/image/WhiteArrow.png)";

    static #getVar(name) {
        return getComputedStyle(this.#root).getPropertyValue(name).trim();
    }

    static #setVar(name, value) {
        this.#root.style.setProperty(name, value);
    }

    static get fontSize() {
        return this.#getVar('--ve-font-size');
    }
    static set fontSize(value) {
        this.#setVar('--ve-font-size', value);
    }

    static get fontFamily() {
        return this.#getVar('--ve-font-family');
    }
    static set fontFamily(value) {
        this.#setVar('--ve-font-family', value);
    }

    static get lineHeight() {
        return this.#getVar('--ve-line-height');
    }
    static set lineHeight(value) {
        this.#setVar('--ve-line-height', value);
    }

    static get halfLineHeight() {
        return this.#getVar('--ve-half-line-height');
    }
    static set halfLineHeight(value) {
        this.#setVar('--ve-half-line-height', value);
    }

    static get backColor() {
        return this.#getVar('--ve-back-color');
    }
    static set backColor(value) {
        this.#setVar('--ve-back-color', value);
    }

    static get subBackColor() {
        return this.#getVar('--ve-sub-back-color');
    }
    static set subBackColor(value) {
        this.#setVar('--ve-sub-back-color', value);
    }

    static get frontColor() {
        return this.#getVar('--ve-front-color');
    }
    static set frontColor(value) {
        this.#setVar('--ve-front-color', value);
    }

    static get labelWidth() {
        return this.#getVar('--ve-label-width');
    }
    static set labelWidth(value) {
        this.#setVar('--ve-label-width', value);
    }
}
