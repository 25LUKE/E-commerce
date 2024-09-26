"use client"
import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
    return(
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/26952831/pexels-photo-26952831/free-photo-of-model-in-white-shirt-and-checkered-gray-pants-sitting-in-front-of-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/28173267/pexels-photo-28173267/free-photo-of-new-york-city-skyline-glowing-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                    <div className="">
                        <span className="font-medium">Product Name</span>
                        <span className="font-semibold">$49</span>
                    </div>
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-2xl ring1 ring-reed text-reed py-2 px-4 text-xs w-max hover:bg-reed hover:text-white">Add To Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/26952831/pexels-photo-26952831/free-photo-of-model-in-white-shirt-and-checkered-gray-pants-sitting-in-front-of-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/28173267/pexels-photo-28173267/free-photo-of-new-york-city-skyline-glowing-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                    <div className="">
                        <span className="font-medium">Product Name</span>
                        <span className="font-semibold">$49</span>
                    </div>
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-2xl ring1 ring-reed text-reed py-2 px-4 text-xs w-max hover:bg-reed hover:text-white">Add To Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/26952831/pexels-photo-26952831/free-photo-of-model-in-white-shirt-and-checkered-gray-pants-sitting-in-front-of-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/28173267/pexels-photo-28173267/free-photo-of-new-york-city-skyline-glowing-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                    <div className="">
                        <span className="font-medium">Product Name</span>
                        <span className="font-semibold">$49</span>
                    </div>
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-2xl ring1 ring-reed text-reed py-2 px-4 text-xs w-max hover:bg-reed hover:text-white">Add To Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                    <Image src="https://images.pexels.com/photos/26952831/pexels-photo-26952831/free-photo-of-model-in-white-shirt-and-checkered-gray-pants-sitting-in-front-of-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image src="https://images.pexels.com/photos/28173267/pexels-photo-28173267/free-photo-of-new-york-city-skyline-glowing-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                    <div className="">
                        <span className="font-medium">Product Name</span>
                        <span className="font-semibold">$49</span>
                    </div>
                    <div className="text-sm text-gray-500">My Description</div>
                    <button className="rounded-2xl ring1 ring-reed text-reed py-2 px-4 text-xs w-max hover:bg-reed hover:text-white">Add To Cart</button>
            </Link>
        </div>
    )
}

export default ProductList;