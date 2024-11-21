import DashboardLayout from "@/Layouts/DashboardLayout";
import Table from "@/Components/Table";
import { Head, Link } from "@inertiajs/react";
import { Pencil, CopyPlus, Trash2, Search, ContactRound } from "lucide-react";
import PrimaryButton from "@/Components/PrimaryButton";
import Pagination from "@/Components/Pagination";
import TextInputDense from "@/Components/TextInputDense";
import { useState } from "react";
import SelectFields from "@/Components/SelectFields";
import UserForm from "./UserForm";
export default function Dashboard({ auth }) {
    const [fields, setFields] = useState({
        search: "",
        brgy: " ",
    });

    const [userForm, setUserForm] = useState(false);

    const showUserForm = () => setUserForm(true);
    const closeUserForm = () => setUserForm(false);
    const handleChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    };
    const tableItems = [
        {
            name: "Liam James",
            email: "liamjames@example.com",
            contact: "092398287812",
            position: "Software engineer",
            salary: "$100K",
        },
        {
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            contact: "092398287812",
            position: "Product designer",
            salary: "$90K",
        },
        {
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            contact: "092398287812",
            position: "Front-end developer",
            salary: "$80K",
        },
        {
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            contact: "092398287812",
            position: "Laravel engineer",
            salary: "$120K",
        },
        {
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            contact: "092398287812",
            position: "Open source manager",
            salary: "$75K  ",
        },
        {
            name: "Liam James",
            email: "liamjames@example.com",
            contact: "092398287812",
            position: "Software engineer",
            salary: "$100K",
        },
        {
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            contact: "092398287812",
            position: "Product designer",
            salary: "$90K",
        },
        {
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            contact: "092398287812",
            position: "Front-end developer",
            salary: "$80K",
        },
        {
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            contact: "092398287812",
            position: "Laravel engineer",
            salary: "$120K",
        },
        {
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            contact: "092398287812",
            position: "Open source manager",
            salary: "$75K  ",
        },
    ];

    const headers = [
        "Name",
        "Address",
        "Contact",
        "Meter No.",
        "Meter Brand",
        "Actions",
    ];
    return (
        <>
            <DashboardLayout user={auth.user}>
                <Head title="Manage Users" />
                <div className="w-full md:w-11/12 m-auto px-4 md:px-8 h-full ">
                    <div className="">
                        <div className="w-full flex">
                            <ContactRound
                                size={20}
                                strokeWidth={1}
                                className="mr-2"
                                color="#c7c7c7"
                            />
                            <h3 className="text-gray-500 font-bold text-lg md:text-xl">
                                Accounts List
                            </h3>
                        </div>
                        <div className=" flex justify-items-start md:justify-between items-center w-full mt-6 flex-col-reverse md:flex-row">
                            <div className=" flex ">
                                <div className=" mt-3 md:mt-0">
                                    {/* <SelectFields /> */}
                                </div>
                                <div className="flex mt-3 md:mt-0">
                                    <TextInputDense
                                        id="search"
                                        type="text"
                                        name="search"
                                        value={fields.search}
                                        className="mt-1 block max-w-60 min-w-30 px-7 ml-2"
                                        autoComplete="username"
                                        placeholder={"Search"}
                                        isFocused={true}
                                        onChange={handleChange}
                                    />
                                    <button
                                        href="#"
                                        className=" px-4 bg-cyan-600 rounded-r-lg"
                                    >
                                        <Search
                                            size={15}
                                            strokeWidth={3}
                                            color="#eee"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="w-auto ml-auto">
                                <PrimaryButton
                                    className="inline-flex items-center px-4 py-2 mt-3 md:mt-3"
                                    onClick={showUserForm}
                                >
                                    <CopyPlus
                                        size={20}
                                        strokeWidth={2}
                                        className="mr-2"
                                        color="#eee"
                                    />
                                    Add
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 shadow-sm border rounded-lg overflow-x-auto overflow-y-auto w-full bg-white">
                        <Table headers={headers}>
                            {tableItems.map((item, idx) => (
                                <tr key={idx} className="text-center">
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.contact}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.position}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {item.salary}
                                    </td>
                                    <td className="text-center px-6 whitespace-nowrap">
                                        <button href="#" className=" mr-1">
                                            <Pencil
                                                size={15}
                                                strokeWidth={2}
                                                color="#00b1de"
                                            />
                                        </button>

                                        <button href="#" className="ml-1">
                                            <Trash2
                                                size={15}
                                                strokeWidth={2}
                                                color="#bf0000"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </Table>
                        <div className="w-full flex p-3 bg-red">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </DashboardLayout>
            <UserForm show={userForm} onClose={closeUserForm} />
        </>
    );
}
