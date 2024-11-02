import React from "react";

const YellowButton = ({content}) =>{
    return (
        <button className=" bg-yellow text-black pt-1 pb-1 pr-3 pl-3 rounded-md">
            {content}
        </button>
    )
}

export default YellowButton