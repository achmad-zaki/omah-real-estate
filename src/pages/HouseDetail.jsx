import { useParams } from "react-router-dom"

import { DataHouse } from "../api/Data"

const HouseDetail = () => {
  const { id } = useParams()
  const itemDetail = DataHouse.find((item) => {
    return item.id === parseInt(id)
  })
  console.log(itemDetail)
  return (
    <div>{itemDetail.type}</div>
  )
}

export default HouseDetail