import RightSideBar from '@components/rightSideBar';
import Image from 'next/image';
import DemoMDX from "@components/MD/demo.mdx";
import ActionsSideBar from '@/components/posts/actionsBar';
import Reactions from '@/components/posts/reactions';

export default function Home() {
  return (
    <main className="flex flex-row justify-end min-h-screen w-full globalMaxW pt-1 px-1 mb-10">
      
      {/* TODO:Side Actions Bar */}
      <ActionsSideBar />

      <section className='m-2 w-8/12 rounded-lg overflow-hidden bg-white'>
        <div className='h-96 w-full relative overflow-hidden'>
          <Image 
            src={"https://source.unsplash.com/random"}
            layout='fill'
            className='relative'
            objectFit='cover'
            objectPosition='center'  
            alt="cover-image" />
        </div>

        <div className='p-10'>
          <p className='my-4'>Dec 7, 2023</p>

          {/* TODO: Reactions */}
          <Reactions />

          <h1 className="font-bold text-4xl leading-snug my-4">9 Projects you can do to become a Frontend Master</h1>
          
          <div className="flex gap-2 flex-row flex-wrap justify-items-start items-center">
            <span className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-500 cursor-pointer inline rounded-lg text-sm">#Javascript</span>
            <span className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-500 cursor-pointer inline rounded-lg text-sm">#WebDev</span>
            <span className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-500 cursor-pointer inline rounded-lg text-sm">#React</span>
            <span className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-500 cursor-pointer inline rounded-lg text-sm ">#NextJS</span>
          </div>
        </div>


        <div className='px-10'>
          <DemoMDX />
        </div>

        {/* <CommentMDE /> */}
      </section>

      <RightSideBar />
    </main>
  )
}
