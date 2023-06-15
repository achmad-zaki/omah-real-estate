import CardItem from './CardItem'
import Container from './Container'

import ImgBlog from "../assets/house-blog.png"
import ImgContent from "../assets/image-blog.png"

const Blog = () => {
    return (
        <section className='pt-20'>
            <Container>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <h3 className='text-[40px] font-medium text-center md:text-left'>Always check our lates blog
                    </h3>
                    <div className='text-[24px] font-medium underline cursor-pointer'>View all</div>
                </div>
                <div className='flex flex-col gap-x-10 lg:items-start lg:flex-row mt-14'>
                    <CardItem className="">
                        <CardItem.Header>
                            <img src={ImgBlog} className='w-full lg:max-h-[400px]' alt="" />
                        </CardItem.Header>
                        <CardItem.Body className="mt-6">
                            <h1 className='text-2xl font-medium'>Tips and tricks in choosing a house</h1>
                            <p className='text-[#828282] text-[16px] font-normal mt-2'>tips and tricks to buy a house easily here is to buy at a low price</p>
                        </CardItem.Body>
                    </CardItem>
                    <div className='flex flex-col gap-y-6 mt-10'>
                        <div className='flex flex-col-reverse lg:flex-row items-center gap-x-3 gap-y-2 '>
                            <div className='flex flex-col  items-start w-full gap-y-2'>
                                <h1 className='text-xl md:text-2xl font-medium'>Creating a clean
                                    and elegant home
                                </h1>
                                <p className='text-[16px] text-[#828282]'>Albert firdaus</p>
                            </div>
                            <img src={ImgContent} className='w-full object-cover object-center md:max-h-[184px]' alt="" />
                        </div>
                        <div className='flex flex-col-reverse lg:flex-row items-center gap-x-3 gap-y-2 '>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='text-xl md:text-2xl font-medium'>Creating a clean
                                    and elegant home
                                </h1>
                                <p className='text-[16px] text-[#828282]'>Albert firdaus</p>
                            </div>
                            <img src={ImgContent} className='w-full object-cover object-center md:max-h-[184px]' alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Blog