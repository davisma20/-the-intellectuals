import React, { useRef } from "react";
import axios from "axios";
import '../../task.min.css'
const Register = () => {
  // const [state] = useState({ tasks: [] });
  const userName = useRef();
  const password = useRef();

  const getData = () => {

    //UNCOMMENT the appropriate url for the backend framework

    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/user/fetch";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ tasks: response.data }));
  };
  // const componentDidMount = () => {
  //   getData();
  // }



  const addUser = () => {
    //uncomment and update url to appropriate url for backend connection
    //let url = "http://localhost:3001/tasks";
    let url = "http://localhost:8080/user/signup";
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
