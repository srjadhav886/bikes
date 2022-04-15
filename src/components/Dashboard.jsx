import AdminNav from "./Adminnav"
import axios from "axios"
import { useEffect, useState } from "react"

import moment from "moment"
import { useHistory } from "react-router-dom"

const Dashboard = () => {
    if (sessionStorage.getItem("userid") == null) {
        window.location = "/login"
    }
    if (sessionStorage.getItem("role") === "Customer") {
        window.location = "/products"
    }
    const userid = sessionStorage.getItem("userid")
    const [data, setData] = useState([])
    const history = useHistory()
    const showDetails = id => {
        history.push('bdetails/' + id)
    }
    useEffect(() => {
        axios.get('http://localhost:8080/api/bookings')
            .then(resp => {
                setData(resp.data)
            })
    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{ height: "calc(100vh - 80px)" }}>
                        <AdminNav />
                    </div>
                    <div className="col-sm-10">
                        <h4 className="p-2 mb-3 border-bottom border-success">Admin Dashboard</h4>



                        <h5 className="p-2 mb-3" style={{ borderBottom: '2px solid green' }}>Bookings</h5>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Booking Id</th>
                                    <th>Bike Variant</th>
                                    <th>Booking Date</th>
                                    <th>User Name</th>
                                    <th>Advance</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    <th>Status</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(bk => (
                                    <tr key={bk.id}>
                                        <td>{bk.id}</td>
                                        <td>{bk.variant.title}</td>
                                        <td>{moment(bk.bookingdate).format('d-MMM-yyyy hh:mm A')}</td>
                                        <td>{bk.customer.uname}</td>
                                        <td>₹ {bk.variant.price}/day</td>
                                        <td>{bk.fromdate}</td>
                                        <td>{bk.todate}</td>
                                        <td>{bk.status}</td>
                                        <td><button onClick={e => showDetails(bk.id)} className="btn btn-primary btn-sm">Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;