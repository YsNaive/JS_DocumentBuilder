import { VisualElement } from '../basic/VisualElement.js';

/**
 * ScrollView：可滾動的容器元件
 * 提供垂直方向的內容滾動顯示能力
 */
export class ScrollView extends VisualElement {
    /**
     * @param {string} direction 可選 'ver' 或 'hor'，預設為 vertical
     */
    constructor(direction = 'ver') {
        super('div');
        this.AddClass('scroll-view');

        this.domElement.style.display   = 'flex';
        this.domElement.style.maxHeight = '100%';
        this.domElement.style.maxWidth  = '100%';

        if (direction === 'hor') {
            this.SetHorizontal();
        } else {
            this.SetVertical();
        }
    }

    SetVertical() {
        this.domElement.style.overflowY     = 'auto';
        this.domElement.style.overflowX     = 'hidden';
        this.domElement.style.flexDirection = 'column';
    }

    SetHorizontal() {
        this.domElement.style.overflowY     = 'hidden';
        this.domElement.style.overflowX     = 'auto';
        this.domElement.style.flexDirection = 'row';
    }

    /**
     * 新增子元素
     * @param {VisualElement} element
     */
    AddChild(element) {
        this.Add(element);
    }

    /**
     * 滾動到指定的子元素
     * @param {VisualElement} element
     */
    ScrollToElement(element) {
        const childDOM = element.domElement;
        const parentDOM = this.domElement;

        const offsetTop = childDOM.offsetTop;
        const offsetLeft = childDOM.offsetLeft;

        // 判斷滾動方向來使用對應 scroll
        if (parentDOM.style.flexDirection === 'row') {
            parentDOM.scrollTo({ left: offsetLeft, behavior: 'smooth' });
        } else {
            parentDOM.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    }

    /**
     * 以像素滾動到指定位置
     * @param {number} px
     */
    ScrollToPosition(px) {
        if (this.domElement.style.flexDirection === 'row') {
            this.domElement.scrollTo({ left: px, behavior: 'smooth' });
        } else {
            this.domElement.scrollTo({ top: px, behavior: 'smooth' });
        }
    }
}
