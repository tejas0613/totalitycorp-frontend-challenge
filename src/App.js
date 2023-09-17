// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Box } from "@mui/material";
import { useState } from "react";
import Header from "./Components/Header";
import CardsDetails from "./Components/CardsDetails";
import CheckoutPage from "./Components/CheckoutPage";
// import { Check } from "@mui/icons-material";

function App() {
  const [cartData, setCartData] = useState([]);
  const [checkoutStatus, setCheckoutStatus] = useState(false);

  console.log(cartData);

  return (
    <Box>
      {!checkoutStatus && (
        <>
          <Header
            cartData={cartData}
            setCartData={setCartData}
            checkoutStatus={checkoutStatus}
            setCheckoutStatus={setCheckoutStatus}
          />
          
          <CardsDetails cartData={cartData} setCartData={setCartData} />
        </>
      )}
      {checkoutStatus && (
        <>
          <Header
            cartData={cartData}
            setCartData={setCartData}
            checkoutStatus={checkoutStatus}
            setCheckoutStatus={setCheckoutStatus}
          />
          <CheckoutPage
            cartData={cartData}
            setCartData={setCartData}
            checkoutStatus={checkoutStatus}
            setCheckoutStatus={setCheckoutStatus}
          />
        </>
      )}
    </Box>
  );
}

export default App;
