import { Box, Button, Chip, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CardsDetails = ({ cartData, setCartData }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const api_url = "https://dummyjson.com/products";

    async function fetchData() {
      try {
        const response = await fetch(api_url);
        const data = await response.json();
        setProducts(data.products); // Set the fetched products in the state

        if (Array.isArray(data)) {
          // Check if data is an array before setting it in state
          setProducts(data); // Set the fetched products in the state
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleClick = (cartItem) => {
    const existingItem = cartData.find((item) => item.id === cartItem.id);
    const price = cartItem.price;

    if (existingItem) {
      // If the item is already in the cart, increase its quantity
      const updatedCartData = cartData.map((item) =>
        item.id === cartItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartData(updatedCartData);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartData([
        ...cartData,
        { ...cartItem, quantity: 1, totalcost: price },
      ]);
    }
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category); 
  };

  const uniqueCategories = [...new Set(products.map((item) => item.category))];

  return (
    <Box sx={{ margin: "2%" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", marginBottom: "16px" }}>
        <Chip
          label="All"
          color={selectedCategory === null ? "primary" : "default"}
          onClick={() => filterByCategory(null)}
          sx={{ margin: "4px" }}
        />
        {uniqueCategories.map((category) => (
          <Chip
            key={category}
            label={category}
            color={selectedCategory === category ? "primary" : "default"}
            onClick={() => filterByCategory(category)}
            sx={{ margin: "4px" }}
          />
        ))}
      </Box>
      {products
        .filter((item) => selectedCategory === null || item.category === selectedCategory) 
        .map((item, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            width: "23%",
            margin: "1%",
            height: "350px",
            padding: "10px",
            display: "inline-block",

            "@media (max-width: 768px)": { 
              width: "100%", 
              marginBottom: "16px", 
            },

            
          }}
        >
          <img
            src={item.thumbnail}
            alt="product image"
            style={{ width: "100%", height: "65%", objectFit: "cover" }}
          />

          <Box>
            <Typography>{item.title}</Typography>
          </Box>

          <Box>
            <Typography>₹{item.price}</Typography>
          </Box>

          <Box>
            <Typography>Rating {item.rating}</Typography>
          </Box>
          

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {cartData.find((cartItem) => cartItem.id === item.id) ? (
              <>
                <IconButton
                  onClick={() => {
                    // Decrease quantity or remove item if quantity becomes zero
                    const updatedCartData = cartData.map((cartItem) =>
                      cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
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
                <Typography>{item.quantity}</Typography>
                <IconButton
                  onClick={() => {
                    // Increase quantity
                    const updatedCartData = cartData.map((cartItem) =>
                      cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                    );
                    setCartData(updatedCartData);
                  }}
                >
                  <AddIcon />
                </IconButton>
              </>
            ) : (
              <Button
                variant="contained"
                size="small"
                sx={{ fontSize: "13px", height: "30px", ml: "auto" }}
                onClick={() => handleClick(item)}
              >
                Add Cart
              </Button>
            )}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default CardsDetails;
