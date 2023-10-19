//Nested Elements
/**
 <div id="parent">
 <div id="children">
    <h1>Hello World</h1>
 </div>
 </div>
 ReactElement(object) = HTML(Browser Understands)
 */
//Nested Elements
const parent = React.createElement('div',
{id:'parent'},
[React.createElement('div',
{id:'children1'},
 [React.createElement('h1',{},'Hello World one'),
 React.createElement('h2',{},'Hello World two')]
 )],
 [React.createElement('div',
 {id:'children2'},
  [React.createElement('h1',{},'Hello World three'),
  React.createElement('h2',{},'Hello World four')]
  )]
);
const root = ReactDOM.createRoot(document.getElementById("root")) ;// create root method//

//using React//
const heading = React.createElement("h1",{id:"heading"},"hello world namaste React"); //creating h1 element , {} is used to inject attributes//
console.log(heading); //returns object//
root.render(heading); //render converts heading object into html tag element//
root.render(parent);
