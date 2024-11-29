"use client"

import Image from "next/image";
import { useState } from "react";

// const images = [
//     {
//         id: 2,
//         url: "https://images.pexels.com/photos/27409354/pexels-photo-27409354/free-photo-of-clock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     },
//     {
//         id: 1,
//         url: "https://images.pexels.com/photos/25149741/pexels-photo-25149741/free-photo-of-black-and-white-photo-of-a-young-woman-taking-a-picture-with-a-film-camera.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
//     },
//     {
//         id: 3,
//         url: "https://images.pexels.com/photos/24902142/pexels-photo-24902142/free-photo-of-person-holding-a-cupcake-with-a-candle-with-flowers-in-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
//     },
//     {
//         id: 4,
//         url: "https://images.pexels.com/photos/25857969/pexels-photo-25857969/free-photo-of-flowers-close-up.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
//     },
    
// ];

const ProductImages = ({items}: {items:any}) => {
    const [index, setIndex] = useState(0);

    return(
        <div className=" ">
            <div className="h-[500px] relative">
                <Image 
                    src={items[index].image?.url}
                    fill
                    alt=""
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8 cursor-pointer">
                {items.map((item:any, i:number) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8" 
                        key={item._id} 
                        onClick={() => setIndex(i)}
                    >
                        <Image 
                            src={item.image?.url}
                            alt=""
                            fill
                            sizes="30vw" 
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;