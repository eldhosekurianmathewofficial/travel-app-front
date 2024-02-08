import React, { useEffect, useState } from 'react';
import axios from "axios";

const Search = () => {
    const [ser, setSer] = useState({
        from: ""
    });
    

    const inputHandler = (event) => {
        setSer({ ...ser, [event.target.name]: event.target.value });
    }
    const [output, setOutput] = useState([]);
    const readValues = () => {
        axios.post("http://localhost:3001/api/travel/search",ser)
            .then((response) => {
                setOutput(response.data);
            })
    }

    useEffect(() => {
        readValues();
    }, []);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="from" className="form-label">From</label>
                                <input type="text" className="form-control" id="from" name="from" value={ser.from} onChange={inputHandler} />
                            </div>
                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValues}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table">
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
                                {output.map((value, index) => (
                                    <tr>
                                        <th scope="row">{value.from}</th>
                                        <td>{value.to}</td>
                                        <td>{value.date}</td>
                                        <td>{value.mode}</td>
                                        <td>{value.members}</td>
                                        <td>{value.expense}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
