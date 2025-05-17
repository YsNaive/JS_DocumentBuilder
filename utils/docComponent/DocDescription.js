// DocDescription.js

import { DocComponent } from './DocComponent.js';
import { TextElement } from '../basic/TextElement.js';
import { VisualElement } from '../basic/VisualElement.js';

/**
 * DocDescription：包含單一字串描述的文件組件
 * 繼承自 DocComponent，並在建立時註冊自身
 */
export class DocDescription extends DocComponent {
    /**
     * @param {string} description 文件描述文字
     */
    constructor(description = '') {
        super();
        this.description = description;
    }

    /**
     * 唯一字串 ID，用於註冊查找
     */
    get ID() {
        return 'description';
    }

    /**
     * 建立並回傳對應的 VisualElement，顯示描述文字
     * @returns {VisualElement}
     */
    CreateVisual() {
        const container = new VisualElement('div');
        container.AddClass('doc-description');

        const textEl = new TextElement(this.description);
        container.Add(textEl);

        return container;
    }
}

// 註冊此組件
DocComponent.registerComponent(DocDescription);
