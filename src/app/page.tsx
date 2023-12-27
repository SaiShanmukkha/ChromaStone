import RightSideBar from '@components/rightSideBar'
import PostCard from '@components/postCard'
import SideNavBar from '@components/sideNav'

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen w-full globalMaxW pt-1 px-1">
      <SideNavBar />

      <section className='px-2 w-6/12'>
        <PostCard link='/posts/abc' />
        <PostCard link='/posts/abc' />
        <PostCard link='/posts/abc' />
        <PostCard link='/posts/abc' />
        <PostCard link='/posts/abc' />
        <PostCard link='/posts/abc' />
      </section>

      <RightSideBar />
    </main>
  )
}
