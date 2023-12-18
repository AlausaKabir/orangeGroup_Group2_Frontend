import Sidebar from "./Sidebar";
import Main from "./Main"
import TabSidebar from "./TabSidebar";
import Header from "./Header";

function Layout() {
    return ( 
        <div className="bg-pink-50 font-nunito">
            <Header />
            <div className="flex">
                <TabSidebar/>
                <Sidebar />
                <Main />
            </div>
           
        </div>
     );
}

export default Layout;