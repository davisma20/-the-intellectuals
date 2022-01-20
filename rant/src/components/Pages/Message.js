import React from "react";
import axios from "axios";
import { ChatEngine } from "react-chat-engine";
import '../../task.min.css'
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.messageContent = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {

    //UNCOMMENT the appropriate url for the backend framework

    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/message/fetch";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ tasks: response.data }));
  };

  sendMessage = () => {
    //uncomment and update url to appropriate url for backend connection
    //let url = "http://localhost:3001/tasks";
    let url = "http://localhost:8080/message/post";
    axios.post(url, { 
                        id: 456, ///WTF Change to Auto Generate
                        message: this.messageContent.current.value,
                        content: this.messageContent.current.value 
      }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.messageContent.current.value = "";
    });
  };

  //create update and delete functions to complete CRUD

  render() {
    return (
      <div>
        {/* for some reason this chat engine double renders */}
          <ChatEngine
            height="100vh"
            projectID="098f0f3f-039d-433e-8e78-7a6f4ae2b73d"
            userName={localStorage.username}
            // Change the username to EE 
            // Change the username to CB 
            userSecret={localStorage.password} />
      </div>
    );
  }
}

export default Message;
