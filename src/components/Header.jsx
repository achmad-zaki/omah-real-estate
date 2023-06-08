import { FaBars } from "react-icons/fa"
import { useContext } from "react"
import { HeaderContext } from "../context/HeaderContext"
import Container from "./Container"


const Header = () => {
    const { isShow, setIsShow, navLink, isActive, handleClickActive } = useContext(HeaderContext)
    return (
        <header className="bg-bone py-10 border-b fixed w-full z-10">
            <Container className="flex items-center justify-between">
                <div className="text-2xl text-secondary capitalize font-medium">omah<span className="text-primary">.</span></div>
                <button onClick={() => setIsShow(!isShow)} className="block md:hidden">
                    <FaBars size={23}/>
                </button>
                <ul className="hidden md:flex items-center gap-x-14">
                    {navLink.map((item, index) => {
                        return (
                            <li key={index}>
                                <a
                                    href={item.path}
                                    className={`text-[#828282] text-[16px] ${item.menu === isActive ? "active" : ""}`}
                                    onClick={() => handleClickActive(item.menu)}
                                >
                                    {item.menu}
                                </a>
                            </li>
                        )
                    })}
                    <button className="btn-primary py-5 px-10 flex-shrink-0">
                        Log in
                    </button>
                </ul>
            </Container>
        </header>
    )
}

export default Header