import React from 'react'

function Card() {
    return (
        <>
            <div className='w-full py-[10rem] px-4 bg-white'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                    <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img
                            src="https://www.classicinformatics.com/hubfs/full-stack%20developer.png#keepProtocol"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">About Macbook</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                            </p>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Read
                            </button>
                        </div>
                    </div>
                    <div className='w-full shadow-2xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                        <img
                            src="https://www.biztechcs.com/wp-content/uploads/2021/04/Why-Flutter-is-Better-for-App-Development-jpg-webp.webp"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">About Macbook</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                            </p>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Read
                            </button>
                        </div>
                    </div>
                    <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img
                            src="https://shalb.com/wp-content/uploads/2019/11/Devops1.jpeg"
                            alt="Laptop"
                            className="h-[200px] w-full rounded-md object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-semibold">About Macbook</h1>
                            <p className="mt-3 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                            </p>
                            <button
                                type="button"
                                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Read
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card