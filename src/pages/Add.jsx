import React, { useState } from 'react';
import { Form } from 'react-bootstrap'; // Assuming you're using react-bootstrap
import { newStudent } from '../service/allApi';
import { useNavigate } from 'react-router-dom';
import Heder from '../componants/Heder';
import Footer from '../componants/Footer';

function Add () {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [place, setPlace] = useState('');
    const [address, setAddress] = useState('');
    const [department, setDepartment] = useState('');
    const [errors, setErrors] = useState({});


    const navigate= useNavigate()

    const validate = () => {
        let errors = {};

        if (!name) {
            errors.name = 'Name is required';
        }

        if (!email) {
            errors.email = 'Email is required';
        } else if (!email) {
            errors.email = 'Email address is invalid';
        }

        if (!phone) {
            errors.phone = 'Phone is required';
        } else if (!phone) {
            errors.phone = 'Phone number is invalid';
        }

        if (!place) {
            errors.place = 'Place is required';
        }

        if (!address) {
            errors.address = 'Address is required';
        }

        if (!department) {
            errors.department = 'Department is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {


            try {
                const data = {
                    name ,email ,phone ,place ,address , department
                };


                console.log(data);

                // API call
                const response = await newStudent(data)

                console.log(response);

                if (response.status === 200) {

                    navigate('/')
                   
                } else {
                    alert('Failed to register');
                }
            } catch (error) {


                alert('Registration failed');
            }


        
        
        


        }
    };

    return (
        <>
        
        <Heder/>
            <div className="container contact-form">
                <Form onSubmit={handleSubmit}>
                    <h3>Add Student</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="form-control" 
                                    placeholder="Name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                                {errors.name && <p className="error text-danger">{errors.name}</p>}
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                {errors.email && <p className="error text-danger">{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="phone" 
                                    className="form-control" 
                                    placeholder="Phone" 
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)} 
                                />
                                {errors.phone && <p className="error text-danger">{errors.phone}</p>}
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="place" 
                                    className="form-control" 
                                    placeholder="Place" 
                                    value={place} 
                                    onChange={(e) => setPlace(e.target.value)} 
                                />
                                {errors.place && <p className="error text-danger">{errors.place}</p>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea 
                                    name="address" 
                                    className="form-control" 
                                    placeholder="Address *" 
                                    style={{ width: "100%", height: "150px" }} 
                                    value={address} 
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                {errors.address && <p className="error text-danger">{errors.address}</p>}
                            </div>
                            <div className="form-group">
                                <select 
                                    className="form-select mb-3" 
                                    name='department' 
                                    aria-label="Default select example"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                >
                                    <option value="" selected>Select Department</option>
                                    <option value="PlusOne">PlusOne</option>
                                    <option value="PlusTwo">PlusTwo</option>
                                </select>
                                {errors.department && <p className="error text-danger">{errors.department}</p>}
                            </div>
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit" 
                                name="btnSubmit" 
                                className="btnContact" 
                                value="Add New Student" 
                            />
                        </div>
                    </div>
                </Form>
            </div>
            <Footer/>
        </>
       
    );
}

export default Add;
