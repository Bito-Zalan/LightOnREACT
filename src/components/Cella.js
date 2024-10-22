import React, { useContext } from 'react'
import "./Cella.css"
import { KATTContext } from '../context/kattContext'

function Cella(props) {
  const {katt} = useContext(KATTContext)
    function kattintas(){
        katt(props.index)
    }

    let classnev= "valami";

    if (props.jel) {
        classnev = "fel"
    } else {
        classnev = "le"
    }
  return (
    <div className={classnev} onClick={()=>kattintas()}>{props.jel}</div>
  )
}

export default Cella;
