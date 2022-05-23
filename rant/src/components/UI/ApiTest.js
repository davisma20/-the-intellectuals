import React, { useState, useEffect } from 'react';

function ApiTest() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result)
          setIsLoaded(true);
          setItems(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          //setIsLoaded(true);
          setError(error);
          }
        )
    setIsLoaded(false);

  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoaded) {
    return <div>Loading...</div>;
  } else {
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
}


export default ApiTest
