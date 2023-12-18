function Home() {
    return (
        <div className="h-screen flex flex-col items-center max-w-3xl mx-auto mt-48 text-center">
            <h1 className="text-5xl leading-tight">Making Communuication & Connection Easy</h1>
            <p className="text-xl py-5 leading-loose max-w-2xl">Welcome to ConnectUs, the sophisticated communication app meticulously crafted for the seamless connectivity of our company. Designed to enhance collaboration and foster effective communication, ConnectUs brings your teams closer, facilitating real-time conversations, file sharing, and group discussions.</p>
            <p className="text-2xl text-orange-600">To continue using the app:</p>
            <div  className='mt-6 text-base'>
                <button className="bg-orange-500 text-white px-7 py-1 rounded-sm mr-7">Register</button>
             or
                <button className="bg-orange-500 text-white px-8 py-1 rounded-sm ml-8">Login</button>
            </div>
        </div>
    )
};

export default Home;