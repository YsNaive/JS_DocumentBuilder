// ImageElement.js

import { VisualElement } from './VisualElement.js';

export class ImageElement extends VisualElement {
    constructor(src = '') {
        // 使用 div 取代 img，改以 background-image 呈現圖片
        super('div');
        this.AddClass('icon');

        // 初始化屬性
        this.source = src;
    }

    // 設定圖片來源
    set source(src) {
        this.domElement.style.backgroundImage = src ? `url('${src}')` : 'none';
    }

    // 取得圖片來源
    get source() {
        const bg = this.domElement.style.backgroundImage;
        return bg.startsWith('url(') ? bg.slice(5, -2) : '';
    }
} 