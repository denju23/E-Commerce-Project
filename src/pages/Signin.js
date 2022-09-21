import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Signin() {
    let nevigate = useNavigate();
    const [user, setUser] = useState({
        user_email: '',
        user_password: ''
    })

    const handleChange = (event) => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: [event.target.value] })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let formdata = new FormData();
        formdata.append('user_email', user.user_email);
        formdata.append('user_password', user.user_password);
        axios.post('https://akashsir.in/myapi/ecom1/api/api-login.php', formdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === 1) {
                    nevigate('/Home');
                    localStorage.setItem('email', user.user_email);
                    localStorage.setItem('id', response.data.userdata.user_id);
                    localStorage.setItem('name', response.data.userdata.user_name);
                    localStorage.setItem('object', JSON.stringify(response));
                    var msg = response.data.message;
                    console.log('User Logged in Successfully  ' + msg);
                }
            }).catch(function (err) {
                console.log(err)
            })
    }

    return (
        <React.Fragment>
            <br /><br />
            <h1 style={{ textAlign: 'center' }}>Sign in Form</h1>
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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required name='user_password' onChange={handleChange} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <br />
            <p style={{ textAlign: 'center' }}>Not a Registered User? <Link to='/Signup'>Sign-Up</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/ForgotPass'>Forgot Password?</Link></p><br /><br /><br />
        </React.Fragment>
    )
}

export default Signin;