import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'


const App = () => {

const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null)


useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts') // Sample API endpoint
      .then((response) => response.json())
      .then((data) => {
        setItems(data);    // Store the fetched data in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);
  

  
    return (
      <div className="App">
        <h1>Fetched Items</h1>
        {loading ? (
          <p>Loading...</p> // Show loading message while data is being fetched
        ) : error ? (
          <p>{error}</p> // Display error message if there's an issue fetching data
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
    
  
}
export default App