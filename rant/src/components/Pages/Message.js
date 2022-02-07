import React from "react";
import '../../task.min.css'
import MessageHeader from '../UI/MessageHeader';

const Message = (props) => {
      // const [state, setState] = useState({ tasks: [] });
      // const messageContent = useRef();

  // const componentDidMount = () => {
  //   getData();
  // }

  // const getData = () => {

  //   //UNCOMMENT the appropriate url for the backend framework

  //   // Java Spring Boot uses port 8080
  //   let url = "http://localhost:8080/message/fetch";

  //   // C# dotnetcore uses port 5000
  //   //let url = "http://localhost:5000/projects";

  //   // Express uses port 3001 (react uses 3000)
  //   //let url = "http://localhost:3001/tasks";
  //   axios.get(url).then(response => setState({ tasks: response.data }));
  // };

  // const sendMessage = () => {
  //   //uncomment and update url to appropriate url for backend connection
  //   //let url = "http://localhost:3001/tasks";
  //   let url = "http://localhost:8080/message/post";
  //   axios.post(url, { 
  //                       id: 456, ///WTF Change to Auto Generate
  //                       message: messageContent.current.value,
  //                       content: messageContent.current.value 
  //     }).then(response => {
  //     // refresh the data
  //     getData();
  //     // empty the input
  //     messageContent.current.value = "";
  //   });
  // };

  //create update and delete functions to complete CRUD
  // console.log(state);
  return (
      <div>
        <MessageHeader />
      </div>
    );
}

export default Message;
