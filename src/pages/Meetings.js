import React from "react";
import { Container, FlexBox } from "./styles";
import { Layout } from "layout/Layout";

const Meetings = () => {
  return (
    <Layout>
      <Container>
        <h3 className="text">
          Do you have any Meeting or Activity you'd like me to remind you of today?
        </h3>
        <FlexBox>
            <a href="shorturl.at/fFQ46"> 
          <button type="button">
            Yes, I do
          </button>
            </a>
          <a href="shorturl.at/lpGTX"> 
        <button type="button" className="white-button">
          No 
        </button>
          </a>
        </FlexBox>
        <p>Note: Screen continues at Figma</p>
      </Container>
    </Layout>
  );
};



export default Meetings;
