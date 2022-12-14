import React from "react";
import styled from "styled-components";
import Logo from "assets/maxi-logo.png";
import Spark from "assets/lightening.png";
import Sun from "assets/sun.png";
import Remote from 'assets/onboard.png';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container    className="box"    >
        
      <SideBar>
        <img src={Spark} alt="spark" className="spark" />
        <img src={Logo} alt="maxi-logo" className="logo" />
      </SideBar>
      <MainField>
        <motion.div
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{
               duration: 0.8,
               delay: 0.5,
               ease: [0, 0.71, 0.2, 1.01]
             }}
        >

          <Hello>
            <p>HELLO, Remote Worker .</p>
            <img src={Sun} alt="sun" className="sun" />
          </Hello>
          <h1>Welcome to Remote Buddy!</h1>
          <Action>
            <p>Lets help you track your day</p>
              <Link to='/welcome'>
                  <button>
                      Lets go ! 
                  </button>
                </Link>
          </Action>
          <ImgContainer>
            <img src={Remote} alt="lady working on laptop" />
          </ImgContainer>
        </motion.div>
      </MainField>
    </Container>
  );
};

const Container = styled.div`
display: flex;
`;

const SideBar = styled.div`
position: relative;
  width: 30%;
  height: 100vh;
  background: #76bf4d;
  border-radius: 0px 0px 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    width: 75%;
  }

  .spark {
    position: absolute;
    width: 25%;
    right: 0;
    top: 0;
  }
`;

const MainField = styled.div`
background-color: #FAFAFA;
width: 70%;
padding-left: 3rem;
padding-top: 5rem;

h1{
font-weight: 600;
font-size: 1.4rem;
margin: 1rem 0;
}
`;

const Hello = styled.div`
display: flex;
align-items: center;
p{
font-weight: 400;
font-size: 1.1rem;
color: 000000;
margin-right: 0.5rem;
}
img{
    width: 32px;
}
`;

const Action = styled.div`
display: flex;
align-items: center;
font-size: 1rem;

button{
background: #76BF4D;
border: transparent;
padding: 0.5rem 2.3rem;
margin-left: 1rem;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
cursor: pointer;

a {
  color: white;
  
  }
}
`;

const ImgContainer = styled.div`
text-align: center;
img{
    width: 50%;
}
`;

export default Login;
