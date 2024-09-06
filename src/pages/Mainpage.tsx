import { useSelector } from "react-redux";
import { RootState } from "../store";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";

const MainPage = () => {
    const isLoggedIn= useSelector((state:RootState)=>state.auth.isLoggedIn)
    return ( 
        <>
            {isLoggedIn ?
                <HomePage />
                :
                <LandingPage />
            }
        </>
     );
}
 
export default MainPage;