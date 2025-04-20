// FieldDrawer.js

import { ImageElement } from '../basic/ImageElement.js';
import { TextElement } from '../basic/TextElement.js';
import { VisualElement } from '../basic/VisualElement.js';

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
    
    #labelElement;
    get labelElement() {
        return this.#labelElement;
    }

    /**
     * @param {string} label 欄位標籤文字
     */
    constructor(label = '') {
        super('div');
        this.AddClass('field-drawer');

        this.iconElement = new ImageElement("");
        this.AddChild(this.iconElement);

        // 初始化內部值
        this.#value = null;
        this.onChange = null;

        this.#labelElement = new TextElement();
        this.textContent = label; 
        this.AddChild(this.#labelElement);
    }

    set textContent(value){
        this.#labelElement.textContent = value;
        this.#labelElement.display = value == '' ? "none" : "flex";
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
