export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={`font-medium text-gray-500 font-mono` + className}
        >
            {value ? value : children}
        </label>
    );
}
