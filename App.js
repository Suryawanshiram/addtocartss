import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import data from "./data/data.json";
import { useState } from "react";

const App = () => {
  const [itemCount, setItemCount] = useState(0);

  //function to check type of button for calling related functions
  const manageItems = (event) => {
    if (event.target.innerText === "Add to cart") {
      addItem(event);
    } else if (event.target.innerText === "Remove from cart") {
      removeItem(event);
    }
  };

  //Add item function to increase the item in the cart
  const addItem = (event) => {
    setItemCount(() => itemCount + 1);
    event.target.innerText = "Remove from cart";
    event.target.classList.value = "btn btn-danger";
  };

  //Remove item function to decrease the item in the cart
  const removeItem = (event) => {
    setItemCount(() => itemCount - 1);
    event.target.innerText = "Add to cart";
    event.target.classList.value = "btn btn-primary";
  };
  return (
    <>
      <Navbar itemCount={itemCount} />
      <Header />
      <Cards data={data} manageItems={manageItems} />
      <Footer />
    </>
  );
};

export default App;
