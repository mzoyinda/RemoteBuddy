import React from "react";
import { Container, FlexBox } from "./styles";
import { Layout } from "layout/Layout";
import { Link } from "react-router-dom";

const Meetings = () => {
  return (
    <Layout>
      <Container>
        <h3 className="text">
        How do you like to work, Jane ?
        </h3>
        <FlexBox>
          <button type="button">
            <Link to="/add-meeting"> With Music</Link>
          </button>
        <button type="button" className="white-button">
          <Link to="/pick-library"> Without Music </Link>
        </button>
        </FlexBox>
      </Container>
    </Layout>
  );
};



export default Meetings;
