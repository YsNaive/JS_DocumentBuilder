import { DOMStyle } from './DOMStyle.js';

export class VisualElement extends DOMStyle {
    get contentContainer() {
        return this;
    }

    constructor(tagOrElement = 'div') {
        const element = (typeof tagOrElement === 'string')
            ? document.createElement(tagOrElement)
            : tagOrElement;

        super(element);
        this.children = [];

        this.#eventHandlers = new Map(); // 事件儲存區
        this.AddClass("visual-element");
    }

    /** 加入子元素 */
    Add(child) {
        if (child instanceof VisualElement) {
            this.contentContainer.children.push(child);
            this.contentContainer.domElement.appendChild(child.domElement);
            this.emit('hierarchyChanged', { type: 'add', target: child });
        } else {
            console.warn("Child must be an instance of VisualElement");
        }
    }

    /** 插入子元素於指定位置 */
    Insert(child, index) {
        if (child instanceof VisualElement) {
            const children = this.contentContainer.children;
            const dom = this.contentContainer.domElement;
            index = Math.max(0, Math.min(index, children.length));

            children.splice(index, 0, child);
            if (index >= dom.children.length) {
                dom.appendChild(child.domElement);
            } else {
                dom.insertBefore(child.domElement, dom.children[index]);
            }

            this.emit('hierarchyChanged', { type: 'insert', target: child, index });
        } else {
            console.warn("Child must be an instance of VisualElement");
        }
    }

    /** 移除子元素 */
    Remove(child) {
        const index = this.contentContainer.children.indexOf(child);
        if (index !== -1) {
            this.contentContainer.children.splice(index, 1);
            this.contentContainer.domElement.removeChild(child.domElement);
            this.emit('hierarchyChanged', { type: 'remove', target: child });
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
            this.children.splice(index, 1);
            this.domElement.removeChild(child.domElement);
        }
    }

    /** 清除所有子元素 */
    Clear() {
        for (const child of this.contentContainer.children) {
            this.contentContainer.domElement.removeChild(child.domElement);
        }
        this.contentContainer.children = [];
        this.emit('hierarchyChanged', { type: 'clear' });
    }

    // ========== EventEmitter 實作 ==========

    #eventHandlers;

    /**
     * 註冊事件監聽器
     * @param {string} eventName
     * @param {(payload:any)=>void} handler
     */
    on(eventName, handler) {
        if (!this.#eventHandlers.has(eventName)) {
            this.#eventHandlers.set(eventName, []);
        }
        this.#eventHandlers.get(eventName).push(handler);
    }

    /**
     * 移除事件監聽器
     * @param {string} eventName
     * @param {(payload:any)=>void} handler
     */
    off(eventName, handler) {
        if (!this.#eventHandlers.has(eventName)) return;
        const list = this.#eventHandlers.get(eventName);
        const i = list.indexOf(handler);
        if (i >= 0) list.splice(i, 1);
    }

    /**
     * 觸發事件
     * @param {string} eventName
     * @param {any} payload
     */
    emit(eventName, payload) {
        if (!this.#eventHandlers.has(eventName)) return;
        for (const handler of this.#eventHandlers.get(eventName)) {
            handler(payload);
        }
    }
}
