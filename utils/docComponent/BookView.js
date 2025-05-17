import { ScrollView } from '../basic/ScrollView.js';
import { FoldoutDrawer } from '../field/FoldoutDrawer.js';

export class BookViewNode extends FoldoutDrawer {
    #uid;

    constructor(uid) {
        super();
        this.uid = uid;
        this.children = [];
        this.parent = null;

        this.iconElement.opacity = 0;
        this.on("hierarchyChanged", evt =>{
            if(this.contentContainer.children.length === 0){
                this.iconElement.opacity = 0;
            }
            else{
                this.iconElement.opacity = 1;
            }
        });
    }

    get uid() {
        return this.#uid;
    }

    set uid(value) {
        this.#uid = value;
        this.textContent = value;
    }

    getRootView() {
        let current = this;
        while ((Object.getPrototypeOf(current) !== BookView.prototype) && current) {
            current = current.parent;
        }
        return current;
    }

    find(uid) {
        if (this.#uid === uid) return this;
        for (const child of this.children) {
            const found = child.find(uid);
            if (found) return found;
        }
        return null;
    }

    toJSON() {
        return {
            uid: this.#uid,
            children: this.children.map(c => c.toJSON()),
        };
    }

    static fromJSON(json) {
        const node = new BookViewNode(json.uid);
        for (const childJson of json.children || []) {
            const childNode = BookViewNode.fromJSON(childJson);
            node.addChild(childNode);
        }
        return node;
    }
}

export class BookView extends ScrollView {
    constructor() {
        super();
        this.AddClass('book-view');
    }

    find(uid) {
        return this.root.find(uid);
    }

    toJSON() {
        return this.root.toJSON();
    }

    get hierarchyState(){
        var ret = "";
        
    }

    static fromJSON(json) {
        const bookView = new BookView();
        bookView.root = BookViewNode.fromJSON(json);
        bookView._linkView(bookView.root);
        return bookView;
    }
}
