import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function CheckoutPage({ cartData, setCartData, setCheckoutStatus }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (!cartData.length) {
      alert("Your cart is empty");
      return;
    }
    if (cartData.length) {
      setCartData([]);
      alert("Order placed successfully!");
      setCheckoutStatus(false);
    }
    // You can handle form submission logic here, e.g., sending data to a server.
  };

  // Dummy cart contents
  const cartContents = cartData.map((item) => (
    <ListItem key={item.id}>
      <ListItemText
        primary={`${item.title} - ${item.quantity}`}
        secondary={`₹${item.price * item.quantity}`}
      />
    </ListItem>
  ));

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {/* Left Column - Shipping and Payment Card */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Shipping and Payment Information
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {/* ... Shipping and Payment form fields (same as before) */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="ZIP Code"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Credit Card Number"
                      name="creditCardNumber"
                      value={formData.creditCardNumber}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Expiration Date"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
        {/* Right Column - Cart Contents */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Cart
              </Typography>
              <List>
                {/* {cartContents.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemText
                      primary={item.rname}
                      secondary={`₹${item.price}`}
                    />
                  </ListItem>
                ))} */}
                {cartData.length && cartContents}
                {!cartData.length && (
                  <Typography variant="body1">Your cart is empty</Typography>
                )}
              </List>
              <Typography variant="h6" gutterBottom>
                Total: ₹
                {cartData.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheckoutPage;
