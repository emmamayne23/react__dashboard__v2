/* eslint-disable react/prop-types */
import { useState } from "react"

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <div>
            <div className="border-b border-b-gray-500">
                <button onClick={() => setIsOpen(prevState => !prevState)} className="w-full text-left px-4 py-2 font-semibold text-lg flex justify-between">
                    {title}
                    <span className="text-xl">{isOpen ? "-" : "+"}</span>
                </button>
                { isOpen && (
                    <div className="content px-4 py-4 text-gray-300">
                        {content}
                    </div>
                ) }
            </div>
            
        </div>
    </>
  )
}

export default Accordion