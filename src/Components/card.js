import React from "react";

const Cards = ({ item, handleClick }) => {
    const { title, author, price, img } = item;
    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>Precio - {price} $ </p>
                <br />
                <button onClick={() => handleClick(item)}>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default Cards;