import { Badge, Box, Button, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Popper from "@mui/material/Popper";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Header = ({ cartData, setCartData, checkoutStatus, setCheckoutStatus }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCartClick = (event) => {
    setIsCartOpen(!isCartOpen);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  // console.log(open)
  const id = open ? "simple-popper" : undefined;
  // console.log(id)

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          padding: "1% 3% 1% 3%",
          background: "#317AE1",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "90%", cursor: "pointer"}} onClick={
          () => {
            if(checkoutStatus){
              setCheckoutStatus(false)
            }
          }
        }>
          <Typography fontSize="18px" sx={{ color: "white" }}>
            eCommerce App 
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            width: "5%",
          }}
        >
          <Badge color="error" badgeContent={cartData.length}>
            <ShoppingCartIcon
              sx={{ color: "white", cursor: "pointer" }}
              onClick={handleCartClick}
            />
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box
                sx={{
                  background: "#fff",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  height: "fit-content",
                  width: "250px",
                }}
              >
                {cartData.length === 0 ? (
                  <Typography variant="body1">Your cart is empty</Typography>
                ) : (
                  cartData.map((item, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Typography>
                        {item.title} - Rs.{item.price}
                      </Typography>
                      <IconButton
                        onClick={() => {
                          // Decrease quantity or remove item if quantity becomes zero
                          const updatedCartData = cartData.map((cartItem) =>
                            cartItem.id === item.id
                              ? {
                                  ...cartItem,
                                  quantity: cartItem.quantity - 1,
                                }
                              : cartItem
                          );
                          setCartData(
                            updatedCartData.filter(
                              (cartItem) => cartItem.quantity > 0
                            )
                          );
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ margin: "0 8px" }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => {
                          // Increase quantity
                          const updatedCartData = cartData.map((cartItem) =>
                            cartItem.id === item.id
                              ? {
                                  ...cartItem,
                                  quantity: cartItem.quantity + 1,
                                }
                              : cartItem
                          );
                          setCartData(updatedCartData);
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  ))
                )}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "30px 0 0 0",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Total</Typography>
                  <Typography sx={{ margin: "0 8px" }}>
                    ₹
                    {cartData.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    disableElevation
                    color="success"
                    sx={{ width: "50%", margin: "10px 0 0 0" }}
                    onClick={() => setCheckoutStatus(true)}
                  >
                    Checkout
                  </Button>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    sx={{ margin: "10px 0 0 0" }}
                    onClick={() => setCartData([])}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </Popper>
          </Badge>

          <CircleNotificationsIcon sx={{ color: "white" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
