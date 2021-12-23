import React from 'react'
import CompB from './'
let CompB = (props) => {   
    return (
        <>
         <h1>Component B</h1> 
         <pre>{JSON.stringify(props)}</pre> 
         <h2>heroname:{props.name}</h2>
         <h2>moviename:{props.movie}</h2>
        </>
    )
}

export default CompB;
