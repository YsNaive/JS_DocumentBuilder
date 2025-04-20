// VisualElement.js

import { DOMStyle } from '../DOMStyle.js';

export class VisualElement extends DOMStyle {
    get contentContainer(){
        return this;
    }

    constructor(tagOrElement = 'div') {
        // 判斷參數是字串還是 DOM 元素
        const element = (typeof tagOrElement === 'string')
            ? document.createElement(tagOrElement)
            : tagOrElement;

        super(element);    // 傳遞給 DOMStyle 來初始化 this.domElement
        this.children = [];

        this.AddClass("visual-element");
    }

    Add(child) {
        if (child instanceof VisualElement) {
            this.contentContainer.children.push(child);
            this.contentContainer.domElement.appendChild(child.domElement);
        } else {
            console.warn("Child must be an instance of VisualElement");
        }
    }

    Remove(child) {
        const index = contentContainer.children.indexOf(child);
        if (index !== -1) {
            this.contentContainer.children.splice(index, 1);             // 從陣列中移除
            this.contentContainer.domElement.removeChild(child.domElement);  // 從 DOM 中移除
        }
    }

    AddInHierarchy(child) {
        if (child instanceof VisualElement) {
            this.children.push(child);
            this.domElement.appendChild(child.domElement);
        } else {
            console.warn("Child must be an instance of VisualElement");
        }
    }

    RemoveFromHierarchy(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);             // 從陣列中移除
            this.domElement.removeChild(child.domElement);  // 從 DOM 中移除
        }
    }
}
