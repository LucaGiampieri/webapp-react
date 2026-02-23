//import dell'Outlet 
import { Outlet } from "react-router-dom";

//import di MainHeader
import MainHeader from "../components/MainHeader";

const DefaultLayout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )
}

export default DefaultLayout