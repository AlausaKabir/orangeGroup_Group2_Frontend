import { useEffect, useState } from "react";
import axios from 'axios';


    function News(){
  const [responseData, setResponseData] = useState(null);
  const retrievedKey = localStorage.getItem('accessToken')

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${retrievedKey}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://connectus-4ev0.onrender.com/messages', { headers, });

        console.log(response.data);
      } catch (err) {
        console.log('Error:', err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {responseData ? (
        <div>
          <h1>Announcements</h1>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default News;