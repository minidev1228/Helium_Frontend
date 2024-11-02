import react from "react"

import logoImg from "../assets/logo.png"
import noteImg from "../assets/1.png"
import xImg from "../assets/Vector.png"
import discordImg from "../assets/discord.png"

import YellowButton from '../components/YellowButton'

const Header = () =>{
    return (
        <div className="w-full h-16 fixed top-0 flex items-center justify-center">
            <div className="w-8/12 h-full flex items-center text-white">
                <div className=" flex flex-row items-center h-full">
                    <img className=" mr-3 h-1/2" src={logoImg} alt="" />
                </div>
                <div className="flex-grow flex justify-center">
                    <a className=" mr-4 ml-4" href="">Home</a>
                    <a className=" mr-4 ml-4" href="">Features</a>
                    <a className=" mr-4 ml-4" href="">Roadmap</a>
                    <a className=" mr-4 ml-4" href="">Team</a>
                </div>
                <div className=" h-full flex items-center">
                    <button className=" mr-2 ml-2"><img src={noteImg} className="size-5" alt="" /></button>
                    <button className=" mr-2 ml-2"><img src={xImg} className="size-5" alt="" /></button>
                    <button className=" mr-5 ml-2"><img src={discordImg} className="size-5" alt="" /></button>
                    <YellowButton content={"Download"} />
                </div>
            </div>
        </div>
    )
}

export default Header