import React, { useEffect, useState } from 'react'
import { getStudents } from '../service/allApi'
import { Link } from 'react-router-dom'

function ViewAll() {

    const [students ,setStudents]=useState([])

    const [Search , setSearch]=useState("")

    useEffect(()=>{

        getAll()

    },[Search])


    const getAll = async () =>{

        try{

        const res = await getStudents(Search)

        // console.log(res);

        setStudents(res.data)
    }catch(err){

        console.log(err);
    }

    }

    // console.log(students);



  return (

<>

<div>

<input type="text" onChange={e => setSearch(e.target.value)} placeholder='Search' className='form-control m-auto mb-5 ' style={{ width: "50%" }} />

  {students.length>0?
    (students.map((student ,index)=>(
    
    <Link to={`/single/${student._id}`} className='text-decoration-none text-dark '>
      <div key={index} className='row border border-solid rounded p-3 mb-2'>
  
  
      <div  className="col-sm-2">#{student._id.slice(20,24)}</div>
      <div className="col-sm-4 fw-bold">NAME : <span>{student.name}</span></div>
      <div className="col-sm-3">{student.department}</div>
      <div className="col-sm-3">MOB :{student.phone}</div>
  
  
    </div>
    </Link>))):(
    <div>nothing to display</div>
  )}

  

</div>

</>
  )
}

export default ViewAll