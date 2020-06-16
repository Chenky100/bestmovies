import React from 'react'
import Rate from './Rate'

export default function Movie(props) {
    return (
        <div>
                            <h3>{props.movie.name}</h3> 
                            <h6>({props.movie.year})</h6>

                <div className="row">
                    <div className="col-3">
                    
                    <span className="rating"> {(props.movie.score / props.movie.votes).toFixed(2)} </span>/5  ({props.movie.votes})<br></br>
                    <img src={props.movie.img}></img>
                    </div>
                <div className="col-9">
                <br/><br/><br/><br/><br/>
                <p className="para">{props.movie.description}</p>
                </div>
            </div>
           
            
            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="ratebox ">
                rate this movie:
                <br/>
                <br/>
                <Rate rate={props.rate}/>
            </div>

        </div>
    )
}
