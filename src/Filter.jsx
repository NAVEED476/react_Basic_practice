import React from 'react'

export const Filter = () => {

    const arr = ["n","as","f","ej","jsjfh","ydhds","hsjeues","jduska"]

    const filterd = arr.filter(value => value.includes("j"))
    return (
        <div>
            {
                filterd.map((value,index)=><li key={index}>{value}</li>)
            }
        </div>
    )
}