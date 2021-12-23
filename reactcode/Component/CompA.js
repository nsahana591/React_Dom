import React from 'react';
import CompB from './CompB'
 CompA = () => {
     let name ="Rajinikanth";
let movie="Robo";
    return (
        <div>
        <h2>Component A</h2>
        <hr/> 
        <CompB wish='Good Morning' one='two' two='one....' heroname={name} moviename={movie}/> 
        </div>
    )
}

export default CompA;

