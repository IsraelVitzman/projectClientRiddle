import { Outlet } from "react-router-dom"
import MainMenu from "../payge/mainMenu"
import './layout.css'
import i from "../assets/head.png"

function Layout() {
    

    return (
        <>
            <header id="head">
                <img src={i} alt="logo" width="80px"  height="80px"/>
                <MainMenu/>
               
            </header>
            <main id="main">
                <Outlet/>
            </main>
        </>
    )
}
export default Layout