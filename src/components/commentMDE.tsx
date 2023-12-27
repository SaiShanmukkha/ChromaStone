import Image from "next/image";
import { HiMiniFlag } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";

export default function CommentMDE(){
    return (
        <div className="px-10 py-4">
            <h1 className="font-bold text-3xl my-4">Comments</h1>
            
            <article className="flex flex-row gap-2">
                <div className="rounded-full overflow-hidden h-9 w-9 my-2">
                    <Image 
                        src="https://source.unsplash.com/random" 
                        alt="Profile Picture"
                        width={36}
                        height={36}
                        className="object-cover object-center"
                    />
                </div>

                <div className="w-11/12">
                    <div>
                        <textarea className="p-2 border-2 w-full h-full" />
                    </div>
                    <div className="flex flex-row gap-3 text-sm">
                        <button className="px-4 py-2 mb-8 font-medium bg-indigo-600 text-white rounded-lg">Add Comment</button>
                    </div>
                </div>
            </article>

            <article className="flex flex-row gap-2">
                <div className="rounded-full overflow-hidden h-9 w-9 my-4">
                    <Image 
                        src="https://source.unsplash.com/random" 
                        alt="Profile Picture"
                        width={36}
                        height={36}
                        className="object-cover object-center"
                    />
                </div>

                <div className="w-11/12">
                    <div className="p-4 border-2">
                        <div className="my-1 flex flex-row gap-4 justify-start items-center">
                            <h4 className="font-semibold text-lg">James Marcon</h4>
                            <span className="text-sm">Dec 25, 2023</span>
                        </div>
                        <p className="text-lg">Interesting perspective on TailwindCSS! While it simplifies styling, your detailed analysis points out valid concerns like performance and readability. However, it's crucial to acknowledge Tailwind's utility for rapid prototyping and its resourceful design presets. Balancing its advantages with semantic CSS, as you demonstrated, offers a thoughtful approach to maintain clarity and scalability. Keep the discussion alive, considering both sides, and explore evolving methodologies in web development. Happy coding! 🚀</p>
                    </div>
                    <div className="flex flex-row gap-3 text-sm">
                        <button className="flex flex-row flex-nowrap gap-1 justify-center items-center p-2 font-medium my-1 hover:bg-blue-50 rounded-lg">
                            <MdFavoriteBorder />
                            <span>Like</span>
                        </button>
                        <button className="flex flex-row flex-nowrap gap-1 justify-center items-center p-2 font-medium my-1 hover:bg-red-50 text-red-500 rounded-lg">
                            <HiMiniFlag />
                            <span>Report Abuse</span>
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}