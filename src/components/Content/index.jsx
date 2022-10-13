import React from "react";
import {
    Link,
} from "react-router-dom"
import './content.scss';

import Chart from '../Chart'

function Content({ data }) {
    return (
       <div className="content__container">
        <div className="content__title">
            <p>Alert ID { data?.alertId || ''}</p>
            <span>Detected at { data?.createdAt || ''}</span>
        </div>
        <div className="content__main">
            <Chart />

            <br />
            <p>{ data?.machine || ''}</p>
        </div>
       </div>
    );
}

export default Content