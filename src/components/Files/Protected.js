import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
const Protected = ({children }) => {
if (!auth.currentUser) {
return <Navigate to="/Login" replace />;
}
return children;
};
export default Protected;

