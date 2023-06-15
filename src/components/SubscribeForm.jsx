

const SubscribeForm = () => {
    return (
        <section className='min-h-[60vh] flex items-center justify-center bg-primary my-20'>
            <div className="flex flex-col gap-y-8">
                <h1 className="font-medium text-white text-2xl md:text-5xl text-center leading-relaxed md:leading-[75px]">Subscribe to get a discount <br /> of 30%</h1>
                <div className="relative px-3">
                    <input type="text" className="py-6 w-full px-3 focus:outline-none placeholder:text-xs" placeholder="Enter your email address" />
                    <div className="absolute right-5 bottom-3">
                        <button className="btn-primary px-6 py-3">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeForm