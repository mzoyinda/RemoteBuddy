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
          <button type="button">
            <Link to="/add-meeting"> Yes, I do</Link>
          </button>
        <button type="button" className="white-button">
          <Link to="/music-choice"> No </Link>
        </button>
        </FlexBox>
      </Container>
    </Layout>
  );
};



export default Meetings;
