import react from "react"

import "./styles.css"

const Frame = ({title, content, img, dir}) =>{
    return (
        <div className={dir?"frame flex-col sm:flex-row ":"frame flex-col sm:flex-row-reverse"}>
            <img src={img} className="ml-5 mr-5 w-52" alt="" />
            <div>
                <h2 className={dir?"text-yellow mb-3 text-xs sm:text-left":"text-yellow mb-3 text-xs sm:text-right"}>{title}</h2>
                <p className={dir?"text-xs sm:text-left":"text-xs sm:text-right"}>{content}</p>
            </div>
        </div>
    )
}

export default Frame