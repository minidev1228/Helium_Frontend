import react from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) =>{
    return(
        <div className=" w-full">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout