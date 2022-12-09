import React, { Component } from 'react'
import FcRecipe from './FcRecipe'
import ArrRecipe from './ArrRecipe'
import FcRecipes from './FcRecipes';

export default class
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodToEat: ArrRecipe,
            foodEaten: [],
            counter: 0,
        };

    }


    ReciveData = (name, btnTxt) => {

        if (btnTxt == "Prepare dish!") {

            let found = this.state.foodToEat.filter(dish => name != dish.name) //המערך בלי האובייקט
            let newArr = this.state.foodToEat.filter(dish => name == dish.name) // מערך חדש עם האובייקט
            console.log(newArr)
            let newArr1 = [...this.state.foodEaten,
            newArr[0]
            ];


            this.setState(
                {
                    foodToEat: found,
                    foodEaten: newArr1,
                    counter: newArr1.length
                }
            )

        }

        else if (btnTxt == "Eat!") {

            let found = this.state.foodEaten.filter(dish => name != dish.name) //המערך בלי האובייקט
            let newArr = this.state.foodEaten.filter(dish => name == dish.name) // מערך חדש עם האובייקט           
            let newArr1 = [...this.state.foodToEat,
            newArr[0]
            ];
            this.setState(
                {
                    foodToEat: newArr1,
                    foodEaten: found,
                    counter: found.length,
                }
            )
        }
        //alert(name);


    }

    render() {
        return (
            <div className='container'>
                <FcRecipes ReciveData={this.ReciveData} Arrfood={this.state.foodToEat} arrFoodDone={this.state.foodEaten} counter={this.state.counter} isDisplay={this.state.counter > 0 ? 'block' : 'none'} />
            </div>
        )
    }
}
