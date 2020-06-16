import React,{useState} from 'react'
import TopThree from './TopThree'
import { Route, Router, Switch } from 'react-router-dom'
import Movie from './Movie'

export default function BestMovies(props) {
    
   
    const rate = (val) =>{
        let tmp = props.currMovieIndx;
        props.rate(tmp,val)
        console.log(" curr movie: "+ props.movies[props.currMovieIndx].name);
        
    }
    
    return (
        <div>
            <div className="main1">
                <TopThree ranking={props.ranking} navPress={props.navPress} movies={props.movies}/>
            </div>

            <div className="main2" >
                    <div className="row mainrow">

                        <div className="col-10">
                           <Movie rate={rate} movie={props.movies[props.currMovieIndx]}/>
                        </div>
                        <div className="col-2">
                            {props.movies.map((movie,index)=>{
     
                                return (
                                    <div className="smallwin"><button className="navButton" onClick={() => { return( props.navPress(index)  )}}> <h4> { movie.name } </h4> </button> </div>
                                )
                            })}

                        </div>
                    </div>
                

            </div>
        </div>
    )
}
