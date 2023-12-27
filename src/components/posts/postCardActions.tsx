import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

export default function PostCardActions(){
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex gap-2 flex-row justify-between items-center">
                <div className="flex gap-2 p-2 hover:bg-gray-100 text-xs flex-row justify-between items-center ">
                    <span className="flex flex-row gap-0 items-center justify-start">
                        <img src="/like.png" width={24} height={24} />
                        <img src="/fire.png" width={24} height={24} />
                        <img src="/exploding-head.png" width={24} height={24} />
                        <img src="/thumbs-up.png" width={24} height={24} />
                        <img src="/raising-hands.png" width={24} height={24} />
                    </span>
                    <p>12 Reactions</p>
                </div>
                <div className="flex gap-2 p-2 hover:bg-gray-100 text-xs flex-row justify-between items-center ">
                    <FaRegComment />
                    <p>Add Comment</p>
                </div>
            </div>
            <div className="gap-4 flex flex-row justify-between items-center">
                <p className="text-xs">9 min read</p>
                <span className="hover:text-indigo-600 text-xl p-2 hover:bg-indigo-100  rounded-lg"><CiBookmark /></span>
            </div>
        </div>
    );
}