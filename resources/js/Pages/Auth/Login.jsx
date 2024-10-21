import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function Login() {
    const { data, setData, processing } = useForm({
        username: "",
        password: "",
        logs: "",
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        axios
            .post("/login", data)
            .then((res) => {})
            .catch((err) => {
                setErrors(err.response.data.errors);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Invalid Credentials!",
                    confirmButtonColor: "#3085d6",
                });
            });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <form onSubmit={submit} className="px-5">
                <div>
                    <InputLabel htmlFor="Username" value="Username" />
                    <div className="relative mt-1">
                        <TextInput
                            id="username"
                            type="text"
                            name="username"
                            value={data.username}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) =>
                                setData("username", e.target.value)
                            }
                        />
                        <span className="absolute top-1/2 left-4 -translate-y-1/2">
                            <svg
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.72 12.886a4.167 4.167 0 0 1 2.947-1.22h6.666a4.167 4.167 0 0 1 4.167 4.167v1.666a.833.833 0 1 1-1.667 0v-1.666a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v1.666a.833.833 0 1 1-1.667 0v-1.666a4.17 4.17 0 0 1 1.22-2.947ZM10 3.333a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.166 2.5a4.167 4.167 0 1 1 8.333 0 4.167 4.167 0 0 1-8.333 0Z"
                                    opacity={0.8}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    fill="#9CA3AF"
                                />
                            </svg>
                        </span>
                    </div>
                    <InputError message={errors.username} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <div className="relative mt-1">
                        <TextInput
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <span className="absolute top-1/2 left-4 -translate-y-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#9CA3AF"
                                className="size-6"
                            >
                                <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </span>
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </div>
                <div className="my-7 flex align-center">
                    <Checkbox
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <span className="text-gray-500 ms-3">Show Password</span>
                </div>
                <div className="my-7 mx-10 flex items-center justify-center">
                    <PrimaryButton disabled={processing}>Log in</PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
