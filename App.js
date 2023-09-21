import React from "react";
import ReactDOM from  "react-dom/client";


const HeaderLeft = () => (
        <img className="image" src="https://tinyurl.com/foodvillaimage" alt="logo"></img>        
);

const HeaderRight= () => (
   <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
   </ul>    
);


const AppLayout = () => (
    // {
    //     // Header
    //     //     - Logo (Left)
    //     //     - Nav items (Right)
    //     //    Body
    //     //     - RestaurantList
    //     //       - RestaurantCard
    //     //         - Images
    //     //         - Rating
    //     //         - Price
    //     //    Footer   
        

    // }
    <React.Fragment>
    {/* Header */}
    <div className="header" style={{backgroundColor: "grey"}}>
      <HeaderLeft />
      <HeaderRight />
    </div>

    {/* Body */}
    {/* <div className="body">
      <RestaurantList>
        <RestaurantCard>
          <Images />
          <Rating />
          <Price />
        </RestaurantCard>
      </RestaurantList>
    </div> */}

    {/* Footer */}
    {/* <div className="footer">
      <Footer />
    </div> */}
  </React.Fragment>


);

const JSX = (
  <><div>first root</div></>  
);

const dom = ReactDOM.createRoot(document.getElementById('root'));
//dom.render(<AppLayout/>);
dom.render(JSX);