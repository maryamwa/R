import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Wrapper = styled.div`
padding: 10px 20px;
display : flex;
align-items: center;
justify-content : space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray; 
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input`
border: none;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items = center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;


const Navbar = () => {
  const navigate = useNavigate();
  
  const searchproduct = async () => {
    var value = document.getElementById("gamed").value;

    try {
      const { data } = await axios.get(
        `http://localhost:5000/search/${value}`,
      );
      navigate('/productlist', { state: data });
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div>
      <Wrapper>
        <Left>

          <SearchContainer>
            <Input id="gamed" placeholder="Search" />

            <Search style={{ color: "gray", fontSize: 16 }} />
            <button className="btn btn-dark" onClick={(event) => searchproduct()}>Search</button>

          </SearchContainer>
        </Left>
        <a href="/">
          <Center><img src="https://www.rabbitmart.com/wp-content/uploads/elementor/thumbs/Asset-10-pbt0jiavo8y3y0m7qnt9e3yd60kthgffsxacekimmw.png" alt="logo"></img></Center>
        </a>
        <Right>
          <a href="/cart">
            <MenuItem>

              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined />

              </Badge>

            </MenuItem>
          </a>
        </Right>

      </Wrapper>


    </div>
  );
};

export default Navbar;
