import React from 'react'
import Footer from '../componants/Footer'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../service/allApi';


function Login() {
    const navigate = useNavigate();

    const [userData, setuserData] = useState({

        email: "",
        password: ""
    });

    const getAndsetuserdatainputs = (e) => {
        const { name, value } = e.target;
        setuserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = userData;

        if (!email || !password) {
            alert('Please fill the form');
        } else {
            try {
                const data = {

                    email,
                    password
                };

                // API call
                const response = await login(data);

                console.log(response);

                if (response.status === 200) {

                    const user = response.data.existingUser;
                    setuserData({

                        email: "",
                        password: ""
                    });
                    navigate('/');
                    localStorage.setItem('user', JSON.stringify(user));
                    window.location.reload();
                } else {
                    alert('Failed to register');
                }
            } catch (error) {

                console.log('unable to login');


            }
        }
    };
    return (
        <>



            <section className="py-3 py-md-5 py-xl-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-5">
                                <h2 className="display-5 fw-bold text-center">LOG IN</h2>

                                <p className="text-center m-0">
                                    Don't have an account? <Link to={'/register'}> Sign up </Link>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 col-xl-8">
                            <div className="row gy-5 justify-content-center">

                                <div className="col-12 col-lg-5">
                                    <Form onSubmit={handleSubmit} action="#!">
                                        <div className="row gy-3 overflow-hidden">

                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control border-0 border-bottom rounded-0"
                                                        name="email"
                                                        id="email"
                                                        placeholder="name@example.com"
                                                        required

                                                        onChange={getAndsetuserdatainputs} value={userData.email}
                                                    />
                                                    <label htmlFor="email" className="form-label">
                                                        Email
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control border-0 border-bottom rounded-0"
                                                        name="password"
                                                        id="password"
                                                        placeholder="Password"
                                                        required
                                                        onChange={getAndsetuserdatainputs} value={userData.password}
                                                    />
                                                    <label htmlFor="password" className="form-label">
                                                        Password
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">

                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-lg btn-dark rounded-0 fs-6" type="submit">
                                                        LogIn
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Login