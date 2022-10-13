import React, { useEffect, useState } from "react";
import {
    Link,
} from "react-router-dom"
import './sideBarList.scss';
import axios from 'axios'
import { userLogin } from '../../services/userToken';

import Alert from '../Alert';

function SideBarList({ callbackSelected }) {
    const [alertState, setAlertState] = useState([]);

    // methods
    async function getAlertData () {
        const API_URL = process.env.REACT_APP_API_URL;
        const { token } = userLogin();

        // init, using static token, since token are required
        try {
            const { data } = await axios.get(`${API_URL}/api/alert`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            // get response
            const response = data?.data;
            if (!response) throw new Error(); // check if fail

            // set alert state
            setAlertState(response)

        } catch (err) {
            console.error(err)
        }
       
    }

    function onSelected(data) {
        // send into parent
        callbackSelected(data)
    }
    // methods

    useEffect(() => {
        getAlertData();
    }, []);

    return (
       <div className="side_bar_list__container">
            <div className="side_bar_list__back">
                Back
            </div>
            <div className="side_bar_list__notif">
                <nav>
                    <ul>
                        <li>6 Alert</li>
                        <li>2 New</li>
                    </ul>
                </nav>
            </div>
            <div className="side_bar_list__content">
                {Boolean(!alertState.length) && <div style={{ paddingTop: '2rem', textAlign: 'center' }}>Loading...</div>}
                {Boolean(alertState.length) && alertState.map((data, index) => {
                    return (
                        <div key={data.alertId}>
                            <Alert
                                data={data}
                                index={index}
                                onSelected={onSelected}
                            />
                        </div>
                    );
                })}
            </div>
       </div>
    );
}

export default SideBarList