import RightSideBar from '@components/rightSideBar'
import PostCard from '@components/postCard'
import SideNavBar from '@components/sideNav'

async function getPostsData(){
  const resp = await fetch(process.env.NEXTAUTH_URL + "/api/data/posts", {
    method: "PoST",
    next:{
      revalidate: 3600
    }
  });
  if(!resp.ok){
    return {status: resp.status, message: resp.statusText};
  }
  const pData = await resp.json();
  return  {...pData, status: resp.status};
}

export default async function Home() {
  const postsData = await getPostsData();
  return (
    <main className="flex flex-row min-h-screen w-full globalMaxW pt-1 px-1 mb-10">
      <SideNavBar />

      <section className='px-2 w-6/12'>
        {
          postsData.status === 200 ? 
          <>
            {
              postsData.posts.map((post: postCardParams)=>{
                return (<PostCard key={post.id} {...post} />);
              })
            }
          </> : 
          <div className='font-semibold text-center'>Unable to fetch posts :(</div>
        }
      </section>

      <RightSideBar />
    </main>
  )
}
