import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


function Signup() {
    let nevigate = useNavigate();

    const [data, setData] = useState({
        user_name: '',
        user_email: '',
        user_password: '',
        user_gender: '',
        user_address: '',
        user_mobile: '',
        user_errors: {}
    });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: [event.target.value] })
    };

    const formvalidation = () => {
        const { name, password, mobile } = data;
        let isValid = true;
        const errors = {}//blank object


        if (!name) {
            errors.name = 'Enter Name'
            isValid = false;
        }
        else if (name.length < 3) {
            alert('Name Should be Greater than 3 Alphabets')
        }
        else if (name.length > 10) {
            alert('Name Should be less than 10 Alphabets')
        }
        else if (name === (/[0-9]/g)) {
            alert('Name Should be Alphabets')
        }



        if (!mobile) {
            errors.mobile = 'Enter Mobile'
            isValid = false;
        }
        else if (mobile.length > 10) {
            alert('Mobile Number Could Not be Greater than 10')
        }

        if (!password) {
            errors.password = 'Enter Password'
            isValid = false;
        }

        else if (password.length < 8) {
            alert('Password Must contain at least 8 or more characters')
        }

        setData({ errors });
        return isValid
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = formvalidation();

        if (isValid) {
            setData({ user_name: '', user_email: '', user_password: '', user_gender: '', user_mobile: '', user_address: '', errors: {} });
            localStorage.setItem('Login Data', JSON.stringify(data))
        }

        const formdata = new FormData();
        
        formdata.append('user_name', data.user_name);
        formdata.append('user_email', data.user_email);
        formdata.append('user_password', data.user_password);
        formdata.append('user_gender', data.user_gender);
        formdata.append('user_mobile', data.user_mobile);
        formdata.append('user_address', data.user_address);

      

    //     axios({
    //         method: 'post',
    //         url: 'https://akashsir.in/myapi/ecom1/api/api-signup.php',
    //         data: formdata,
    //         headers: { 'Content-Type': 'multipart/form-data' },
    //     }).then(function (response) {
    //         // handle Success
    //         console.log(response);
    //         if (response.data.flag === 1) {
    //             nevigate('/Signin');
    //             var msg = response.data.message;
    //             console.log('Record Added', msg)
    //         }

    //     }).catch(function (response) {
    //         // handle Error
    //         console.log(response)
    //     })
     }

    return (
        <React.Fragment>
            <br />
            <h3 style={{ textAlign: 'center' }}>Sign Up Form</h3><br /><br />
            <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
                <Form onSubmit={handleSubmit} method='post' style={{ width: '50%' }}>
                    <Form.Group className="mb-3" controlId="formBasicusername">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="username" name='user_name' required="" onChange={handleChange} placeholder="username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='user_email' required="" onChange={handleChange} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='user_password' required="" onChange={handleChange} placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicgender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="Gender" name='user_gender' required="" onChange={handleChange} placeholder="Gender" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicmobilenumber">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="mobilenumber" name='user_mobile' required="" onChange={handleChange} placeholder="Mobile Number" />
                    </Form.Group>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                        <textarea className="form-control" name='user_address' required="" onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button><br /><br /><br />
                </Form>
            </div>

        </React.Fragment>
    )
}

export default Signup;