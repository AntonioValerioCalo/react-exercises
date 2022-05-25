import React from "react";                


export function Sum(props){
    const result = props.number.reduce((numbers, a) => numbers + a, 0)
    return(
        <div>
            <h1>{result}</h1>
        </div>
    )

}