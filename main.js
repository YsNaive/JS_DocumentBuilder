import {VisualElement, ImageElement, FieldDrawer, IntField} from './utils/index.js'

const root = new VisualElement(document.body);
const field = new FieldDrawer("ggs");
const field2 = new IntField("gg");
field2.onChange = val =>{
};
root.AddChild(field);
root.AddChild(field2);
