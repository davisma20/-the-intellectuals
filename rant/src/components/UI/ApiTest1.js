import React, { useState, useEffect } from 'react';
import axiosRecRes from '../library/axiosRecRes'
import requests from '../library/requests';


function ApiTest1() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
      async function fetchData() {
        const request = await axiosRecRes.get(requests.recResUser);
        // console.log(request);
        setItems(request.data.data);
        }
        fetchData();
  }, []);
 
    return (
        <div>
            <ul>
                {items.map(item => (
                  <li key={item.id}>
                    {item.email} {item.first_name}
                  </li>
                ))}
            </ul>
        </div>
    );
  }



export default ApiTest1
