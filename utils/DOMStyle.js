// DOMStyle.js

export class DOMStyle {
    #domElement;

    constructor(domElement) {
        this.#domElement = domElement;
    }

    get domElement() {
        return this.#domElement;
    }

    // 新增 class
    AddClass(className) {
        this.#domElement.classList.add(className);
    }

    // 移除 class
    RemoveClass(className) {
        this.#domElement.classList.remove(className);
    }

    // 設定與取得 display 樣式
    set display(value) {
        this.#domElement.style.display = value;
    }

    get display() {
        return this.#domElement.style.display;
    }

    set flexDirection(value) {
        this.#domElement.style.display = 'flex';
        this.#domElement.style.flexDirection = value;
    }

    get flexDirection() {
        return this.#domElement.style.flexDirection;
    }

    // 設定與取得 background-color 樣式
    set backgroundColor(value) {
        this.#domElement.style.backgroundColor = value;
    }

    get backgroundColor() {
        return this.#domElement.style.backgroundColor;
    }

    // 設定與取得 width 樣式
    set width(value) {
        this.#domElement.style.width = value;
    }

    get width() {
        return this.#domElement.style.width;
    }

    // 設定與取得 height 樣式
    set height(value) {
        this.#domElement.style.height = value;
    }

    get height() {
        return this.#domElement.style.height;
    }

    // 設定與取得 padding 樣式
    set padding(value) {
        this.#domElement.style.padding = value;
    }

    get padding() {
        return this.#domElement.style.padding;
    }

    set paddingLeft(value) {
        this.#domElement.style.paddingLeft = value;
    }

    get paddingLeft() {
        return this.#domElement.style.paddingLeft;
    }

    set paddingTop(value) {
        this.#domElement.style.paddingTop = value;
    }

    get paddingTop() {
        return this.#domElement.style.paddingTop;
    }

    set paddingRight(value) {
        this.#domElement.style.paddingRight = value;
    }

    get paddingRight() {
        return this.#domElement.style.paddingRight;
    }

    set paddingBottom(value) {
        this.#domElement.style.paddingBottom = value;
    }

    get paddingBottom() {
        return this.#domElement.style.paddingBottom;
    }

    // 設定與取得 margin 樣式
    set margin(value) {
        this.#domElement.style.margin = value;
    }

    get margin() {
        return this.#domElement.style.margin;
    }

    set marginLeft(value) {
        this.#domElement.style.marginLeft = value;
    }

    get marginLeft() {
        return this.#domElement.style.marginLeft;
    }

    set marginTop(value) {
        this.#domElement.style.marginTop = value;
    }

    get marginTop() {
        return this.#domElement.style.marginTop;
    }

    set marginRight(value) {
        this.#domElement.style.marginRight = value;
    }

    get marginRight() {
        return this.#domElement.style.marginRight;
    }

    set marginBottom(value) {
        this.#domElement.style.marginBottom = value;
    }

    get marginBottom() {
        return this.#domElement.style.marginBottom;
    }

    // 設定與取得 textContent
    set textContent(value) {
        this.#domElement.textContent = value;
    }

    get textContent() {
        return this.#domElement.textContent;
    }

    set opacity(value) {
        this.#domElement.opacity = value;
    }

    get opacity() {
        return this.#domElement.opacity;
    }
}
