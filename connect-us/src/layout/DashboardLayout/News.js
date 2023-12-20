import { useEffect, useState } from "react";
import axios from 'axios';

    function News(){
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://connectus-4ev0.onrender.com/news/all?page=1&limit=6&category=Holiday");

        // Handle the response
        console.log(response.data);
      } catch (error) {
        // Handle errors
        console.log('Error:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div>
      {/* Your component UI */}
      {responseData ? (
        <div>
          <h1>Data from API:</h1>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default News;