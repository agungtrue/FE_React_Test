import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { userLogin } from '../../services/userToken';
import './alertDetail.scss';

function AlertDetail({ alert, callbackList, suspectedReason }) {

    // state for alert can be change/update
    const [alertState, setAlertState] = useState({
        comments: '',
        suspectedReason: '634931da6fa6954228e7bd76', // default
        action: '',
    });

    useEffect(() => {
        setAlertState((prev) => ({...prev, ...alert }))
    }, [alert])

    function handleChangeState(e) {
        const { name, value } = e.target;
        setAlertState(prev => ({...prev, [name]: value}));
    }

    async function handleSubmit() {
        try {
            const API_URL = process.env.REACT_APP_API_URL;
            const { token } = userLogin();
            const id = alertState._id;

            // example create using some axios instance
            const call = axios.create({
                headers: {
                  Authorization : `Bearer ${token}`
                }
            });

            // start request
            const { data } = await call.patch(`${API_URL}/api/alert/${id}`, alertState);

            // get response
            const response = data?.data;
            if (!response) throw new Error(); // check if fail

            toast('Successfully updated')

            // this is callback for alert api list
            callbackList()
        } catch(e) {
            console.error(e)
        }
    }

    // action list
    const actionList = [
        {
            id: 1,
            value: 'Pass',
        },
        {
            id: 2,
            value: 'Fail',
        }
    ];

    return (
       <div className="alert_detail__container">
        <Form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <FormGroup>
                <label>
                    Equipment
                </label>
                <br />
                <span id="equipment">
                    { alert?.machine || '' }
                </span>

                <br />
                <label>
                    Suspected Reason
                </label>
                <br />
                
                <Input
                    id="reason"
                    name="suspectedReason"
                    type="select"
                    value={alertState.suspectedReason}
                    onChange={(e) => handleChangeState(e)}
                >
                    {suspectedReason.map((reason) => (
                        <option value={reason._id} key={reason._id}>{ reason.reason_name}</option>
                    ))}
                </Input>

                <br />
                <label>
                    Action required
                </label>
                <br />
                <Input
                    id="action"
                    name="action"
                    type="select"
                    onChange={(e) => handleChangeState(e)}
                    value={alertState.action}
                >
                    {actionList.map((action) => (
                        <option value={action.value} key={action.id}>{ action.value}</option>
                    ))}
                </Input>

                {/* comment */}
                <br />
                <Label for="textarea">
                    Comments
                </Label>
                <Input
                    id="textarea"
                    name="comments"
                    type="textarea"
                    width={30}
                    value={alertState.comments}
                    onChange={(e) => handleChangeState(e)}
                />

                <br />
                <Button id="submit" color="primary" type="submit"> Submit </Button>

                {/* ToastContainer */}
                <ToastContainer />
            </FormGroup>
        </Form>
       </div>
    );
}

export default AlertDetail;
