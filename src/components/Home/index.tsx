import React from "react";

import LeftSide from "../LeftSide";
import Main from "../Main";
import RightSide from "../RifghtSide";
import { Container, Layout, Section } from "./HomeStyle";

function Home() {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with UpWork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
}

export default Home;
