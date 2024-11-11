import { useState } from "react";
import { Link } from "@inertiajs/react";
import { CircleArrowRight, CircleArrowLeft } from "lucide-react";

export default () => {
    const [pages, setPages] = useState([
        "1",
        "2",
        "3",
        ,
        "...",
        "8",
        "9",
        "10",
    ]);
    const [currentPage, setCurrentPage] = useState("1");

    return (
        <div className="max-w-screen-xl mx-auto md:ml-auto md:mx-0 px-4 text-gray-600 md:px-8 flex justify-end">
            <div
                className="hidden items-center justify-between sm:flex"
                aria-label="Pagination"
            >
                <Link href="">
                    <CircleArrowLeft
                        size={30}
                        strokeWidth={1}
                        className="mr-2"
                        color="#00b1de"
                    />
                </Link>
                <ul className="flex items-center gap-1">
                    {pages.map((item, idx) => (
                        <li key={item} className="text-sm">
                            {item == "..." ? (
                                <div>{item}</div>
                            ) : (
                                <a
                                    href=""
                                    aria-current={
                                        currentPage == item ? "page" : false
                                    }
                                    className={`px-3 py-2 rounded-lg duration-150 hover:bg-indigo-50 ${
                                        currentPage == item
                                            ? "bg-sky-200 font-medium"
                                            : ""
                                    }`}
                                >
                                    {item}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
                <Link href="">
                    <CircleArrowRight
                        size={30}
                        strokeWidth={1}
                        className="mr-2"
                        color="#00b1de"
                    />
                </Link>
            </div>
            {/* On mobile version */}
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
                <Link href="">
                    <CircleArrowLeft
                        size={30}
                        strokeWidth={1}
                        className="mr-2"
                        color="#00b1de"
                    />
                </Link>
                <div className="font-medium">
                    Page {currentPage} of {pages.length}
                </div>
                <Link href="">
                    <CircleArrowRight
                        size={30}
                        strokeWidth={1}
                        className="mr-2"
                        color="#00b1de"
                    />
                </Link>
            </div>
        </div>
    );
};
