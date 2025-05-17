// FoldoutDrawer.js

import { FieldDrawer } from './FieldDrawer.js';
import { VisualElement } from '../basic/VisualElement.js';
import { Style } from '../Style.js';

/**
 * FoldoutDrawer：可展開或收合內容的欄位容器
 * 點擊標題切換內容顯示與隱藏
 */
export class FoldoutDrawer extends FieldDrawer {
    #isExpanded       = false;
    /**
     * @param {string} label 標題文字
     */
    constructor(label = '') {
        super(label);
        this.fixedLabelWidth = false;
        this.labelContainer.flexGrow = 1;
        this.labelContainer.width    = 'auto';
        this.AddClass('foldout-drawer');
        this.contentContainer.display     = "none";
        this.iconElement.backgroundImage = Style.icon_url_arrow;
        this.iconElement.domElement.addEventListener("click", () => {
            this.isExpanded = !this.isExpanded;
        });
        this.LayoutExpand();
    }

    /**
     * 取得展開狀態
     */
    get isExpanded() {
        return this.#isExpanded;
    }

    /**
     * 設定展開狀態
     */
    set isExpanded(val) {
        if(val !== this.#isExpanded){
            this.#isExpanded = val;
            if(val){
                this.iconElement.transform = "rotate(90deg)";
                this.contentContainer.display = "flex";
            }
            else{
                this.iconElement.transform = "rotate(0deg)";
                this.contentContainer.display = "none";
            }
        }
    }
}
