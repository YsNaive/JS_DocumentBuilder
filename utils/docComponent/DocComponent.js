// DocComponent.js

/**
 * DocComponent：所有可註冊生成的元件基底類別
 * 子類別必須實作 static getID() 與 static CreateVisual() 方法
 * 並在定義後呼叫 DocComponent.registerComponent(子類)
 */
export class DocComponent {
    /** 靜態註冊表：ID(string) -> 子類別 */
    static registry = new Map();

    /**
     * 註冊子類別
     * @param {typeof DocComponent} componentClass
     */
    static registerComponent(componentClass) {
        const id = componentClass.prototype.ID;
        if (typeof id !== 'string') {
            throw new Error("Component.ID must return a string");
        }
        this.registry.set(id, componentClass);
    }

    /**
     * 根據 ID 生成對應的 Visual 元件
     * @param {string} id
     * @returns {VisualElement}
     */
    static CreateVisualByID(id) {
        const cls = this.registry.get(id);
        if (!cls) {
            throw new Error(`No registered component for ID ${id}`);
        }
        return cls.CreateVisual();
    }

    /**
     * 子類必須實作：返回唯一字串 ID
     * @returns {string}
     */
    get ID() {
        throw new Error('get ID() must be implemented by subclass');
    }

    /**
     * 子類必須實作：創建並回傳對應的 VisualElement
     * @returns {VisualElement}
     */
    CreateVisual() {
        throw new Error('CreateVisual() must be implemented by subclass');
    }
}
