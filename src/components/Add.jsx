import React, { useState } from 'react'
import axios from "axios";
const Add = () => {
    const[input,setInput]=new useState([
        {
            from:"",
            to:"",
            date:"",
            mode:"",
            members:"",
            expense:""

        }
    ])

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/travel/add",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status==="success") {
                    alert("Succesfully inserted")
                } else {
                    alert("Something went wrong")
                    
                }
            }
        )
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-lab">From</label>
                        <input type="text" className="form-control" name="from" value={input.from} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">To</label>
                        <input type="text" className="form-control" name="to" value={input.to} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">Date</label>
                        <input type="text" className="form-control" name="date" value={input.date} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">Mode</label>
                        <input type="text" className="form-control" name="mode" value={input.mode} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">Members</label>
                        <input type="text" className="form-control" name="members" value={input.members} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">Expense</label>
                        <input type="text" className="form-control" name="expense" value={input.expense} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValues}>Add Details</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Add
