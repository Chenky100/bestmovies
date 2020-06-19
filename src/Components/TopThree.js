import React from 'react';
import BigWindow from './BigWindow';
import {HashRouter as Router,Switch,Route , Link} from 'react-router-dom';


export default function TopThree(props) {
    const pres = (i) =>{
        props.navPress(i)
    }
    return (
        <div>
            <h2 onClick={ () => { return( pres(0))}  } > Top 3 Movies</h2>

            <Link to={'/HomePage/bestMovies/' + props.movies[props.ranking[0]].name} > 
                <BigWindow movie={props.movies[props.ranking[0]]} index={props.ranking[0]} navPress={pres}/> 
            </Link>
            <Link to={'/HomePage/bestMovies/' + props.movies[props.ranking[1]].name} > 
                <BigWindow movie={props.movies[props.ranking[1]]} index={props.ranking[1]} navPress={pres}/>
            </Link>
            <Link to={'/HomePage/bestMovies/' + props.movies[props.ranking[2]].name} > 
                <BigWindow movie={props.movies[props.ranking[2]]} index={props.ranking[2]} navPress={pres}/>
            </Link>
       

        </div>
    )
}
