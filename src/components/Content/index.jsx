import React from "react";
import './content.scss';

import Chart from '../Chart'
import AlertDetail from "../AlertDetail";

function Content({ data, callbackList, suspectedReason }) {
    return (
       <div className="content__container">
        <div className="content__title">
            <p>Alert ID { data?.alertId || ''}</p>
            <span>Detected at { data?.createdAt || ''}</span>
        </div>
        <div className="content__main">
            <Chart />
            <AlertDetail
                callbackList={callbackList}
                alert={data}
                suspectedReason={suspectedReason}
            />
        </div>
       </div>
    );
}

export default Content