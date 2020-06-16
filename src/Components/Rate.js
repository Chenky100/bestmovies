import React from 'react'

export default function Rate(props) {
    const buttonClick = (val) =>{
        props.rate(val);
        
    }
    return (
        <div className="rate">
            <div className="row ">
            <div className="col-2">
                </div> 
                <div className="col-2">
                    <button className="rateButton" onClick= {() => {return( buttonClick(1) )}} > 1 </button>
                </div>
                <div className="col-2">
                    <button className="rateButton" onClick={() => {return( buttonClick(2) )}}> 2 </button>
                </div>
                <div className="col-2">
                    <button className="rateButton" onClick={() => {return( buttonClick(3) )}}> 3 </button>
                </div>
                <div className="col-2">
                    <button className="rateButton" onClick={() => {return( buttonClick(4) )}}> 4 </button>
                </div>
                <div className="col-2">
                    <button className="rateButton" onClick={() => {return( buttonClick(5) )}}> 5 </button>
                </div> 
                
                
            </div>
        </div>
    )
}
