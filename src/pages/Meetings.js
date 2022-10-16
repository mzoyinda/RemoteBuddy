import React from "react";
import { Container, FlexBox } from "./styles";
import { Layout } from "layout/Layout";
import { Link } from "react-router-dom";

const Meetings = () => {
  return (
    <Layout>
      <Container>
        <h3 className="text">
          Do you have any Meeting or Activity you'd like me to remind you of today?
        </h3>
        <FlexBox>
            <Link to="shorturl.at/lqzKV"> 
          <button type="button">
            Yes, I do
          </button>
            </Link>
          <Link to="shorturl.at/lqzKV"> 
        <button type="button" className="white-button">
          No 
        </button>
          </Link>
        </FlexBox>
        <p>Note: Screen continues at Figma</p>
      </Container>
    </Layout>
  );
};



export default Meetings;
