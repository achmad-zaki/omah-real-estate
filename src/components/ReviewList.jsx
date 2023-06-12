import Container from './Container'
import CardItem from "./CardItem"

import { DataReviewer } from '../api/Data'

import { Swiper, SwiperSlide } from "swiper/react"

import { Pagination } from 'swiper'

import "swiper/css"
import "swiper/css/pagination";

const ReviewList = () => {
    console.log(DataReviewer)
    return (
        <section className='pt-20'>
            <Container>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <h3 className='text-[40px] font-medium text-center md:text-left'>Some people are very <br />
                        satisfied buying a house here
                    </h3>
                    <div className='text-[24px] font-medium underline cursor-pointer'>View all</div>
                </div>
                <Swiper
                    modules={[Pagination]}
                    pagination={true}
                    className='mt-10'
                    breakpoints={{
                        480: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        }
                    }}
                    spaceBetween={30}
                    centeredSlides={false}
                >
                    {DataReviewer.map((item) => (
                        <SwiperSlide key={item.id} className='pb-14'>
                            <CardItem>
                                <CardItem.Header className="relative">
                                    <img src={item.image} className='w-full' alt="" />
                                    <div className='absolute bottom-0 left-0 bg-white w-[90px] h-[56px] font-medium flex items-center justify-center text-primary'>{item.name}</div>
                                </CardItem.Header>
                                <CardItem.Body className="mt-8">
                                    <h1 className='text-[24px] font-medium'>
                                        {item.feedback}
                                    </h1>
                                </CardItem.Body>
                            </CardItem>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    )
}

export default ReviewList