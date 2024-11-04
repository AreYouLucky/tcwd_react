import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-5">
            <div className=" w-full overflow-hidden bg-white shadow-xl border-slate-100 border-2 sm:max-w-md rounded-2xl px-10 py-12 mb-12">
                <div className="mb-5">
                    <img
                        src="storage/logos/tcwd.png"
                        width={100}
                        className="mx-auto"
                    />
                    <div className="space-y-2 text-center mt-2">
                        <h3 className="text-gray-600 text-2xl font-bold sm:text-3xl montserrat-black-900">
                            TCWD SYSTEM
                        </h3>
                        <span className="text-gray-500 font-mono text-xs">
                            Login Administrator Account
                        </span>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}
