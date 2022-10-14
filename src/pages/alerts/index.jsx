import React, { useState, useEffect } from "react";
import './alerts.scss';
import { userLogin } from '../../services/userToken';
import axios from 'axios';

import Header from '../../components/Header';
import SideBarList from '../../components/SideBarList';
import Content from '../../components/Content';

function Alerts() {
    const [selectedData, setSelectedData] = useState({});
    const [isRecallCounter, setIsRecallCounter] = useState(0);
    const [suspectedReasonState, setSuspectedReasonState] = useState([]);

    // this function to make some listeners, so can able to tell child to refetch the api list
    function reCalled() {
        setIsRecallCounter((prev) => prev+1)
    };

    async function getSuspectedReason () {
        const API_URL = process.env.REACT_APP_API_URL;
        const { token } = userLogin();

        // init, using static token, since token are required
        try {
            const { data } = await axios.get(`${API_URL}/api/suspected_reason`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            // get response
            const response = data?.data;
            if (!response) throw new Error(); // check if fail

            // set alert state
            setSuspectedReasonState(response)

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getSuspectedReason();
    }, [])

    return (
        <>
            <Header />
            <div className="alerts__container">
                <div className="alerts__wrapper__content">
                    <div className="alerts__filter">
                        <select id="alerts_select">
                            <option value="">Please choose an option--</option>
                            <option value="CNC Machine">CNC Machine</option>
                            <option value="Milling Machine">Milling Machine</option>
                        </select>
                    </div>
                    <main className="alerts__main__content">
                        <SideBarList
                            callbackSelected={setSelectedData}
                            isReFetch={isRecallCounter}
                        />
                        <Content
                            data={selectedData}
                            callbackList={reCalled}
                            suspectedReason={suspectedReasonState}
                        />
                    </main>
                </div>
            </div>
        </>
    );
}

export default Alerts