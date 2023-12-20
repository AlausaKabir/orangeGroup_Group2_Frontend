import Sidebar from "./Sidebar";

function ChatLayout() {
    return ( 
        <div className="bg-pink-50 font-nunito">
            <div className="flex">
                <Sidebar/>
                <main className="bg-white h-screen ml-2 w-full">
                    <div className="w-full ml-4 bg-white w-full">
                        <div className="bg-gray-200 mt-8 ml-10 w-11/12 h-40">main</div>
                    </div>
                </main>
            </div>
        </div>
     );
}

export default ChatLayout;