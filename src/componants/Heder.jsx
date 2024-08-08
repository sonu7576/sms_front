import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';


function Heder() {

    const [user , setUser]=useState("null")

    const navigate=useNavigate()

    useEffect(()=>{

        const storedUser = localStorage.getItem('user');
        setUser(JSON.parse(storedUser));

    },[])

    const handleLogout = () => {
        // Remove user data from local storage
    
        navigate('/');
        localStorage.removeItem('user');
        window.location.reload();
        console.clear()
        
        
    
      };
    


    return (
        <>

            <Navbar className="navbar bg-black border-bottom border-body sticky-top">
                <Container>

                    <button className="btn fw-bold text-light " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" >
                        <span ><i class="fa-solid fa-bars fa-xl me-2"></i></span>MENU
                    </button>


                    <Navbar.Brand className='fw-bold text-light' href="#home">
                       
                        {user?
                            (
                                <Link onClick={handleLogout} className='text-decoration-none text-dark'><button className='fw-bold ms-5 border rounded'>LOGOUT</button></Link>
                        ):(
                                
                                <Link className='text-decoration-none text-dark' to={'/login'}><button className='fw-bold ms-5 border rounded'>LOGIN</button></Link>
                            )
                            }
                    </Navbar.Brand>



                </Container>
            </Navbar>


            

            

            <div className="offcanvas offcanvas-start" style={{width:"300px"}} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">MENU</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div className="offcanvas-body text-center m-4" >

                    <Link to={'/'} className='text-decoration-none'><div className='border rounded bg-black text-light fw-bold  p-2 mb-4'>HOME</div></Link>

                    <Link to={'/add'} className='text-decoration-none'><div className='border rounded bg-black text-light fw-bold p-2 mb-4'>ADD STUDENT</div></Link>





                </div>
                
            </div>




        </>
    )
}

export default Heder