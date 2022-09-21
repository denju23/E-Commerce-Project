import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ChangePassword() {
    let user_id = localStorage.getItem('id');
    const [chagepass, setPass] = useState(
        {
            user_id: '',
            opass: '',
            npass: '',
            cpass: ''
        }
    )

    let nevigate = useNavigate();

    const handleChange = (event) => {
        setPass({ ...chagepass, [event.target.name]: [event.target.value] })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append('user_id', user_id);
        formdata.append('opass', chagepass.opass);
        formdata.append('npass', chagepass.npass);
        formdata.append('cpass', chagepass.cpass);

        axios({
            method: 'post',
            url: 'https://akashsir.in/myapi/ecom1/api/api-change-password.php',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then(function (response) {
            // handle Success
            console.log(response);
            if (response.data.flag === 1) {
                nevigate('/Signin');
                localStorage.clear();
                var msg = response.data.message;
                console.log('Record Added', msg)
            }

        }).catch(function (err) {
            // handle Error
            console.log(err)
        })

    }
    return (
        <React.Fragment>
            <br /><br /><br />
            <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
                <Form onSubmit={handleSubmit} method='post' style={{ width: '50%' }}>
                    <Form.Group className="mb-3">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="number" name='user_id' required="" onChange={handleChange} placeholder="userId" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control type="password" name='opass' required="" onChange={handleChange} placeholder="Old Password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label> New Password</Form.Label>
                        <Form.Control type="password" name='npass' required="" onChange={handleChange} placeholder="New Password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='cpass' required="" onChange={handleChange} placeholder="Confirm Password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Change password
                    </Button><br /><br /><br />
                </Form>
            </div>
            <br /><br /><br /><br />
            
        </React.Fragment>
    )
}

export default ChangePassword;