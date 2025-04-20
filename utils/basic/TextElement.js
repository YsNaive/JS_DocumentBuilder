// TextElement.js

import { VisualElement } from './VisualElement.js';

export class TextElement extends VisualElement {
    constructor(text = '') {
        super('span');
        this.textContent = text;
        this.AddClass('text-element');
    }
} 