import React, { useId } from 'react'

function Select({
    options = [],
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <select id={id} {...props} ref={ref} className={`px-3 py-2 rounded—lg bg-white outline-none focus:bg-gray-50 border w—full text-black duration-200 ${className}`}>
                {options?.map((option) => (<option key={option} value={option}>{option}</option>))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)