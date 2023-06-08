import Container from './Container'

import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
    return (
        <div className='h-[10vh] bg-bone flex items-center justify-center'>
            <Container className="flex justify-between">
                <div className='text-[#828282] text-[16px]'>
                    Create by <span>@Achmad zaki</span>
                </div>
                <div className='flex items-center gap-x-3 text-primary'>
                    <AiOutlineInstagram size={25} />
                    <FaFacebookF size={21} />
                    <AiOutlineTwitter size={25} />
                </div>
            </Container>
        </div>
    )
}

export default Footer