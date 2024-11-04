import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Logout({ show, onClose }) {
    return (
        <Modal show={show} onClose={onClose} maxWidth="sm">
            <div className="p-6 w-auto">
                <h2 className="text-lg font-medium text-gray-900">Logout</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Are you sure you want to end the current session?
                </p>
                <div className="mt-6 flex justify-end">
                    <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
                    <DangerButton
                        className="ms-3"
                        onClick={() => (window.location = "/logout")}
                    >
                        Okay
                    </DangerButton>
                </div>
            </div>
        </Modal>
    );
}
