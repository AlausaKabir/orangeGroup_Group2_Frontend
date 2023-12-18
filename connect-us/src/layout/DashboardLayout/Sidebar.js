function Sidebar() {
    return ( 
        <div className="bg-white h-screen text-xs text-gray-700 flex flex-col items-start w-56 py-4">
            <button className="w-full text-left mt-6 mb-1.5 px-5 rounded-sm py-1 hover:bg-gray-200">#general</button>
            <button className="w-full text-left my-1.5 px-5 rounded-sm py-1 hover:bg-gray-200">#frontend</button>
            <button className="w-full text-left my-1.5 px-5 rounded-sm py-1 hover:bg-gray-200">#backend</button>
        </div>
     );
}

export default Sidebar;