import { createContext, useState } from "react"
import { DataReviewer } from "../api/Data"

export const ReviewContext = createContext()

const ReviewProvider = ({ children }) => {
    const [user, setUser] = useState(DataReviewer)
    const context = "review context"
    return (
        <ReviewContext.Provider
            value={{
                context
            }}
        >
            {children}
        </ReviewContext.Provider>
    )
}

export default ReviewProvider