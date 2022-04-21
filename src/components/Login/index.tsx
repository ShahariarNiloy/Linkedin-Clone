import React from "react";
import {
  Container,
  Form,
  Google,
  Hero,
  Join,
  Nav,
  Section,
  SignIn,
} from "./LoginStyle";

function Login() {
  return (
    <Container>
      <Nav>
        <a href="">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome To your professional community</h1>
          <img src="./images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="./images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

export default Login;
