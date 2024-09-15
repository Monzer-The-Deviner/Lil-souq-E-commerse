import { useSelector } from "react-redux";
import { RootState } from "../store";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";

const MainPage = () => {
    const user= useSelector((state:RootState)=>state.auth.user)
    return ( 
        <>
            {user ?
                <HomePage />
                :
                <LandingPage />
            }
        </>
     );
}
 
export default MainPage;