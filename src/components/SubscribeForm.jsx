

const SubscribeForm = () => {
    return (
        <section className='min-h-[60vh] flex items-center justify-center bg-primary my-20 container ml-auto'>
            <div className="flex flex-col gap-y-8">
                <h1 className="font-medium text-white text-3xl md:text-5xl text-center leading-relaxed md:leading-[75px]">Subscribe to get a discount <br /> of 30%</h1>
                <div className="relative">
                    <input type="text" className="py-8 w-full px-5 focus:outline-none" placeholder="Enter your email address" />
                    <div className="absolute right-4 bottom-3">
                        <button className="btn-primary px-8 py-5">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeForm