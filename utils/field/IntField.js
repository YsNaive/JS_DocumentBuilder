import { VisualElement } from '../basic/VisualElement.js';
import { FieldDrawer } from './FieldDrawer.js';

/**
 * IntField：專門處理整數值的欄位，繼承自 VisualElement
 * 以 VisualElement 呈現欄位，並處理整數驗證
 */
export class IntField extends FieldDrawer {
    #inputElement;

    /**
     * @param {string} label 欄位標籤文字
     */
    constructor(label = '') {
        super(label);  // 初始化為一個 <div> 元素
        this.AddClass('int-field');  // 加入自定義的 CSS 類別

        // 使用 VisualElement 創建 <input> 元素
        this.#inputElement = new VisualElement('input');
        this.#inputElement.AddClass('text-input');
        this.#inputElement.domElement.type = 'number';  // 設定為數字類型的輸入框
        this.#inputElement.domElement.addEventListener('input', (e) => {
            const num = Number.parseInt(e.target.value);
            this.value = num;
        });  // 綁定事件
        this.#inputElement.domElement.value = 0;  
        this.AddChild(this.#inputElement);  // 將輸入框添加為子元素

        let isDragging = false;
        let startX = 0;
        let startValue = 0;

        this.labelElement.domElement.style.cursor = 'ew-resize';  // 顯示可左右拖曳的滑鼠樣式

        this.labelElement.domElement.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            console.log(this.value);
            startValue = this.value ?? 0;
            console.log(startValue);

            // 禁止選字
            document.body.style.userSelect = 'none';
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaValue = Math.floor(deltaX / 4);  // 每 5 像素調整一個單位（可自訂）
            this.value = startValue + deltaValue;
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                document.body.style.userSelect = '';  // 恢復選字
            }
        });
    }

    /**
     * 設定值，確保只接受整數
     * @param {number} val 欲設置的值
     */
    set value(val) {
        if (Number.isInteger(val)) {
            super.value = val;
            this.#inputElement.domElement.value = val;
        } else if (Number.isInteger(this.value)){
            this.#inputElement.domElement.value = this.value;  
        } else{
            this.#inputElement.domElement.value = 0;  
        }
    }
    get value(){
        return super.value;
    }
}
