import { FaRegComment } from "react-icons/fa";
import Image from "next/image";
import BookMark from "./bookMark";

export default function PostCardActions({readTime}: {readTime : number}){
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex gap-2 flex-row justify-between items-center">
                <div className="flex gap-2 p-2 hover:bg-gray-100 text-xs flex-row justify-between items-center ">
                    <span className="flex flex-row gap-0 items-center justify-start">
                        <Image src="/like.png" alt="like" width={24} height={24} />
                        <Image alt="fire" src="/fire.png" width={24} height={24} />
                        <Image alt="exploding-head" src="/exploding-head.png" width={24} height={24} />
                        <Image alt="thumbs-up" src="/thumbs-up.png" width={24} height={24} />
                        <Image alt="raising-hands" src="/raising-hands.png" width={24} height={24} />
                    </span>
                    <p>12 Reactions</p>
                </div>
                
                {/* <div className="flex gap-2 p-2 hover:bg-gray-100 text-xs flex-row justify-between items-center ">
                    <FaRegComment />
                    <p>Add Comment</p>
                </div> */}
            </div>
            <div className="gap-4 flex flex-row justify-between items-center">
                <p className="text-xs">{readTime} min read</p>
                <BookMark />
            </div>
        </div>
    );
}