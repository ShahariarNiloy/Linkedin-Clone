import React from "react";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LeftSide from "../LeftSide";
import Main from "../Main";
import RightSide from "../RightSide";
import { Container, Layout, Section } from "./HomeStyle";

function Home() {
  const user = useSelector((state: any) => state?.userState?.user);
  return (
    <Container>
      {!user && <Navigate to="/" />}
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
