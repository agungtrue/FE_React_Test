import React, { useState } from "react";
import {
    Link,
} from "react-router-dom";
import './alerts.scss';

import Header from '../../components/Header';
import SideBarList from '../../components/SideBarList';
import Content from '../../components/Content';

function Alerts() {
    const [selectedData, setSelectedData] = useState({});
    
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
                        />
                        <Content data={selectedData} />
                    </main>
                </div>
            </div>
        </>
    );
}

export default Alerts