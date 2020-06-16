import React from 'react'

export default function BigWindow(props) {
    var sectionStyle = {

        backgroundImage:  "url(" + props.movie.img + ")"
      };

      const handle = () =>{
        props.navPress(props.index)
      }
    return (
        <div onClick={handle}  style={ sectionStyle } className="bigMovieWin">
       
        <h4 >{props.movie.name}</h4><br></br>
        <div className="bwScore"> {(props.movie.score / props.movie.votes).toFixed(2)} </div>
        {/* <span> {props.movie.description}</span> */}
            
        </div>
    )
}
