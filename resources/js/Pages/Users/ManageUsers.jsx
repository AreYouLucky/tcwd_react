import DashboardLayout from "@/Layouts/DashboardLayout";
import Table from "@/Components/Table";
import { Head, Link } from "@inertiajs/react";
import { ContactRound, CopyPlus, UserRoundPen, UserX } from "lucide-react";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Dashboard({ auth }) {
    const tableItems = [
        {
            name: "Liam James",
            email: "liamjames@example.com",
            position: "Software engineer",
            salary: "$100K",
        },
        {
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            position: "Product designer",
            salary: "$90K",
        },
        {
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            position: "Front-end developer",
            salary: "$80K",
        },
        {
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            position: "Laravel engineer",
            salary: "$120K",
        },
        {
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            position: "Open source manager",
            salary: "$75K  ",
        },
    ];

    const headers = ["Name", "Address", "Meter No.", "Meter Brand", "Actions"];
    return (
        <DashboardLayout user={auth.user}>
            <Head title="Manage Users" />
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 mt-2">
                <div className="items-start justify-between md:flex">
                    <div className="max-w-lg flex flex-row items-center">
                        <ContactRound
                            size={30}
                            strokeWidth={1}
                            className="mr-2"
                            color="#969696"
                        />
                        <h3 className="text-gray-500 text-xl font-bold sm:text-2xl">
                            Accounts List
                        </h3>
                    </div>
                    <div className="mt-3 md:mt-0">
                        <PrimaryButton className="inline-flex items-center px-4 py-2">
                            <CopyPlus
                                size={20}
                                strokeWidth={1}
                                className="mr-2"
                                color="#eee"
                            />
                            Add
                        </PrimaryButton>
                    </div>
                </div>
                <div className="mt-7 shadow-sm border rounded-lg overflow-x-auto">
                    <Table headers={headers}>
                        {tableItems.map((item, idx) => (
                            <tr key={idx} className="text-center">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.position}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.salary}
                                </td>
                                <td className="text-center px-6 whitespace-nowrap">
                                    <button
                                        href="#"
                                        className="bg-sky-500 p-1 rounded-xl mr-1"
                                    >
                                        <UserRoundPen
                                            size={20}
                                            strokeWidth={1}
                                            color="#eee"
                                        />
                                    </button>

                                    <button
                                        href="#"
                                        className="bg-red-500 p-1 rounded-xl ml-1"
                                    >
                                        <UserX
                                            size={20}
                                            strokeWidth={1}
                                            color="#eee"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </Table>
                </div>
            </div>
        </DashboardLayout>
    );
}
