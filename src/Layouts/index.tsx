import { useState, ReactNode } from "react"

import Header from "./header"
import Footer from "./footer"
import YellowButton from "../components/YellowButton"

import closeImg from "../assets/close.png"
import discordImg from "../assets/discord.png"
import noteImg from "../assets/1.png"
import xImg from "../assets/Vector.png"

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = ({children}) =>{

    const [isMenuShown, setIsMenuShown] = useState(false);
    
    const closeMenu = () =>{
        setIsMenuShown(false);
    }

    const showMenu = () =>{
        setIsMenuShown(true);
    }

    return(
        <div className=" w-full relative">
            <Header showMenu={showMenu} />
            <main>{children}</main>
            {
                isMenuShown ? <div className="fixed top-0 right-0 fixed bg-side w-10/12 h-full z-20 flex items-center flex-col">
                    <button className="absolute top-10 right-10" onClick={()=>{closeMenu()}}>
                        <img src={closeImg} className="size-5" alt="" />
                    </button>
                    <div className="w-8/12 mt-32 flex flex-col text-white">
                        <button className="mt-10 flex items-center"><img src={noteImg} className="size-5 mr-3" alt="" /><p>Whitepaper</p></button>
                        <button className="mt-10 flex items-center"><img src={xImg} className="size-5 mr-3" alt="" /><p>X (Twitter)</p></button>
                        <button className="mt-10 flex items-center"><img src={discordImg} className="size-5 mr-3" alt="" /><p>Discord</p></button>
                    </div>
                    <div className="w-10/12 mt-12 h-16">
                    <YellowButton content={"Download"} onClickHandler={()=>{}}/>
                    </div>
                </div> : ""
            }
            <Footer />
        </div>
    )
}

export default Layout