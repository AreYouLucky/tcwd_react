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
import { UserRound, Lock } from "lucide-react";

export default function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        logs: "",
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };
    const submit = (e) => {
        e.preventDefault();
        setProcessing(true);
        axios
            .post("/login", data)
            .then((res) => {
                setProcessing(false);
                window.location.href = "/admin-dashboard";
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
                setProcessing(false);
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
                            onChange={handleChange}
                        />
                        <span className="absolute top-1/2 left-4 -translate-y-1/2">
                            <UserRound
                                color="#3e9392"
                                size={20}
                                strokeWidth={1}
                            />
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
                            onChange={handleChange}
                        />
                        <span className="absolute top-1/2 left-4 -translate-y-1/2">
                            <Lock color="#3e9392" size={20} strokeWidth={1} />
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
