import React from "react";
import {
    Link,
} from "react-router-dom";
import './dashboard.scss';

import Header from '../../components/Header';

function Dashboard() {
    return (
        <>
            <Header />
            <div className="dashboard__container">
                Dashboard
            </div>
        </>
    );
}

export default Dashboard;