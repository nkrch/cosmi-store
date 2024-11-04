import { useContext } from "react";
import { AuthContext } from "../../data/context/Context";
export function Profile() {
  const contextData = useContext(AuthContext)[0],
    setContextData = useContext(AuthContext)[1];
  console.log(contextData);
  return <div>Profile</div>;
}
