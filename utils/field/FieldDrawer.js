// FieldDrawer.js

import { ImageElement } from '../basic/ImageElement.js';
import { TextElement } from '../basic/TextElement.js';
import { VisualElement } from '../basic/VisualElement.js';
import { Style } from '../Style.js';

/**
 * FieldDrawer：所有欄位元件的基底類別
 * 提供標籤與欄位容器，並定義值綁定與事件接口
 */
export class FieldDrawer extends VisualElement {
    #value;
    get value() {
        return this.#value;
    }
    set value(val) {
        this.SetValueWithoutNotify(val);
        this.NotifyValueChange(val);
    }

    #iconElement;

    #labelElement;
    get labelElement() {
        return this.#labelElement;
    }

    #labelContainer;
    get labelContainer(){
        return this.#labelContainer;
    }

    #contentContainer;
    get contentContainer(){
        return this.#contentContainer;
    }

    /**
     * @param {string} label 欄位標籤文字
     */
    constructor(label = '') {
        super('div');
        this.AddClass('field-drawer');

        this.#labelContainer = new VisualElement();
        this.#labelContainer.flexDirection = 'row';
        this.#labelContainer.AddClass('label-container');

        this.#iconElement = new ImageElement("");
        this.#labelContainer.Add(this.#iconElement);

        // 初始化內部值
        this.#value = null;
        this.onChange = null;

        this.#labelElement = new TextElement();
        this.textContent = label; 
        this.#labelContainer.Add(this.#labelElement);

        this.#contentContainer = new VisualElement();
        this.#contentContainer.AddClass('content-container');

        this.AddInHierarchy(this.#labelContainer);
        this.AddInHierarchy(this.#contentContainer);
    }

    set textContent(value){
        this.#labelElement.textContent = value;
        this.#labelElement.display = value == '' ? "none" : "flex";
    }

    LayoutInline(){
        this.flexDirection = 'row';
        this.height = Style.lineHeight
        this.#contentContainer.marginLeft = '';
    }

    LayoutExpand(){
        this.flexDirection = 'column';
        this.height = 'auto'
        this.#contentContainer.marginLeft = Style.lineHeight;
    }

    /**
     * 綁定值變更事件
     * @param {function(value):void} callback
     */
    RegisterChangeCallback(callback) {
        this.onChange = callback;
    }


    /**
     * 觸發變更事件
     * @param {*} val
     */
    NotifyValueChange(val) {
        if (typeof this.onChange === 'function') {
            this.onChange(val);
        }
    }

    SetValueWithoutNotify(val){
        this.#value = val;
    }
}
