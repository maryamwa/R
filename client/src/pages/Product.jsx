import { Add, Remove } from '@material-ui/icons';
import styled from "styled-components";
import Navbar from '../components/Navbar';

const Container = styled.div ``;

const Wrapper = styled.div `
padding: 50px;
display: flex;
`;

const ImgContainer = styled.div `
flex: 1;
`;

const Image = styled.img `
width: 100% ;
height: 80vh;
object-fit: cover;

`;

const InfoContainer = styled.div `
flex: 1;
padding: 0px 50px;
`;

const Title = styled.h1 `
font-weight:200; 
`;

const Desc = styled.p `
margin: 20px 0px;
`;

const Price = styled.span `
font-weight: 100;
font-size: 40px;
`;

const AddContainer= styled.div `
width: 50%;
display: flex;
align-itmes: center;
justify-content: space-between;
`;

const AmountContainer= styled.div `
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount= styled.span `
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-itmes: center;
justify-content: center;
margin: 0px 5px;
`;

const Button= styled.button `
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
fony-weight: 500;
`;

const Product = (props) => {
  console.log('product detail page', props)
  return (
    <Container>
      <Navbar/>
      <Wrapper>
  
          <ImgContainer>
          <Image src = "https://cdnprod.mafretailproxy.com/sys-master-root/h02/hc1/14539671044126/3818_main.jpg_1700Wx1700H"/>
          </ImgContainer>
          <InfoContainer>
              <Title> Pepsi Cola  </Title>
              <Desc> Soft drink Bottle </Desc>
              <Price> $3 </Price>
             <AddContainer>
                 <AmountContainer>
                     <Remove/>
                    <Amount>1</Amount>
                     <Add/>
                 </AmountContainer>
                 <Button>ADD TO CART</Button>
             </AddContainer>
          </InfoContainer>

      </Wrapper>

    </Container>
  )
}

export default Product;
