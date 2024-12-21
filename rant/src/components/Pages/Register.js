import React, { useRef } from "react";
import axios from "axios";
import '../../task.min.css'
const Register = () => {
  // const [state] = useState({ tasks: [] });
  const userName = useRef();
  const password = useRef();

  const getData = () => {
    let url = process.env.REACT_APP_BACKEND_URL + '/fetch';
    axios.get(url).then(response => this.setState({ tasks: response.data }));
  };

  const addUser = () => {
    //uncomment and update url to appropriate url for backend connection
    let url = process.env.REACT_APP_BACKEND_URL + '/signup';
    axios.post(url, { 
                        id: 456, ///WTF
                        username: userName.current.value,
                        password: password.current.value 
      }).then(response => {
      // refresh the data
      getData();
      // empty the input
      userName.current.value = "";
      password.current.value = "";
    });
  };

  //create update and delete functions to complete CRUD


    return (
      <div>
        <h3>Register</h3>
        <label>Username<input ref={userName} />
        </label>
        <label>Password<input type="password" ref={password} />
        </label>
        <button type="button" className="btn btn-primary" onClick={addUser}>Sign Up</button>
      </div>
      
    );

}

export default Register;
