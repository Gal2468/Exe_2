import React from 'react'
import FcRecipe from './FcRecipe'
import ArrRecipe from './ArrRecipe'

export default function (props) {
    const getData = (name, btnTxt) => {
        { props.ReciveData(name, btnTxt) }
    }

    return (
        <div className='container'>
            <div className='row'>
                <h1> Recipes </h1>
                <h2> Recipes made: </h2>
                {props.Arrfood.map((dish) =>
                    <FcRecipe sendData={getData} imgUrl={dish.imgUrl} name={dish.name} desc={dish.desc} btnTxt={"Prepare dish!"} />
                )}
            </div>
            <div className='row' >
                <h1 style={{ display: props.isDisplay }}>Recipes made: {props.counter} <br /> Ready to eat!</h1>
                {props.arrFoodDone.map((dish) =>
                    <FcRecipe sendData={getData} imgUrl={dish.imgUrl} name={dish.name} desc={dish.desc} btnTxt={"Eat!"} />
                )}
            </div>
        </div>
    )
}
