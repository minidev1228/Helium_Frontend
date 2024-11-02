import react from "react"

const Header = () =>{
    return (
        <div className="w-full h-16 fixed top-0 flex items-center justify-center">
            <div className="w-8/12 h-full flex items-center text-white">
                <div className=" flex flex-row items-center">
                    <img className=" mr-3 size-8" src="../assets/logo.png" alt="" />
                    <h3 className=" font-serif">HELIUM</h3>
                </div>
                <div className="flex-grow flex justify-center">
                    <a className=" mr-4 ml-4" href="">Home</a>
                    <a className=" mr-4 ml-4" href="">Features</a>
                    <a className=" mr-4 ml-4" href="">Roadmap</a>
                    <a className=" mr-4 ml-4" href="">Team</a>
                </div>
                <div>
                    <button><img src="../assets/1.png" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Header