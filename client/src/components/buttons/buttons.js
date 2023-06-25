import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import './buttons.css'

export const ArrowCircle = () => {
    return (
        <div className="run_circle">
            <svg className='circleSVG'>
                <circle className='circle' cx="18px" cy="18px" r="17px" />
                <circle className='circle_run' cx="18px" cy="18px" r="17px" />
            </svg>
            <span className='arrow' ><MdDoubleArrow /></span>
        </div>
    )
}

export const LearnMore = () => {
    return (
        <div className="LearnMore">
            <Link to="" className="LearnMore_link">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Learnmore...
            </Link>
        </div>
    )
}