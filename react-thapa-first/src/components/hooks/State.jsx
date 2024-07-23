
import { useState } from "react";

export const State = () => {

    //it will not work so i committed normal way chnage
    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value)
    // }

    // const array = useState();
    // console.log(array);
    // its gives array with 2 element 1st is undefiend(state variable) and 2nd is function(updated)

    const [count, setCount] = useState(0)
    const handleButtonClick = () => {
        setCount(()=>count+1)
    }

    return (
        <>
            <section className="main-div">
                <h1>{count}</h1>
                <button onClick={handleButtonClick} >Increment</button>
            </section>
        </>
    )
}