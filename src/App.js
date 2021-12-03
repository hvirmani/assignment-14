import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import { SignIn, SignUp } from "./sign.js";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Btn1 />
          <Btn2 />
        </Route>
        <Route path="/signin">
          <SignIn />
          <Btn2 />
        </Route>
        <Route path="/signup">
          <SignUp />
          <Btn1 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
const Btn1 = () => {
  return <Link to="/signin">Sign In</Link>;
};
const Btn2 = () => {
  return <Link to="/signup">Sign Up</Link>;
};
