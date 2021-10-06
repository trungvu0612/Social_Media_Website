import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../contexts/authContext";

const CheckRedirect = () => {
  const {
    authState: { authLoading },
  } = useContext(AuthContext);

  const history = useHistory();
  if (authLoading) {
    history.push("/login");
  }
};
export default CheckRedirect;
