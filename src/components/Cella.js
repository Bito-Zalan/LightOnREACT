import React from 'react'
import "./Cella.css"

function Cella(props) {
    function katt(){
        props.katt(props.index)
    }

    let classnev= "valami";

    if (props.jel) {
        classnev = "fel"
    } else {
        classnev = "le"
    }
  return (
    <div className={classnev} onClick={()=>katt(props.index)}>{props.jel}</div>
  )
}

export default Cella;
