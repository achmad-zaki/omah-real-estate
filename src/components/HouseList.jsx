import { useContext } from "react";
import { HouseContext } from "../context/HouseContext";
import { ImSpinner9 } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";

import CardItem from "./CardItem";
import Container from "./Container";
import { Link } from "react-router-dom";

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
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <h3 className="text-[40px] font-medium text-center md:text-left">The latest</h3>
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
                                <Link key={index} to={`/house-list/${item.id}`}>
                                    <CardItem>
                                        <CardItem.Header className="relative">
                                            <img src={item.image} alt="" />
                                            <div className="absolute bottom-0 left-0 bg-white w-[90px] h-[56px] font-medium flex items-center justify-center text-primary">
                                                {`${item.room} ${"room"}`}
                                            </div>
                                            <button className="absolute bg-white w-12 h-12 top-5 right-5 rounded-full flex items-center justify-center">
                                                <AiOutlineHeart size={27} className="text-primary" />
                                            </button>
                                        </CardItem.Header>
                                        <CardItem.Body className="mt-6">
                                            <div className="flex items-center justify-between">
                                                <h1 className="text-[32px] font-medium text-secondary capitalize">
                                                    {item.type}
                                                </h1>
                                                <p className="text-2xl font-medium">{item.footage}</p>
                                            </div>
                                            <p className="text-[#828282] text-[16px] mt-1">
                                                {item.address}, {item.location}
                                            </p>
                                        </CardItem.Body>
                                        <CardItem.Footer className="text-primary text-2xl font-medium mt-4">{item.price}</CardItem.Footer>
                                    </CardItem>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </Container>
        </section>
    );
};

export default HouseList;
