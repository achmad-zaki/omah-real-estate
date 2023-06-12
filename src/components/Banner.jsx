import FilterSearch from './FilterSearch'
import Container from './Container'

import ImgHero from "../assets/hero-image.png"

const Banner = () => {
  return (
    <section id='home' className='pt-40'>
      <Container>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <h1 className='w-full text-5xl md:text-[64px] font-medium leading-snug md:leading-[96px]'>Ready to find your new home</h1>
          <div className='flex gap-x-5 w-full'>
            <div className='bg-primary mt-4 w-8 h-1 ml-auto hidden md:block'></div>
            <p className='text-lg md:text-[20px] text-[#828282] leading-[34px]'>looking for a house with a low price
              and quality here, and sell your house
              quickly here
            </p>
          </div>
        </div>
      </Container>
      <div className='relative lg:container lg:mr-auto py-14'>
        <img src={ImgHero} alt="house-img" />
        <div className='relative max-w-5xl -top-14 md:ml-auto'>
          <FilterSearch />
        </div>
      </div>
    </section>
  )
}

export default Banner