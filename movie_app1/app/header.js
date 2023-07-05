import React from 'react';
import Movie from "./footer"
import MyComponent from './image';

const Grid=()=>{
    return(
           <>
            <div className="ro">
                <div className="g"> <MyComponent /> </div>
                <div className="g1">Movie Hub</div>
                <div className="g2">Watch</div>
                <div className="g3">Add Movie</div>
            </div>
            <div className="col1"></div>
            <div className="col2"></div>
            <div className="col3">Watch</div>
            <Movie />
           </>
    )
};
export default Grid; 
