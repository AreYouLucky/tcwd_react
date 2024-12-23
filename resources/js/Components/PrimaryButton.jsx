export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                ` px-4 py-2 text-white font-medium bg-cyan-600 hover:bg-blue-500 active:bg-blue-900 rounded-lg duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
