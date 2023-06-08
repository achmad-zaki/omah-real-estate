import { createContext, useState } from "react"

export const HeaderContext = createContext()

const HeaderProvider = ({children}) => {
    const [isActive, setIsActive] = useState("Home")
    const [isShow, setIsShow] = useState(false)
    const handleShow = () => {
        setIsShow(false)
    }
    console.log(isShow)
    const navLink = [
        {
            path: "#home",
            menu: "Home",
        },
        {
            path: "#house-list",
            menu: "To rent",
        },
        {
            path: "#",
            menu: "For sale",
        },
        {
            path: "#",
            menu: "Blog",
        }
    ]

    const handleClickActive = (event) => {
        setIsActive(event)
    }
  return (
    <HeaderContext.Provider
        value={{
            navLink,
            isActive,
            setIsActive,
            handleClickActive,
            isShow,
            setIsShow,
            handleShow,
        }}
    >
        {children}
    </HeaderContext.Provider>
  )
}

export default HeaderProvider