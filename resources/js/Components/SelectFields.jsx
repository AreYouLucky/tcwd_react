const SelectFields = () => {
  return (
    <div className="relative min-w-40 max-w-full mx-auto">
      
      <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white  border-gray-300 border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
        <option>Project manager</option>
        <option>Software engineer</option>
        <option>IT manager</option>
        <option>UI / UX designer</option>
      </select>
    </div>
  )
}
export default SelectFields;