import  styled  from "styled-components"
import Product from "./Product";
import gamed from "../products.json"

const Container = styled.div `
padding :50px;
flex: 1;
height: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space between;
`;


const Products = ({ data }) => {
    return (
      <Container>
        {data.map(item => (
            <Product  item = {item} key={item.id}/>
            
  ))}
      </Container>
    ) }


export default Products;
