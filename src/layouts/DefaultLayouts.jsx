//import dell'Outlet 
import { Outlet } from "react-router-dom";

//import useGlobal
import { useGlobal } from "../context/GlobalContext";

//import di MainHeader
import MainHeader from "../components/MainHeader";

//import del Loader
import Loader from "../components/Loader";

const DefaultLayout = () => {

    //importiamo gli elementi che ci servono tramite la useContext
    const { isLoading } = useGlobal();

    return (
        <>
            <MainHeader />
            <Outlet />
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout