import { connect } from "react-redux";
import { signInAPI } from "../../redux/actions/actions";
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
import { Navigate } from "react-router";

function Login(props: any) {
  return (
    <Container>
      {props.user && <Navigate to="/home" />}
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
          <Google onClick={() => props.signIn()}>
            <img src="./images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
