import React from "react";

const Card = ({titulo, imagen, texto})=>{
    let styleImg ={
        width: "100%",
        aspect_ratio: "1/1",
        object_fit: "cover"
    }
    let styleDiv ={
        height:"500px"
    }

    return (
        <div className="card" style={styleDiv} >
            <img src={imagen} className="card-img-top" alt="..." style={styleImg}></img>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
            </div>
            <div className="card-footer">
                    <a href="#" className="btn btn-primary">Enviar</a>
            </div>
        </div>
    )
}

export default Card;