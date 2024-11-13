import { useNavigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const user = useSelector(state.user);
const navigate = useNavigate();

// recent change #1

export const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return user ? children : navigate("/");
      }}
    />
  );
};

export const AuthRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !user ? children : navigate("/feed");
      }}
    />
  );
};
