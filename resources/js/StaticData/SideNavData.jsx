import { Users, Scroll, PhilippinePeso, MessageCircleMore } from "lucide-react";

// Corrected navigations array
export const navigations = [
    {
        name: "Manage Users",
        href: "/admin-dashboard",
        logo: Users, // Pass the actual imported component
    },
    {
        name: "Rates, Dues, and Fees",
        href: "",
        logo: Scroll,
    },
    {
        name: "Billings",
        href: "",
        logo: PhilippinePeso,
    },
    {
        name: "Concerns",
        href: "",
        logo: MessageCircleMore,
    },
];
