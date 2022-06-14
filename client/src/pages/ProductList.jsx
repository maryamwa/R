import styled from "styled-components"
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import allProducts from "../products.json"

const Container = styled.div ``;

const Title = styled.h1 `
margin: auto;
text-align: center;

`;

const ProductList = () => {
  const location = useLocation();
  return (
  <Container>
      <Navbar/>
      <Title>All Products</Title>

      <Products data={location.state || allProducts} />
  </Container>
  );
};

export default ProductList ; 
