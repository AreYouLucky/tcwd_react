import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        placeholder = "adsas",
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            placeholder={placeholder}
            className={
                "w-full bg-transparent rounded-l-lg border border-stroke border-gray-300 dark:border-dark-3 py-[3px] text-gray-600 outline-none transition focus:border-cyan-600 active:border-cyan-600 disabled:cursor-default disabled:bg-gray-2" +
                className
            }
            ref={input}
        />
    );
});
