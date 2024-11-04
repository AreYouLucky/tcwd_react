import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Logout from "@/Components/Logout";

const DashboardLayout = ({ user, header, children }) => {
    const [logout, setLogout] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const showLogout = () => setLogout(true);
    const closeModal = () => setLogout(false);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
                className={`${
                    isSidebarOpen ? "sidebar" : "sidebar sidebar-closed"
                } inset-y-0 left-0 bg-white z-50`}
            >
                {isSidebarOpen && <Sidebar onLogoutClick={showLogout} />}
            </div>

            <Logout show={logout} onClose={closeModal} />

            {/* Main Content */}
            <div className="flex-1 p-4">
                <div className="p-4 bg-red">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-400 ease-in-out"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className={
                                    isSidebarOpen ? "hidden" : "inline-flex"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={
                                    isSidebarOpen ? "inline-flex" : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <main
                    className={`${
                        isSidebarOpen ? "hidden" : "block"
                    } sm:hidden md:block`}
                >
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
