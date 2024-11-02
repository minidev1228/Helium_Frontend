import React from "react";

const YellowButton = ({content}) =>{
    return (
        <button className=" bg-yellow text-black h-full pt-1 pb-1 pr-3 pl-3 rounded-md w-full">
            {content}
        </button>
    )
}

export default YellowButton