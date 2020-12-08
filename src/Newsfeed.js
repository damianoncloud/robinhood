import React from 'react';
import './Newsfeed.css';
import LineGraph from './LineGraph.js';
import TimeLine from './TimeLine.js';

export default function Newsfeed() {
    return (
        <div className="Newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$114,656</h1>
                        <p>+$44.63 (+ 0.04%) Today </p>
                    </div>
                    <div className="newsfeed__chart">
                        <LineGraph />
                        <TimeLine />
                    </div>
                </div>
            </div>
        </div>
    )
}
