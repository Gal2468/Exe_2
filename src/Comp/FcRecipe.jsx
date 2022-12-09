import React from 'react'

export default function FcRecipe(props) {
  return (
      <div className='col-4' style={{padding:5, border: 'dashed green 2px'}}>
      <img src={props.imgUrl} alt="תמונה של מנה" style={{width:250, height:300}} />
      <h1>{props.name}</h1>
      <p> {props.desc} </p>
      <button onClick={() => {props.sendData(props.name,props.btnTxt)}}> {props.btnTxt} </button>
      </div>
  )
}
