"use client"
import Image from "next/image";
import { Box, Typography } from "@mui/material"
import { useEffect } from "react";
import { ProductsContainer } from "../../components/products/productsContainer";



export default function Home() {


  useEffect(() => {
  }, [])

  return (
    <Box>
      <Typography>Hello world</Typography>
      <ProductsContainer/>
    </Box>
  );
}
