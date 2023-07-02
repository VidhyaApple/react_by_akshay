import React from "react";
import ReactDOM from  "react-dom/client";

const h1 = React.createElement(
    'h1',
{
    id:'h1-id'
},
"h1 content");

const jsx = <h2>jsx contnet variable</h2>;

const Component = () => (
   <div>component content</div>
 );
 

const JSXFunction = () => (
   <div>
       {h1}{jsx}{Component()}{<Component/>}
        <h2>jsx contnet function</h2>
    </div> 
);


const dom = ReactDOM.createRoot(document.getElementById('root'));
dom.render(<JSXFunction/>);