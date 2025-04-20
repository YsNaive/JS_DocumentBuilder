import {VisualElement, ImageElement, FieldDrawer, IntField, TextField} from './utils/index.js'

const root = new VisualElement(document.body);
const field = new FieldDrawer("None");
const field2 = new IntField("Int");
field2.onChange = val =>{

};
const field3 = new TextField("String");
field3.onChange = val =>{

};
root.Add(field);
root.Add(field2);
root.Add(field3);
