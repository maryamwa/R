import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import Navbar from '../components/Navbar'


const Container = styled.div ``;

const Wrapper = styled.div `
padding: 20px;
`;

const Title = styled.h1 `
font-weight: 300;
text-align: center;
`;

const Top = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button `
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div ``;

const TopText = styled.span `
text-decoration: underline;
margin: 0px 10px;
`;

const Bottom = styled.div `
display: flex;
justify-content: space-between;
`;
const Info = styled.div `
flex: 3;
`;

const Hr = styled.hr `
background-color: #eee;
border: none;
height: 1px;
`;

const Summary = styled.div `
flex: 1;
order-radius: 10px;
padding: 20px;
height: 50vh;
`;


const Button= styled.button `
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
`;

 
const Product = styled.div `
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div `
flex: 2;
display: flex;
`;

const Image = styled.img `
width: 200px;
`;

const Details = styled.div `
padding: 20px;
display: flex;
flex-direction: column ;
justify-content: space-around; 
`;

const ProductName = styled.span ``;


const PriceDetailt = styled.div `
flex: 1;
display: flex;
flex-direction: column ;
align-items: center;
justify-content: center;

`;

const ProductAmountContainer = styled.div `
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div `
font-size: 24px;
margin: 5px;
`;
const ProductPrice = styled.div `
font-size: 30px;
font-weight: 200;
`;



const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Wrapper>
          <Title>Cart</Title>
          <Top>
              <a href="/productlist">
              <TopButton>CONTINUE SHOPPING</TopButton>
              </a>
              <TopTexts>
                  <TopText>Shopping Bag(2)</TopText>
              </TopTexts>

          </Top>
          <Bottom>
              <Info>
                  <Product>
                      <ProductDetail>
                          <Image src = "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224008824213.JPG"/>
                          <Details>
                              <ProductName>Nabat Washed Baby Batavia </ProductName>

                          </Details>


                      </ProductDetail>
                      <PriceDetailt>
                          <ProductAmountContainer>
                              <Add/>
                              <ProductAmount>2</ProductAmount>
                              <Remove/>
                          </ProductAmountContainer>
                          <ProductPrice>33</ProductPrice>
                      </PriceDetailt>
                  </Product>
                  <Hr/>
                  <Product>
                      <ProductDetail>
                          <Image src = "https://images.deliveryhero.io/image/darkstores/groceries-catalog/products-uae/Hero%20Images/Folder%202/901671_Hero.jpg?webp=0"/>
                          <Details>
                              <ProductName>Mackintosh Assorted Chocolate </ProductName>
                       
                          </Details>


                      </ProductDetail>
                      <PriceDetailt>
                          <ProductAmountContainer>
                              <Add/>
                              <ProductAmount>1</ProductAmount>
                              <Remove/>
                          </ProductAmountContainer>
                          <ProductPrice>94.95</ProductPrice>
                      </PriceDetailt>
                  </Product>
              </Info>
              <Summary>
            
                  <a href="/checkout">
                  <Button>CHECKOUT NOW</Button>
                  </a>

              </Summary>


          </Bottom>
      </Wrapper>

      
    </Container>
  );
};

export default Cart;
