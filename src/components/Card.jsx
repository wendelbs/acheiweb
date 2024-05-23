import React from "react";
import './style.css'


export function Card({imagecard, title,description, price, condicion}) {
    return(
        <>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
            <div id="cardHome">
                <div>
                    <img src={imagecard} id="idImage" />
                </div>
                <div id="textCard">
                    <h1 className="titleCard">{title}</h1>
                    <span className="descriptCard">{description}</span><br />
                    <span className="priceCard">{price}</span><br />
                    <span className="conditionCard">{condicion}</span><br />
                </div>
            </div>
        </>
    )
} 