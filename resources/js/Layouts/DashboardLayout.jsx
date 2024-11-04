import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Logout from "@/Components/Logout";

const DashboardLayout = ({ user, header, children }) => {
    const [logout, setLogout] = useState(false);
    const showLogout = () => setLogout(true);
    const closeModal = () => setLogout(false);

    return (
        <div className="flex min-h-screen">
            {/* Left Sidebar */}
            <div className="w-80 transition-transform duration-300 hidden md:block px-4">
                <Sidebar onLogoutClick={showLogout} />
            </div>
            <Logout show={logout} onClose={closeModal} />

            {/* Main Content Area */}
            <div className="flex-1 p-4">
                <main>{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
