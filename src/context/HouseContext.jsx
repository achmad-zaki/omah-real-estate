import { createContext, useEffect, useState } from "react"

import { DataHouse } from "../api/Data"

export const HouseContext = createContext()

const HouseProvider = ({ children }) => {
  const [houses, setHouses] = useState(DataHouse)

  // state location
  const [location, setLocation] = useState('Select')
  const [locations, setLocations] = useState([])

  // state price
  const [price, setPrice] = useState('Select')

  // state room
  const [room, setRoom] = useState('Select')
  const [rooms, setRooms] = useState([])

  // state footage
  const [footage, setFootage] = useState('Select')
  const [footages, setFootages] = useState([])

  const [loading, setLoading] = useState(false)

  // fetch  location
  useEffect(() => {
    const allLocation = houses.map((item) => {
      return item.location
    })
    const uniqueLocation = ['Select', ...new Set(allLocation)]
    setLocations(uniqueLocation)
  }, [])

  // fetch room
  useEffect(() => {
    const allRoom = houses.map((item) => {
      return item.room
    })
    const sortRoom = allRoom.sort((a, b) => a - b)
    const uniqueRoom = ['Select', ...new Set(sortRoom)]
    setRooms(uniqueRoom)
  }, [])

  // fetch footage
  useEffect(() => {
    const allFootage = houses.map((item) => {
      return item.footage
    })
    const sortFootage = allFootage.sort((a, b) => a - b)
    const uniqueFootage = ['Select', ...new Set(sortFootage)]
    setFootages(uniqueFootage)
  }, [])

  const handleSearching = () => {

    // set value loading
    setLoading(true)

    // func default select
    const isDefault = (state) => {
      return state.split(' ').includes('Select')
    }

    const minPrice = parseInt(price.split(' ')[0])
    const maxPrice = parseInt(price.split(' ')[2])

    // filter data
    const newHouse = DataHouse.filter((item) => {
      const housePrice = parseInt(item.price)
      if (item.location === location && housePrice >= minPrice && housePrice <= maxPrice &&
        item.room === room &&
        item.footage === footage) {
        return item
      }

      // filter default all
      if (isDefault(location) && isDefault(price) && isDefault(room.toString()) && isDefault(footage.toString())) {
        return item

        // filter location only
      } else if (!isDefault(location) && isDefault(price) && isDefault(room.toString()) && isDefault(footage.toString())) {
        return item.location === location
        
        // filter location & price
      } else if (!isDefault(location) && !isDefault(price) && isDefault(room.toString()) && isDefault(footage.toString())) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return item.location === location && item.price === housePrice
        }
        
        // filter location & room
      } else if (!isDefault(location) && isDefault(price) && !isDefault(room.toString()) && isDefault(footage.toString())) {
          return item.location === location && item.room === room
        
        // filter location & footage
      } else if (!isDefault(location) && isDefault(price) && isDefault(room.toString()) && !isDefault(footage.toString())) {
          return item.location === location && item.footage === footage
        
        // filter location, price & room
      } else if (!isDefault(location) && !isDefault(price) && !isDefault(room.toString()) && isDefault(footage.toString())) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return item.location === location && item.price === housePrice && item.room === room
        }
        
        // filter location, room & footage
      } else if (!isDefault(location) && isDefault(price) && !isDefault(room.toString()) && !isDefault(footage.toString())) {
          return item.location === location && item.room === room && item.footage === footage

        // filter price only
      } else if (isDefault(location) && !isDefault(price) && isDefault(room.toString()) && isDefault(footage.toString())) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return item.price === housePrice
        }

        // filter price & room
      } else if (isDefault(location) && !isDefault(price) && !isDefault(room.toString()) && isDefault(footage.toString())) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return item.price === housePrice && item.room === room
        }

        // filter price & footage
      } else if (isDefault(location) && !isDefault(price) && isDefault(room.toString()) && !isDefault(footage.toString())) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return item.price === housePrice && item.footage === footage
        }
                
        // filter price, room & footage
      } else if (isDefault(location) && !isDefault(price) && !isDefault(room.toString()) && !isDefault(footage.toString())) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return  item.price === housePrice && item.room === room && item.footage === footage
        }

        // filter room only
      } else if (isDefault(location) && isDefault(price) && !isDefault(room.toString()) && isDefault(footage.toString())) {
        return item.room === room
        
        // filter room & footage
      } else if (isDefault(location) && isDefault(price) && !isDefault(room.toString()) && !isDefault(footage.toString())) {
        return item.room === room && item.footage === footage

        // filter footage only
      } else if (isDefault(location) && isDefault(price) && isDefault(room.toString()) && !isDefault(footage.toString())) {
        return item.footage === footage 
      }
    })

    // loading on load data
    setTimeout(() => {
      setLoading(false)
      return newHouse.length < 1 ? setHouses([]) : setHouses(newHouse)
    }, 1000)
  }

  return (
    <HouseContext.Provider
      value={{
        houses,
        location,
        setLocation,
        locations,
        price,
        setPrice,
        room,
        rooms,
        setRoom,
        footage,
        footages,
        setFootage,
        handleSearching,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  )
}

export default HouseProvider