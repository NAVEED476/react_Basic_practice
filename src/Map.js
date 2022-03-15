import React from 'react'

function Map() {


    let arr = ["n","as","f","ej","jsjfh","ydhds","hsjeues","jduska"]


    let arr1 = [
        {
            name:"na",
            id:0
        },
        {
            name:"nav",
            id:1
        },
        {
            name:"nave",
            id:2
        },
        {
            name:"navee",
            id:3
        },
        {
            name:"naveed",
            id:4
        },
        {
            name:"n",
            id:5
        }
    ]



  return (
    <div>
        
        {/* {
            arr.map((value,index)=><li key={index}>{value}</li>)
        } */}

        {
            arr1.map(
                (value) => <li key={value.id}>{value.name}</li>
                )
        }
    </div>
  )
}

export default Map