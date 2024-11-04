import {
    Users,
    PhilippinePeso,
    Scroll,
    LogOut,
    CircleHelp,
} from "lucide-react";
const Sidebar = ({ onLogoutClick }) => {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full h-full border-r space-y-8 sm:w-80 shadow-xl text-gray-600 border-white sidebar">
                <div className="flex flex-col h-full px-6">
                    <div className=" flex items-center justify-center border-b-2 mb-5 flex-col">
                        <img
                            src="storage/logos/tcwd.png"
                            width={220}
                            className="mx-auto"
                        />
                        <h3 className="text-gray-600 text-2xl font-bold sm:text-2xl montserrat-black-900 -mt-8 mb-5">
                            TCWD SYSTEM
                        </h3>
                    </div>
                    <div className="flex-1 flex flex-col h-full overflow-auto">
                        <ul className="px-2 text-sm font-medium flex-1">
                            <li>
                                <a
                                    href=""
                                    className="flex items-center gap-x-2 p-2 rounded-lg  hover:bg-sky-200 active:bg-gray-100 duration-150"
                                >
                                    <Users
                                        size={20}
                                        strokeWidth={1}
                                        className="mr-2"
                                    ></Users>
                                    Manage Users
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="flex items-center gap-x-2 p-2 rounded-lg  hover:bg-sky-200 active:bg-gray-100 duration-150"
                                >
                                    <Scroll
                                        size={20}
                                        strokeWidth={1}
                                        className="mr-2"
                                    ></Scroll>
                                    Rates, Dues, and Fees
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="flex items-center gap-x-2 p-2 rounded-lg  hover:bg-sky-200 active:bg-gray-100 duration-150"
                                >
                                    <PhilippinePeso
                                        size={20}
                                        strokeWidth={1}
                                        className="mr-2"
                                    ></PhilippinePeso>
                                    Billings
                                </a>
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="flex items-center gap-x-2 p-2 rounded-lg  hover:bg-sky-200 active:bg-gray-100 duration-150"
                                >
                                    <Users
                                        size={20}
                                        strokeWidth={1}
                                        className="mr-2"
                                    ></Users>
                                    Concerns
                                </a>
                            </li>
                        </ul>
                        <div>
                            <ul className="px-2 pb-4 text-sm font-medium">
                                <li>
                                    <a
                                        href=""
                                        className="flex items-center gap-x-2 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                                    >
                                        <CircleHelp
                                            size={20}
                                            strokeWidth={1}
                                            className="mr-2"
                                        ></CircleHelp>
                                        Help
                                    </a>
                                </li>
                                <li onClick={onLogoutClick}>
                                    <span className="flex items-center gap-x-2 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150">
                                        <LogOut
                                            size={20}
                                            strokeWidth={1}
                                            className="mr-2"
                                        />
                                        Logout
                                    </span>
                                </li>
                            </ul>
                            <div className="py-4 px-2 border-t">
                                <div className="flex items-center gap-x-4">
                                    <img
                                        src="storage/logos/admin.png"
                                        width={80}
                                    />
                                    <div>
                                        <span className="block text-gray-700 text-sm font-semibold">
                                            Administrator
                                        </span>
                                        <a
                                            href=""
                                            className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
                                        >
                                            Edit profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;