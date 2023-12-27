import Image from "next/image";

export default function Reactions(){
    return (
        <div className="my-2 flex flex-row gap-4 items-center justify-start">
            <div className='flex gap-2 flex-row items-center justify-center'>
              <Image alt="Likes" src="/like.png" width={30} height={30} />
              <label className='font-semibold'>20</label>
            </div>
            <div className='flex gap-2 flex-row items-center justify-center'>
              <Image alt="Fire" src="/fire.png" width={30} height={30} />
              <label className='font-semibold'>44</label>
            </div>
            <div className='flex gap-2 flex-row items-center justify-center'>
              <Image alt="Exploding-Head" src="/exploding-head.png" width={30} height={30} />
              <label className='font-semibold'>2</label>
            </div>
            <div className='flex gap-2 flex-row items-center justify-center'>
              <Image alt="Thumbs-Up" src="/thumbs-up.png" width={30} height={30} />
              <label className='font-semibold'>9</label>
            </div>
            <div className='flex gap-2 flex-row items-center justify-center'>
              <Image alt="Raising-Hands" src="/raising-hands.png" width={30} height={30} />
              <label className='font-semibold'>11</label>
            </div>
        </div>
    );
}