//import dell'Outlet 
import { Outlet } from "react-router-dom";

//import di MainHeader
import MainHeader from "../components/MainHeader";

//import del Loader
import Loader from "../components/Loader";

const DefaultLayout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
            <Loader />
        </>
    )
}

export default DefaultLayout