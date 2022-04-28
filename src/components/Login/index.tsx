import { useDispatch, useSelector } from "react-redux";
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

function Login() {
  const user = useSelector((state: any) => state?.userState?.user);
  const dispatch: any = useDispatch();
  return (
    <Container>
      {user && <Navigate to="/home" />}
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
          <Google onClick={() => dispatch(signInAPI())}>
            <img src="./images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

export default Login;
