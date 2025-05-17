// TextField.js

import { VisualElement } from '../basic/VisualElement.js';
import { Style } from '../Style.js';
import { FieldDrawer } from './FieldDrawer.js';

/**
 * TextField：文字欄位，繼承自 FieldDrawer
 * 可編輯文字並支援變更事件
 */
export class TextField extends FieldDrawer {
    #inputElement;

    /**
     * @param {string} label 欄位標籤文字
     */
    constructor(label = '') {
        super(label);
        this.AddClass('text-field');

        // 建立多行輸入框
        this.#inputElement = new VisualElement('textarea');
        this.#inputElement.AddClass('input-field');
        let lastLines = 0;
        this.#inputElement.domElement.addEventListener('input', (e) => {
            const inputValue = e.target.value;
            this.value = inputValue;

            const lines = (inputValue.match(/\r\n|\n|\r/g) || []).length + 1;
            if(lines != lastLines){
                this.#inputElement.height = '';
                if (lines > 1) {
                    this.#inputElement.height = this.#inputElement.domElement.scrollHeight + 'px';
                    this.LayoutExpand();
                } else {
                    this.LayoutInline();
                }
                lastLines = lines;
            }
        });
        this.#inputElement.domElement.value = '';
        this.Add(this.#inputElement);
    }

    /**
     * 設定欄位值
     * @param {string} val 欲設置的文字
     */
    set value(val) {
        super.value = val;
        this.#inputElement.domElement.value = val ?? '';
    }

    get value() {
        return super.value;
    }
}
