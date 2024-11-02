import react from "react"

import Layout from "../Layouts/index"
import YellowButton from "../components/YellowButton"

import logoImg from "../assets/logo.png"
import bottomArrowImg from "../assets/bottom_arrow.png"

const LandingPage = () =>{
    return (
        <Layout>
            <div className=" w-full relative">
                <div className="lading-page flex justify-center items-center">
                    <img src={logoImg} className="h-20" alt="" />
                </div>
                <div className="absolute bottom-0 text-white flex justify-center items-center w-full h-50 flex-col pr-5 pl-5">
                    <p className="  text-center">Battle mythical creatures, find magical artifacts, and pump up your heroes' skills while earning in the in-game Play-to-Earn economy.</p>
                    <button className="hidden sm:block"><img src={bottomArrowImg} className="size-4 mt-3 mb-5" alt="" /></button>
                    <div className="w-11/12 h-16 mt-20 mb-5 sm:hidden">
                    <YellowButton content={"Download"} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default LandingPage