import { useNavigate, Route, Navigate, Outlet, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/slices/user/userSlice";
import { selectToken } from "../store/slices/user/tokenSlice";

// recent change #1

export const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const token = dispatch(selectToken);

  let auth = token ? { token: true } : { token: false };

  return (
    <Routes>
      <Route>{!auth.token ? <Navigate to="/" replace /> : <Outlet />}</Route>
    </Routes>
  );
};

export const ProtectedRoute = ({ children, ...rest }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
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
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !user ? children : navigate("/feed");
      }}
    />
  );
};
