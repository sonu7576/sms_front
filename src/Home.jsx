import React from 'react'
import Heder from './componants/Heder'
import Footer from './componants/Footer'
import ViewAll from './pages/ViewAll'

function Home() {
    return (
        <>

            <Heder />

            <div className='row'>

                <div>


                    <div className=' row m-5 p-5 border-bottom'>


                        <div className="col-md-6 mb-5 d-flex justify-content-around">

                            <center><img style={{ width: "100%", borderRadius: "20px" }} src="https://www.raycomputech.com/wp-content/uploads/2020/11/student-management-software.png" alt="..." /></center>

                        </div>
                        <div className="col-md-6">

                            <h3 className='mt-5 fw-bolder'>STUDENT MANAGEMENT SYSTEM</h3>

                            <p className='text-justify '>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus optio aliquam corrupti, eligendi amet reprehenderit ab aliquid aspernatur omnis assumenda debitis veniam sed at accusantium animi cumque sapiente officia exercitationem.
                            </p>
                        </div>



    

                    </div>


                    <div style={{ height: "500px" }}  >

                        <img className='w-100 h-100' src="https://previews.123rf.com/images/aukid/aukid2306/aukid230600168/206461258-developmen-programming-mobile-application-software-create-and-optimize-layout-interface-website-or.jpg" alt="...." />


                    </div>



                    <div className='m-5 p-5 '>

                        <h1 className='text-center mb-5'>STUDENT LIST</h1>

                        <ViewAll />




                    </div>












                </div>

            </div>

            <Footer />

        </>
    )
}

export default Home