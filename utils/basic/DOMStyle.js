// DOMStyle.js

export class DOMStyle {
    #domElement;

    constructor(domElement) {
        this.#domElement = domElement;
    }

    get domElement() {
        return this.#domElement;
    }

    // --- 常用方法 ---

    AddClass(className) {
        this.#domElement.classList.add(className);
    }

    RemoveClass(className) {
        this.#domElement.classList.remove(className);
    }

    get textContent() {
        return this.#domElement.textContent;
    }

    set textContent(value) {
        this.#domElement.textContent = value;
    }

    get transform() {
        return this.#domElement.style.transform;
    }
    set transform(value) {
        this.#domElement.style.transform = value;
    }

    // --- 自動產生的 USS 屬性 getter/setter ---

    // 尺寸
    get width() { return this.#domElement.style.width; }
    set width(v) { this.#domElement.style.width = v; }

    get height() { return this.#domElement.style.height; }
    set height(v) { this.#domElement.style.height = v; }

    get minWidth() { return this.#domElement.style.minWidth; }
    set minWidth(v) { this.#domElement.style.minWidth = v; }

    get minHeight() { return this.#domElement.style.minHeight; }
    set minHeight(v) { this.#domElement.style.minHeight = v; }

    get maxWidth() { return this.#domElement.style.maxWidth; }
    set maxWidth(v) { this.#domElement.style.maxWidth = v; }

    get maxHeight() { return this.#domElement.style.maxHeight; }
    set maxHeight(v) { this.#domElement.style.maxHeight = v; }

    // Margin
    get margin() { return this.#domElement.style.margin; }
    set margin(v) { this.#domElement.style.margin = v; }

    get marginLeft() { return this.#domElement.style.marginLeft; }
    set marginLeft(v) { this.#domElement.style.marginLeft = v; }

    get marginTop() { return this.#domElement.style.marginTop; }
    set marginTop(v) { this.#domElement.style.marginTop = v; }

    get marginRight() { return this.#domElement.style.marginRight; }
    set marginRight(v) { this.#domElement.style.marginRight = v; }

    get marginBottom() { return this.#domElement.style.marginBottom; }
    set marginBottom(v) { this.#domElement.style.marginBottom = v; }

    // Padding
    get padding() { return this.#domElement.style.padding; }
    set padding(v) { this.#domElement.style.padding = v; }

    get paddingLeft() { return this.#domElement.style.paddingLeft; }
    set paddingLeft(v) { this.#domElement.style.paddingLeft = v; }

    get paddingTop() { return this.#domElement.style.paddingTop; }
    set paddingTop(v) { this.#domElement.style.paddingTop = v; }

    get paddingRight() { return this.#domElement.style.paddingRight; }
    set paddingRight(v) { this.#domElement.style.paddingRight = v; }

    get paddingBottom() { return this.#domElement.style.paddingBottom; }
    set paddingBottom(v) { this.#domElement.style.paddingBottom = v; }

    // Border
    get borderWidth() { return this.#domElement.style.borderWidth; }
    set borderWidth(v) { this.#domElement.style.borderWidth = v; }

    get borderLeftWidth() { return this.#domElement.style.borderLeftWidth; }
    set borderLeftWidth(v) { this.#domElement.style.borderLeftWidth = v; }

    get borderTopWidth() { return this.#domElement.style.borderTopWidth; }
    set borderTopWidth(v) { this.#domElement.style.borderTopWidth = v; }

    get borderRightWidth() { return this.#domElement.style.borderRightWidth; }
    set borderRightWidth(v) { this.#domElement.style.borderRightWidth = v; }

    get borderBottomWidth() { return this.#domElement.style.borderBottomWidth; }
    set borderBottomWidth(v) { this.#domElement.style.borderBottomWidth = v; }

    get borderColor() { return this.#domElement.style.borderColor; }
    set borderColor(v) { this.#domElement.style.borderColor = v; }

    get borderLeftColor() { return this.#domElement.style.borderLeftColor; }
    set borderLeftColor(v) { this.#domElement.style.borderLeftColor = v; }

    get borderTopColor() { return this.#domElement.style.borderTopColor; }
    set borderTopColor(v) { this.#domElement.style.borderTopColor = v; }

    get borderRightColor() { return this.#domElement.style.borderRightColor; }
    set borderRightColor(v) { this.#domElement.style.borderRightColor = v; }

    get borderBottomColor() { return this.#domElement.style.borderBottomColor; }
    set borderBottomColor(v) { this.#domElement.style.borderBottomColor = v; }

    get borderRadius() { return this.#domElement.style.borderRadius; }
    set borderRadius(v) { this.#domElement.style.borderRadius = v; }

    get borderTopLeftRadius() { return this.#domElement.style.borderTopLeftRadius; }
    set borderTopLeftRadius(v) { this.#domElement.style.borderTopLeftRadius = v; }

    get borderTopRightRadius() { return this.#domElement.style.borderTopRightRadius; }
    set borderTopRightRadius(v) { this.#domElement.style.borderTopRightRadius = v; }

    get borderBottomLeftRadius() { return this.#domElement.style.borderBottomLeftRadius; }
    set borderBottomLeftRadius(v) { this.#domElement.style.borderBottomLeftRadius = v; }

    get borderBottomRightRadius() { return this.#domElement.style.borderBottomRightRadius; }
    set borderBottomRightRadius(v) { this.#domElement.style.borderBottomRightRadius = v; }

    // Flex
    get display() { return this.#domElement.style.display; }
    set display(v) { this.#domElement.style.display = v; }

    get flexDirection() { return this.#domElement.style.flexDirection; }
    set flexDirection(v) { this.#domElement.style.flexDirection = v; }

    get flexWrap() { return this.#domElement.style.flexWrap; }
    set flexWrap(v) { this.#domElement.style.flexWrap = v; }

    get justifyContent() { return this.#domElement.style.justifyContent; }
    set justifyContent(v) { this.#domElement.style.justifyContent = v; }

    get alignItems() { return this.#domElement.style.alignItems; }
    set alignItems(v) { this.#domElement.style.alignItems = v; }

    get alignContent() { return this.#domElement.style.alignContent; }
    set alignContent(v) { this.#domElement.style.alignContent = v; }

    get alignSelf() { return this.#domElement.style.alignSelf; }
    set alignSelf(v) { this.#domElement.style.alignSelf = v; }

    get flex() { return this.#domElement.style.flex; }
    set flex(v) { this.#domElement.style.flex = v; }

    get flexGrow() { return this.#domElement.style.flexGrow; }
    set flexGrow(v) { this.#domElement.style.flexGrow = v; }

    get flexShrink() { return this.#domElement.style.flexShrink; }
    set flexShrink(v) { this.#domElement.style.flexShrink = v; }

    get flexBasis() { return this.#domElement.style.flexBasis; }
    set flexBasis(v) { this.#domElement.style.flexBasis = v; }

    // 背景與透明度
    get backgroundColor() { return this.#domElement.style.backgroundColor; }
    set backgroundColor(v) { this.#domElement.style.backgroundColor = v; }

    get backgroundImage() { return this.#domElement.style.backgroundImage; }
    set backgroundImage(v) { this.#domElement.style.backgroundImage = v; }

    get backgroundPosition() { return this.#domElement.style.backgroundPosition; }
    set backgroundPosition(v) { this.#domElement.style.backgroundPosition = v; }

    get backgroundRepeat() { return this.#domElement.style.backgroundRepeat; }
    set backgroundRepeat(v) { this.#domElement.style.backgroundRepeat = v; }

    get backgroundSize() { return this.#domElement.style.backgroundSize; }
    set backgroundSize(v) { this.#domElement.style.backgroundSize = v; }

    get overflow() { return this.#domElement.style.overflow; }
    set overflow(v) { this.#domElement.style.overflow = v; }

    get visibility() { return this.#domElement.style.visibility; }
    set visibility(v) { this.#domElement.style.visibility = v; }

    get opacity() { return this.#domElement.style.opacity; }
    set opacity(v) { this.#domElement.style.opacity = v; }

    // 文字樣式
    get color() { return this.#domElement.style.color; }
    set color(v) { this.#domElement.style.color = v; }

    get fontSize() { return this.#domElement.style.fontSize; }
    set fontSize(v) { this.#domElement.style.fontSize = v; }

    get fontStyle() { return this.#domElement.style.fontStyle; }
    set fontStyle(v) { this.#domElement.style.fontStyle = v; }

    get textAlign() { return this.#domElement.style.textAlign; }
    set textAlign(v) { this.#domElement.style.textAlign = v; }

    get whiteSpace() { return this.#domElement.style.whiteSpace; }
    set whiteSpace(v) { this.#domElement.style.whiteSpace = v; }

    get position() { return this.#domElement.style.position; }
    set position(v) { this.#domElement.style.position = v; }

    get left() { return this.#domElement.style.left; }
    set left(v) { this.#domElement.style.left = v; }

    get right() { return this.#domElement.style.right; }
    set right(v) { this.#domElement.style.right = v; }

    get top() { return this.#domElement.style.top; }
    set top(v) { this.#domElement.style.top = v; }

    get bottom() { return this.#domElement.style.bottom; }
    set bottom(v) { this.#domElement.style.bottom = v; }

    get cursor() { return this.#domElement.style.cursor; }
    set cursor(v) { this.#domElement.style.cursor = v; }
} 
