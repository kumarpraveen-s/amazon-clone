import "./App.css";
import Home from "./component/Home";
import Header from "./component/Header";
import Checkout from "./component/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

const productData = [
  {
    id: "12321341",
    title:
      "Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)",
    price: 1000,
    rating: 5,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg",
  },
  {
    id: "49538094",
    title:
      "IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)",
    price: 10000,
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg",
  },
  {
    id: "4903850",
    title:
      "All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback",
    price: 500,
    rating: 3,
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: "23445930",
    title:
      "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    price: 2000,
    rating: 5,
    image:
      "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
  },
  {
    id: "3254354345",
    title:
      "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    price: 70000,
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
  },
  {
    id: "90829332",
    title:
      "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
    price: 90000,
    rating: 4,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
  },
];

function App() {
  const [products, setProducts] = useState(productData);
  const productHandler = (searchValue) => {
    const search = searchValue.toLowerCase();
    const filterData = productData.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setProducts(filterData);
  };
  return (
    <div className="App">
      <Router>
        <Header handler={productHandler} />
        <Routes>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/"
            element={
              <Home products={products.length === 0 ? productData : products} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
