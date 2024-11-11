const Table = ({ headers, children }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm text-left bg-white border">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="py-3 text-center font-bold ">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">{children}</tbody>
            </table>
        </div>
    );
};

export default Table;
