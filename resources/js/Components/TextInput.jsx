import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
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
            className={
                "w-full bg-transparent rounded-lg border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-300 outline-none transition focus:border-cyan-600 active:border-cyan-600 disabled:cursor-default disabled:bg-gray-2" +
                className
            }
            ref={input}
        />
    );
});
