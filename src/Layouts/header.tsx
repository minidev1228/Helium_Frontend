
import logoImg from "../assets/logo.png"
import noteImg from "../assets/1.png"
import xImg from "../assets/Vector.png"
import discordImg from "../assets/discord.png"
import menuImg from "../assets/menu.png"

import YellowButton from '../components/YellowButton'

type Props = {
    showMenu: () => void;
};


const Header: React.FC<Props> = ({showMenu}) =>{
    return (
        <div className="w-full h-16 fixed top-0 flex items-center justify-center z-10">
            <div className="w-11/12 sm:w-8/12 h-full flex items-center text-white">
                <div className=" flex flex-row items-center h-full">
                    <img className=" mr-3 h-1/2" src={logoImg} alt="" />
                </div>
                <div className="flex-grow sm:hidden"></div>
                <div className="flex-grow justify-center hidden sm:flex">
                    <a className=" mr-4 ml-4" href="">Home</a>
                    <a className=" mr-4 ml-4" href="">Features</a>
                    <a className=" mr-4 ml-4" href="">Roadmap</a>
                    <a className=" mr-4 ml-4" href="">Team</a>
                </div>
                <div className=" h-full hidden items-center sm:flex">
                    <button className=" mr-2 ml-2"><img src={noteImg} className="size-5" alt="" /></button>
                    <button className=" mr-2 ml-2"><img src={xImg} className="size-5" alt="" /></button>
                    <button className=" mr-5 ml-2"><img src={discordImg} className="size-5" alt="" /></button>
                    <div className="h-9">
                    <YellowButton content={"Download"} />
                    </div>
                </div>
                <button className="sm:hidden" onClick={showMenu}>
                    <img src={menuImg} className="size-5" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Header