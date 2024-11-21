const SelectFields = ({
    id,
    items,
    itemValue,
    itemName,
    name,
    value,
    className,
    isFocused,
    onChange,
}) => {
    return (
        <div className={`relative ${className}`}>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full bg-transparent rounded-lg border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-3 text-gray-600 outline-none transition focus:border-cyan-600 active:border-cyan-600 disabled:cursor-default disabled:bg-gray-2"
                autoFocus={isFocused}
            >
                <option key="" value="">
                    Choose
                </option>
                {items.map((item) => (
                    <option key={item[itemValue]} value={item[itemValue]}>
                        {item[itemName]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectFields;
