import React, { useEffect, useState } from 'react'
import axios from "axios";
const View = () => {
    const[output,setOutput]= new useState([])
    const getData=()=>{
        axios.get("http://localhost:3001/api/travel/view").then(
            (response)=>{
                setOutput(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">From:</th>
      <th scope="col">To:</th>
      <th scope="col">Date:</th>
      <th scope="col">Mode:</th>
      <th scope="col">Members:</th>
      <th scope="col">Expense:</th>
    </tr>
  </thead>
  <tbody>
  {
    output.map((value,index)=>{
        return  <tr>
        <th scope="row">{value.from}</th>
        <td>{value.to}</td>
        <td>{value.date}</td>
        <td>{value.mode}</td>
        <td>{value.members}</td>
        <td>{value.expense}</td>
      </tr>
    })
  }
    
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default View
