// DropdownField.js

import { VisualElement } from '../basic/VisualElement.js';
import { FieldDrawer } from './FieldDrawer.js';

/**
 * DropdownField：下拉選單欄位，繼承自 FieldDrawer
 * 僅接受字串陣列作為選項列表
 */
export class DropdownField extends FieldDrawer {
    #selectElement;
    #items;

    /**
     * @param {string} label 欄位標籤文字
     * @param {string[]} items 字串陣列，作為選項
     */
    constructor(label = '', items = []) {
        super(label);
        this.AddClass('dropdown-field');

        this.#items = items;

        // 建立 <select> 元素
        this.#selectElement = new VisualElement('select');
        this.#selectElement.AddClass('input-field');
        this.Add(this.#selectElement);

        // 初始化選項
        this.buildChoices();

        // 綁定變更事件
        this.#selectElement.domElement.addEventListener('change', (e) => {
            const idx = e.target.selectedIndex;
            const selected = this.#items[idx];
            this.value = selected;
        });
    }

    /**
     * 建立並加入所有選項
     */
    buildChoices() {
        const select = this.#selectElement.domElement;
        select.innerHTML = '';
        this.#items.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            select.appendChild(option);
        });
    }

    /**
     * 重新設定選項列表並更新
     */
    set items(list) {
        this.#items = list;
        this.buildChoices();
    }

    get items() {
        return this.#items;
    }

    /**
     * 設定值時，同步更新選單索引
     */
    set value(val) {
        super.value = val;
        const idx = this.#items.indexOf(val);
        this.#selectElement.domElement.selectedIndex = idx >= 0 ? idx : 0;
    }

    get value() {
        return super.value;
    }
}
