import { useEffect, useState } from "react";
import axios from 'axios';
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

function ChatLayout() {

    const [messages, setMessages] = useState([]);
    const retrievedKey = localStorage.getItem('accessToken')
    const [messageData, setMessageData] = useState({
        newMessage: ""
    })

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ retrievedKey }`,
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMessageData((prevData) => ({ ...prevData, [name]: value }));
      };
      
    const data = {
        "recipients": [
            {"user": "657ff73389fa054eacac57c1"},
            {"user": "657ff74089fa054eacac57c4"}
        ],
        "content": messageData.newMessage
     }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log(messageData.newMessage)
        if (messageData.newMessage) {
          axios.post("https://connectus-4ev0.onrender.com/messages/create-message", data, { headers },)
            .then((response) => {
                toast.success("message sent")
                messageData.newMessage = ""
            })
            .catch((err) => {
              if (err.response) {
                const { data: errorData, status } = err.response;
                console.error(`Server responded with error status: ${status}`, errorData);
    
                if (errorData && errorData.message) {
                  toast.error(`Error: ${errorData.message}`);
                } else {
                  toast.error("An unexpected error occurred. Please try again later.");
                }
              } else if (err.request) {
                console.error("No response received from the server. Check your internet connection or try again later.");
                toast.error("No response received from the server. Check your internet connection or try again later.");
              } else {
                console.error("Error setting up the request:", err.message);
                toast.error("An unexpected error occurred. Please try again later.");
              }
            });
        }
      };
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://connectus-4ev0.onrender.com/messages/', { headers, });

            setMessages(response.data.data.messages);
        } catch (err) {
            console.log('Error:', err.message);
        }
        };
        fetchData();
    }, [setMessages]);

    return ( 
        <div className="bg-pink-50 font-nunito">
            <div className="flex">
                <Sidebar/>
                <main className="bg-white h-screen ml-2 w-full">
                    <div className="w-full ml-1 bg-white w-full">
                        {messages.map(message => { 
                            return  <div key={message.id} className="bg-pink-50 py-2 px-3 mx-4 my-8 rounded-sm">
                            <p className="text-lg">{message.content}</p> 
                            <div className="flex ">
                            <p className="text-xs mr-2">{message.sender.firstName}</p>
                            <p className="text-xs">{message.sender.lastName}</p>
                            </div>
                            </div>
                        })}
                        <div className="absolute items-center flex justify-between mb-2 bottom-0 bg-pink-50 w-3/4 mt-4 px-5 rounded-md">
                            <input 
                                 value={messageData.newMessage}
                                 onChange={handleInputChange}
                                 type="text"
                                 name="newMessage"
                                 placeholder="Type a new message here..."
                                 required
                                 className="bg-pink-50 w-full py-6 px-5 outline-none"
                                 />
                            <button onClick={handleSubmit} className="mr-3 hover:text-orange-600">Send</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
     );
}

export default ChatLayout;