import { useContext } from "react";
import { HouseContext } from "../context/HouseContext";
import { ImSpinner9 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";

import CardItem from "./CardItem";
import Container from "./Container";

const HouseList = () => {
    const { houses, loading } = useContext(HouseContext);

    if (loading) {
        return (
            <ImSpinner9 size={25} className="animate-spin mx-auto text-primary" />
        );
    }

    return (
        <section id="house-list">
            <Container>
                <div className="flex items-center justify-between">
                    <h3 className="text-[40px] font-medium">The latest</h3>
                    <div className="text-[24px] font-medium underline cursor-pointer">
                        View all
                    </div>
                </div>
                {houses.length < 1 ? (
                    <div className="text-center text-3xl font-semibold mt-20">
                        Data Not Found
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {houses.map((item, index) => {
                            return (
                                <CardItem key={index}>
                                    <CardItem.Header className="relative">
                                        <img src={item.image} alt="" />
                                        <div className="absolute bottom-0 left-0 bg-white w-[90px] h-[56px] font-medium flex items-center justify-center text-primary">
                                            {`${item.room} ${"room"}`}
                                        </div>
                                        <button className="absolute bg-white w-12 h-12 top-5 right-5 rounded-full flex items-center justify-center">
                                            <AiOutlineHeart size={27} className="text-primary" />
                                        </button>
                                    </CardItem.Header>
                                    <CardItem.Body>
                                        <div className="flex items-center justify-between">
                                            <h1 className="text-[32px] font-medium text-secondary capitalize">
                                                {item.type}
                                            </h1>
                                            <p className="text-2xl font-medium">{item.footage}</p>
                                        </div>
                                        <p className="text-[#828282] text-[16px]">
                                            {item.address}, {item.location}
                                        </p>
                                    </CardItem.Body>
                                    <CardItem.Footer>{item.price}</CardItem.Footer>
                                </CardItem>
                            );
                        })}
                    </div>
                )}
            </Container>
        </section>
    );
};

export default HouseList;
