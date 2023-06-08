import { HouseContext } from "../context/HouseContext"
import { useContext } from "react"
import LocationDropdown from "./LocationDropdown"
import PriceDropdown from "./PriceDropdown"
import RoomDropdown from "./RoomDropdown"
import FootageDropdown from "./FootageDropdown"

const FilterSearch = () => {
  const { handleSearching } = useContext(HouseContext)
  return (
    <div className='bg-white shadow-2xl min-h-[112px] flex items-center justify-center px-4 py-5'>
        <div className='flex flex-col md:flex-row gap-y-3 md:gap-x-16 justify-between items-center w-full'>
            <div className="flex flex-col md:flex-row items-center gap-y-5 md:gap-x-10 w-full">
                <LocationDropdown/>
                <PriceDropdown/>
                <RoomDropdown/>
                <FootageDropdown/>
            </div>
            <button onClick={handleSearching} className="btn-primary py-6 px-12 w-full md:w-auto">Search</button>
        </div>
    </div>
  )
}

export default FilterSearch