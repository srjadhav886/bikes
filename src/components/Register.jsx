import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
  if (sessionStorage.getItem("userid") != null) {
    window.location = "/products"
  }

  const history = useHistory()
  const [user, setUser] = useState({
    "uname": "",
    "address": "",
    "userid": "",
    "pwd": "",
    "cpwd": "",
    "phone": "",
    "gender": "",
    "license": ""
  })
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    axios.post('http://localhost:8080/api/customers', user)
      .then(resp => {
        console.log(resp.data)
        toast.success(resp.data)
        history.push("/login")
      }).catch(error => {
        console.log("Error", error.response)
        toast.error(error.response.data)
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

              <span className="signin-link">Already have an account? </span>
              <Link to="./Login">  <button className="btn btn-primary signup">Login</button></Link>
            </div>
            <div className="col-md-9 register-right">

              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <h3 className="register-heading">Register</h3>
                  <form onSubmit={handleSubmit} autoComplete="off" action="regprocess.php">
                    <div className="form-row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary border-0 text-white">
                                <i className="fas fa-user-tie" />
                              </span>
                            </div>
                            <input type="text" pattern="[a-zA-Z ]+" required placeholder="User Name" name="uname" value={user.uname} onChange={handleInput} className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary border-0 text-white">
                                <i className="fas fa-user-tie" />
                              </span>
                            </div>
                            <input type="email" required placeholder="Email Id or User ID" name="userid" value={user.userid} onChange={handleInput} className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary border-0 text-white">
                                <i className="fas fa-key" />
                              </span>
                            </div>
                            <input type="password" required name="pwd" value={user.pwd} onChange={handleInput} placeholder="Password" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary border-0 text-white">
                                <i className="fas fa-key" />
                              </span>
                            </div>
                            <input type="password" required name="cpwd" value={user.cpwd} onChange={handleInput} placeholder="Repeat Password" className="form-control" />
                          </div>
                        </div>




                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary border-0 text-white">
                                <i className="fas fa-user-tie" />
                              </span>
                            </div>
                            <input type="text" pattern="[0-9]{10,10}" value={user.phone} onChange={handleInput} required placeholder="Phone Number" name="phone" className="form-control" maxLength={10} />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary border-0 text-white">
                                <i className="fas fa-key" />
                              </span>
                            </div>
                            <select required name="gender" value={user.gender} onChange={handleInput} className="form-control">
                              <option value>-- Select Gender --</option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary border-0 text-white">
                                <i className="fas fa-home" />
                              </span>
                            </div>
                            <input type="text" required placeholder="Address" value={user.address} onChange={handleInput} name="address" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-primary border-0 text-white">
                                <i className="fas fa-home" />
                              </span>
                            </div>
                            <input type="text" required placeholder="Driving License No" name="license" value={user.license} onChange={handleInput} className="form-control" />
                          </div>
                        </div>

                      </div>
                      <input type="submit" defaultValue="Register" className="btn btn-primary btn-block" />
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

export default Register;