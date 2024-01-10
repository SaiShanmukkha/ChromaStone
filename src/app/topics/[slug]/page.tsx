import PostCard from '@components/postCard'
import { notFound } from 'next/navigation';

async function getTagData(slug: string){
  const resp = await fetch(process.env.BASE_URL  + "/api/data/tag", {
    method: "POST",
    body: slug,
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

export default async function TopicPage({ params }: { params: { slug: string } }) {
  const tagData = await getTagData(params.slug);
  if(tagData.status === 404){
    return notFound();
  }

  if(tagData.status != 200){
    return (
      <div className='font-bold text-center py-10'>Unable to fetch data. Please try again later :(</div>
    );
  }

  return (
    <main className="flex flex-col justify-start min-h-screen w-full globalMaxW pt-1 px-1 mb-10">
        <div className="bg-white p-2 h-fit m-2 rounded-lg">
          <h1 className="font-bold text-2xl my-4 mx-1">#{params.slug}</h1>
          <p className="mx-3 mb-4">
            {tagData.description}
          </p>
        </div>

      <section className='px-2 w-full mt-4'>
        {
          tagData.status === 200 ? 
          <>
          <h1 className='font-bold text-3xl'>Posts</h1>
          {

            tagData.posts.length > 0 ? 
            <div className="my-2 grid grid-cols-1 lg:grid-cols-2 items-stretch gap-1">
            {
              tagData.posts.map((post: postCardParams)=>{
                return (
                  <PostCard key={post.id} {...post} />
                  );
                }) 
            }          
          </div> : <p className='font-medium py-10 text-center'>No posts under this tag.</p>
        }

        </> : 
          <div className='font-semibold text-center'>No Posts on this topic.</div>
        }
      </section>

    </main>
  )
}
