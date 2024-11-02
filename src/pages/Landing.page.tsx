import react from "react"

import Layout from "../Layouts/index"
import YellowButton from "../components/YellowButton"
import Frame from "../components/Frame"
import PhaseCard from "../components/PhaseCard"

import logoImg from "../assets/logo.png"
import bottomArrowImg from "../assets/bottom_arrow.png"
import man1Img from "../assets/baba-disappear.gif.png"
import frame1Img from "../assets/frames/frame1.png"
import frame2Img from "../assets/frames/frame2.png"
import frame3Img from "../assets/frames/frame3.png"
import frame4Img from "../assets/frames/frame4.png"
import frame5Img from "../assets/frames/frame5.png"

const LandingPage = () =>{
    return (
        <Layout>
            <div className=" w-full">
                <div className="lading-page  relative flex justify-center items-center">
                    <img src={logoImg} className="h-20" alt="" />
                        <div className="absolute bottom-0 text-white flex justify-center items-center w-full h-50 flex-col pr-5 pl-5">
                        <p className="  text-center">Battle mythical creatures, find magical artifacts, and pump up your heroes' skills while earning in the in-game Play-to-Earn economy.</p>
                        <button className="hidden sm:block"><img src={bottomArrowImg} className="size-4 mt-3 mb-5" alt="" /></button>
                        <div className="w-11/12 h-16 mt-20 mb-5 sm:hidden">
                        <YellowButton content={"Download"} />
                        </div>
                    </div>
                </div>
                <div className="bg-main pt-5 flex items-center text-white flex-col sm:pt-5">
                    <button className="sm:hidden"><img src={bottomArrowImg} className="size-4 mb-20" alt="" /></button>
                    <img src={man1Img} className="size-20" alt="" />
                    <p className="mt-5 text-center">
                    Experience a unique gaming experience with Helium
                    </p>
                    <Frame title={"Play-to-Earn Economy"} content={"Make money every step of the way! Participate in battles, craft items and sell them on our marketplace."} img={frame1Img} dir={true} />
                    <Frame title={"Open World to Explore"} content={"Explore vast lands, every corner of which hides treasures and dangers. Discover the ancient secrets of the Helium world and take part in epic battles."} img={frame2Img} dir={false} />
                    <Frame title={"Avatars and abilities"} content={"Upgrade your character, improve skills and create unique combinations to become stronger in battles with other"} img={frame3Img} dir={true} />
                    <Frame title={"NFT items and unique artifacts"} content={"All in-game items can be your unique assets. Collect, upgrade and trade NFT artifacts on the open market."} img={frame4Img} dir={false} />
                    <Frame title={"Ever-Changing Gameplay"} content={"Enjoy ever-changing levels as you immerse yourself in this epic dungeon-crawler.Experience a vast collection of Heroes, Spells, Monsters and Game Mechanics!"} img={frame5Img} dir={true} />
                </div>
                <div className="bg-main pt-20 flex items-center text-white flex-col pb-5">
                    <img src={man1Img} className="size-20" alt="" />
                    <p className="mt-5 text-center">
                    ROADMAP
                    </p>
                    <PhaseCard style={1} title={"Phase 1"} items={["Game Development", "Release of Closed Alpha Testing", "Secure Launch Pad"]} />
                    <PhaseCard style={2} title={"Phase 2"} items={["WL & Public Mint", "Secondary Market Listing", "Game launch"]} />
                    <PhaseCard style={3} title={"Phase 3"} items={["Raffles", "Guild Wars", "Challenges", "Events"]} />
                    <PhaseCard style={3} title={"Phase 4"} items={["DAO Launch", "Partnerships and collaborations", "New characters"]} />
                </div>
                <div className="bg-main pt-20 flex items-center text-white flex-col pb-36">
                    <p className="mt-5 text-center">
                    MEET THE TEAM
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default LandingPage