import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import TextNoIcon from "@/Components/TextNoIcon";
import InputError from "@/Components/InputError";
import SelectFields from "@/Components/SelectFields";
import InputLabel from "@/Components/InputLabel";
import {
    UserRound,
    Trello,
    FileUser,
    Mail,
    Lock,
    CircleGauge,
} from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function UserForm({ show, onClose, id = "" }) {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        mname: "",
        suffix: "",
        province: "",
        city: "",
        barangay: "",
        street: "",
        contact_no: "",
        email: "",
        meter_no: "",
        meter_brand: "",
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [barangays, setBarangays] = useState([]);
    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    useEffect(() => {
        loadProvince();
    }, []);

    const loadProvince = () => {
        axios.get("/provinces").then((res) => {
            setProvinces(res.data);
        });
    };
    const loadCities = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
        axios.get("/cities/" + e.target.value).then((res) => {
            setCities(res.data);
        });
    };
    const loadBarangays = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
        axios.get("/barangays/" + e.target.value).then((res) => {
            setBarangays(res.data);
        });
    };

    const clearData = () => {
        setUser({
            fname: "",
            lname: "",
            mname: "",
            suffix: "",
            province: "",
            city: "",
            barangay: "",
            street: "",
            contact_no: "",
            email: "",
            meter_no: "",
            meter_brand: "",
            username: "",
            password: "",
        });
    };
    useEffect(() => {
        if (!show) {
            clearData();

            setErrors([]);
        }
    }, [show]);

    const submit = (e) => {
        e.preventDefault();
        axios
            .post("/users", user)
            .then((res) => {
                Swal.fire({
                    icon: "success",
                    title: res.data.status,
                    confirmButtonColor: "#01A9F4",
                    confirmButtonText: `<span class="text-white">Okay! <span>`,
                });
                onClose();
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            });
    };
    return (
        <Modal show={show} onClose={onClose} maxWidth="4xl">
            <form onSubmit={submit} className="px-5">
                <div className="pt-6 px-6 flex">
                    <FileUser color="#858585" size={20} strokeWidth={1} />
                    <span className="ml-2 text-lg font-bold text-gray-400">
                        User Form
                    </span>
                </div>
                <div className="px-6 my-3 w-auto pb-6">
                    <div className="pb-3 mt-8 font-bold flex items-center text-sm text-gray-400 before:flex-1 before:border-t before:border-gray-400 before:me-6 after:flex-1 after:border-t after:border-gray-400 after:ms-6">
                        Basic Information
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-5">
                        <div className="">
                            <InputLabel htmlFor="fname" value="First Name" />
                            <div className="relative mt-1">
                                <TextNoIcon
                                    id="fname"
                                    type="text"
                                    name="fname"
                                    value={user.fname}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                            </div>
                            <InputError
                                message={
                                    errors.fname ? "This field is required" : ""
                                }
                                className="mt-2"
                            />
                        </div>
                        <div className="">
                            <InputLabel htmlFor="mname" value="Middle Name" />
                            <div className="relative mt-1">
                                <TextNoIcon
                                    id="mname"
                                    type="text"
                                    name="mname"
                                    value={user.mname}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                            </div>
                            <InputError
                                message={
                                    errors.mname ? "This field is required" : ""
                                }
                                className="mt-2"
                            />
                        </div>
                        <div className="">
                            <InputLabel htmlFor="lname" value="Last Name" />
                            <div className="relative mt-1">
                                <TextNoIcon
                                    id="lname"
                                    type="text"
                                    name="lname"
                                    value={user.lname}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                            </div>
                            <InputError
                                message={
                                    errors.lname ? "This field is required" : ""
                                }
                                className="mt-2"
                            />
                        </div>
                        <div className="">
                            <InputLabel
                                htmlFor="suffix"
                                value="Suffix(Optional)"
                            />
                            <div className="relative mt-1">
                                <TextNoIcon
                                    id="suffix"
                                    type="text"
                                    name="suffix"
                                    value={user.suffix}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                            </div>
                            <InputError
                                message={
                                    errors.suffix
                                        ? "This field is required"
                                        : ""
                                }
                                className="mt-2"
                            />
                        </div>
                        <div className="">
                            <InputLabel htmlFor="province" value="Province" />
                            <div className="relative mt-1">
                                <SelectFields
                                    id="province"
                                    items={provinces}
                                    itemValue="province_id"
                                    itemName="province_name"
                                    name="province"
                                    value={user.province}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={loadCities}
                                />
                            </div>
                            <InputError
                                message={
                                    errors.province
                                        ? "This field is required"
                                        : ""
                                }
                                className="mt-2"
                            />
                        </div>
                        <div className="">
                            <InputLabel htmlFor="city" value="City" />
                            <div className="relative mt-1">
                                <SelectFields
                                    id="city"
                                    items={cities}
                                    itemValue="municipality_id"
                                    itemName="municipality_name"
                                    name="city"
                                    value={user.city}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={loadBarangays}
                                />
                            </div>
                            <InputError
                                message={
                                    errors.city ? "This field is required" : ""
                                }
                                className="mt-2"
                            />
                        </div>
                        <div className="">
                            <InputLabel htmlFor="Barangay" value="Barangay" />
                            <div className="relative mt-1">
                                <SelectFields
                                    id="Barangay"
                                    items={barangays}
                                    itemValue="barangay_id"
                                    itemName="barangay_name"
                                    name="barangay"
                                    value={user.barangay}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                            </div>
                            <InputError
                                message={
                                    errors.barangay
                                        ? "This field is required"
                                        : ""
                                }
                                className="mt-2"
                            />
                        </div>
                        <div className="">
                            <InputLabel htmlFor="street" value="Street/Purok" />
                            <div className="relative mt-1">
                                <TextNoIcon
                                    id="street"
                                    type="text"
                                    name="street"
                                    value={user.street}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                            </div>
                            <InputError
                                message={
                                    errors.street
                                        ? "This field is required"
                                        : ""
                                }
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="pb-3 mt-8 font-bold flex items-center text-sm text-gray-400 before:flex-1 before:border-t before:border-gray-400 before:me-6 after:flex-1 after:border-t after:border-gray-400 after:ms-6">
                        Contact Information
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                        <div className="">
                            <InputLabel
                                htmlFor="contact_no"
                                value="Contact No."
                            />
                            <div className="relative mt-1">
                                <TextInput
                                    id="contact_no"
                                    type="text"
                                    name="contact_no"
                                    value={user.contact_no}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                                <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                                    +63 |
                                </span>
                            </div>
                            <InputError
                                message={errors.contact_no}
                                className="mt-2"
                            />
                        </div>
                        <div className="">
                            <InputLabel htmlFor="email" value="Email" />
                            <div className="relative mt-1">
                                <TextInput
                                    id="email"
                                    type="text"
                                    name="email"
                                    value={user.email}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                                <span className="absolute top-1/2 left-4 -translate-y-1/2">
                                    <Mail
                                        color="#3e9392"
                                        size={20}
                                        strokeWidth={1}
                                    />
                                </span>
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="pb-3 mt-8 font-bold flex items-center text-sm text-gray-400 before:flex-1 before:border-t before:border-gray-400 before:me-6 after:flex-1 after:border-t after:border-gray-400 after:ms-6">
                        Water Meter Details
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                        <div className="">
                            <InputLabel
                                htmlFor="meter_brand"
                                value="Meter Brand."
                            />
                            <div className="relative mt-1">
                                <TextInput
                                    id="meter_brand"
                                    type="text"
                                    name="meter_brand"
                                    value={user.meter_brand}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                                <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                                    <Trello
                                        color="#3e9392"
                                        size={20}
                                        strokeWidth={1}
                                    />
                                </span>
                            </div>
                            <InputError
                                message={
                                    errors.meter_brand
                                        ? "This field is required"
                                        : ""
                                }
                                className="mt-2"
                            />
                        </div>
                        <div className="">
                            <InputLabel htmlFor="meter_no" value="Meter No." />
                            <div className="relative mt-1">
                                <TextInput
                                    id="meter_no"
                                    type="text"
                                    name="meter_no"
                                    value={user.meter_no}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                                <span className="absolute top-1/2 left-4 -translate-y-1/2">
                                    <CircleGauge
                                        color="#3e9392"
                                        size={20}
                                        strokeWidth={1}
                                    />
                                </span>
                            </div>
                            <InputError
                                message={
                                    errors.meter_no
                                        ? "This field is required"
                                        : ""
                                }
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="pb-3 mt-8 font-bold flex items-center text-sm text-gray-400 before:flex-1 before:border-t before:border-gray-400 before:me-6 after:flex-1 after:border-t after:border-gray-400 after:ms-6">
                        Account Information
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                        <div className="">
                            <InputLabel htmlFor="username" value="Username" />
                            <div className="relative mt-1">
                                <TextInput
                                    id="username"
                                    type="text"
                                    name="username"
                                    value={user.username}
                                    className="mt-1 block w-full"
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
                            <InputError
                                message={errors.username}
                                className="mt-2"
                            />
                        </div>
                        <div className="">
                            <InputLabel htmlFor="password" value="Password" />
                            <div className="relative mt-1">
                                <TextInput
                                    id="password"
                                    type="text"
                                    name="password"
                                    value={user.password}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={handleChange}
                                />
                                <span className="absolute top-1/2 left-4 -translate-y-1/2">
                                    <Lock
                                        color="#3e9392"
                                        size={20}
                                        strokeWidth={1}
                                    />
                                </span>
                            </div>
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="mt-8 flex justify-start">
                        <SecondaryButton onClick={onClose}>
                            Cancel
                        </SecondaryButton>
                        <PrimaryButton
                            className="ms-3"
                            onClick={submit}
                            disabled={processing}
                        >
                            Save
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </Modal>
    );
}
