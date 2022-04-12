import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../css/sign.css"

const Login = () => {
    if (sessionStorage.getItem("userid") != null) {
        window.location = "/products"
    }
    const dispatch = useDispatch()
    const history = useHistory()
    const [user, setUser] = useState({
        "userid": "",
        "pwd": "",
        "role": ""
    })
    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.userid === "" || user.pwd === "" || user.role === "") {
            toast.error("Please fill all required fields")
            return
        }
        console.log(user)
        let url = "http://localhost:8080/api/customers/validate";
        if (user.role === "Admin") {
            url = "http://localhost:8080/api/admin/validate";
        }
        axios.post(url, user)
            .then(resp => {
                console.log(resp.data)
                sessionStorage.setItem("userid", resp.data.userid);
                sessionStorage.setItem("uname", resp.data.uname);
                sessionStorage.setItem("role", user.role);
                dispatch({ type: 'IsLoggedIn' })
                toast.success("Login successfull")
                if (user.role === "Admin") {
                    history.push('/dashboard')
                } else {
                    history.push('/')
                }
            }).catch(error => {
                console.log("Error", error)
                //alert("Invalid username or password")
                toast.error("Invalid username or password")
            })
    }
    return (
        <>
            <div className="container" style={{ minHeight: '79vh' }}>
                <div className="container register ">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            <h3>Welcome</h3>

                            <span className="signin-link">If you Don't have any account</span>
                            <Link to="./register">  <button className="btn btn-primary signup">Register</button></Link>
                        </div>
                        <div className="col-md-9 register-right">

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3 className="register-heading">Login</h3>
                                    <form autoComplete="off" >
                                        <div className="form-row register-form">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text bg-danger border-0 text-white">
                                                                <i className="fas fa-user-tie" />
                                                            </span>
                                                        </div>
                                                        <input type="text" required placeholder="User ID here" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text bg-danger border-0 text-white">
                                                                <i className="fas fa-key" />
                                                            </span>
                                                        </div>
                                                        <input required type="password" name="pwd" placeholder="Password here" value={user.pwd} onChange={handleInput} className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text bg-danger border-0 text-white">
                                                                <i className="fas fa-key" />
                                                            </span>
                                                        </div>
                                                        <select value={user.role} onChange={handleInput} required name="role" className="form-control">
                                                            <option value="">Select Role</option>
                                                            <option>Admin</option>
                                                            <option>Customer</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <input type="submit" onClick={handleSubmit} defaultValue="Login" className="btn btn-danger btn-block" />
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default Login;