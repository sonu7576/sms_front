import React, { useEffect, useState } from 'react'
import { getStudents, removeStudent } from '../service/allApi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Heder from '../componants/Heder'
import Footer from '../componants/Footer'

function Single() {

  const [singleData, setSingledata] = useState({})

  const { id } = useParams()

  const navigate =useNavigate()

  // console.log(id);


  useEffect(() => {

    getStudent()

  }, [])




  const getStudent = async () => {

    const { data } = await getStudents("")

    console.log(data.find(itme => itme._id === id));

    setSingledata(data.find(itme => itme._id === id))



  }

  console.log(singleData);

  const remove = async (id)=>{

    console.log(id);
    



    const res = await removeStudent(id)

    if (res.status==200) {

      navigate('/')
      
    } else {

      alert('request failed')
      
    }


  }



  return (
    <>

      <Heder />

      <div className='row m-5'>


        <div className="col-md-12 border rounded p-5 text-center" style={{ height: "500px" }}>

          <h1 className='border-bottom border-solid mb-4'>DETAILS</h1>

          <p>#{singleData._id}</p>

          <h2 ><span>{singleData.name}</span></h2>

          <h3 ><span>{singleData.email}</span></h3>

          <h3 ><span>{singleData.department}</span></h3>

          <h3 ><span>{singleData.phone}</span></h3>

          <h4 ><span>{singleData.address}</span></h4>

          <h4 ><span>{singleData.place}</span></h4>



          <div className='d-flex justify-content-around mt-5'>
            
            <Link to={`/edit/${singleData._id}`}><div className='fw-bold'>EDIT<i class="fa-solid fa-pen-nib fa-2xl"></i></div> </Link>

            <Link onClick={()=>remove(singleData._id)}><div><i class="fa-solid fa-trash fa-2xl text-danger"></i></div></Link>
            
            
            </div>








        </div>


      </div>

      <Footer />

    </>
  )
}

export default Single