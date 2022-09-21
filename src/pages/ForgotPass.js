import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from 'bootstrap';

function ForgotPass() {
    const notify = () => toast("Password send on Email Id!");
    let nevigate = useNavigate();
    const [user, setUser] = useState({
        user_email: ''
    })

    const handleChange = (event) => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: [event.target.value] })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let formdata = new FormData();
        formdata.append('user_email', user.user_email)
        axios({
            method: 'post',
            url: 'https://akashsir.in/myapi/ecom1/api/api-forgot-password.php',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then(function (response) {
            console.log(response);
            if (response.data.flag === 1) {
                nevigate('/Signin')
                var msg = response.data.message;
                console.log('', msg)
                alert('Password  Send on mail Id : ' + user.user_email);
            }
        }).catch(function (err) {
            console.log(err)
        })


    }

    return (
        <React.Fragment>
            <br /><br />
            <h1 style={{ textAlign: 'center' }}>Forgot Password</h1>
            <br /><br />
            <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
                <Form onSubmit={handleSubmit} method='post'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" required name='user_email' onChange={handleChange} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Forgot Password
                    </Button>
                </Form>
            </div>
            <br />
            <p style={{ textAlign: 'center' }}>Not a Registered User? <Link to='/Signup'>Sign-Up</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/ForgotPass'>Forgot Password?</Link></p><br /><br /><br />
        </React.Fragment>
    )
}

export default ForgotPass;