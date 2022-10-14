import React from "react";
import './alert.scss';

function Alert({ data: alert, index, onSelected }) {

    function handleOnClick(data) {
        onSelected(data)

        // handle dom for active class
        // get element
        const isActiveElement = document.querySelectorAll('.alert__container')

        // remove all class
        isActiveElement.forEach((data) => data.classList.remove('active'))
        
        // adding new one
        isActiveElement[index].classList.add('active');
    };

    return (
       <div
            className={`alert__container`}
            onClick={() => handleOnClick(alert)}
        >
        <div className="alert__id__type">
            <div className="alert__id">
                <span className="alert__notif active">
                    oo
                </span>
                ID { alert.alertId }
            </div>
            <div className="alert__type">
                { alert.anomaly }
            </div>
        </div>
        <div className="alert__info">
            <div className="alert__label">
                Unknown Anomally
            </div>
            <div className="alert__created_at">
                {/* Detected at 2021-04-22 20:10:04 */}
                Detected at { alert.createdAt }
            </div>
            <div className="alert__name">
                { alert.machine }
            </div>
        </div>
       </div>
    );
}

export default Alert;
