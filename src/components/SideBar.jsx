import { useContext } from "react"
import { IoClose } from "react-icons/io5"
import { HeaderContext } from "../context/HeaderContext"

const SideBar = () => {
    const { isShow, handleShow, navLink } = useContext(HeaderContext)
  return (
    <div className={`py-5 ${isShow ? "right-0" : "-right-full"} w-1/2 transition-all duration-300 bg-white fixed z-30 top-0 h-full shadow-2xl md:hidden`}>
        <div className="flex flex-col h-full">
            <div className="self-end px-3 mb-3">
                <button onClick={handleShow} className="">
                    <IoClose size={35}/>
                </button>
            </div>
            <ul className="h-full flex flex-col items-center justify-center gap-y-10">
                {navLink.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.path} className="text-[16px] font-medium text-[#828282]">{item.menu}</a>
                        </li>
                    )
                })}
                <button className="btn-primary px-10 py-5">Login</button>
            </ul>
        </div>
    </div>
  )
}

export default SideBar