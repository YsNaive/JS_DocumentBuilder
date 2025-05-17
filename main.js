import {VisualElement, ImageElement, FieldDrawer, IntField, TextField, DropdownField, TextElement, ScrollView, DataBase, BookView, FoldoutDrawer, BookViewNode} from './utils/index.js'


const root = new VisualElement(document.body);
root.display = "fixed";
const hor1 = new VisualElement();
hor1.display = "flex";
hor1.flexDirection = 'row';
hor1.domElement.style.maxHeight = "100%";
hor1.domElement.style.flexGrow = 1;
const leftContainer = new VisualElement();
leftContainer.backgroundColor = "rgb(235,235,235)";
leftContainer.height = "100%";
leftContainer.width = "22.5%";
leftContainer.padding = "5px";
const bookView = new BookView();
leftContainer.Add(new TextElement("MyBook"));
leftContainer.Add(bookView);

const midContainer = new ScrollView();
midContainer.width = "55%";
midContainer.backgroundColor = "rgb(245,245,245)";

const rightContainer = new ScrollView();
rightContainer.domElement.style.flexGrow = 1;
rightContainer.backgroundColor = "rgb(235,235,235)";

hor1.Add(leftContainer);
hor1.Add(midContainer);
hor1.Add(rightContainer);

root.Add(hor1);

const c1 = new BookViewNode("ch1");
bookView.Add(c1);
c1.Add(new BookViewNode("a."));
c1.Add(new BookViewNode("b."));
c1.Add(new BookViewNode("c."));

bookView.Add(new BookViewNode("ch2"));
bookView.contentContainer.children[1].Add(new BookViewNode("a."));
bookView.Add(new BookViewNode("ch3"));