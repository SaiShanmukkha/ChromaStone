import Image from 'next/image';
import RightSideBar from '@components/rightSideBar';
import ActionsSideBar from '@components/posts/actionsBar';
import Reactions from '@components/posts/reactions';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@utils/mdxCompnnets';

async function getBlogContent(contentURL:string) {
  const res = await fetch(process.env.BASE_URL+'/api/data/content', 
    { 
      method: "POST",
      body: contentURL,
      headers: {
        'Content-Type': 'text/plain'
      },
      next:{
        revalidate: 3600
      }
    });
    if(!res.ok){
      return {
        error: res.statusText, 
        status: res.status
      };
    }
    const cd = await res.text();

    return {
      status: res.status, 
      content : JSON.stringify(cd)
    };
  }

async function getBlogData(slug:string) {
  const res = await fetch(process.env.BASE_URL+'/api/data/post', 
    { 
      method: "POST",
      body: slug,
      next:{
        revalidate: 3600
      }
    });
    if(!res.ok){
      return {
        status: res.status,
        error: res.statusText
      };
    }
    const cd = await res.json();
    return {
      status: res.status, 
      postData : cd 
    };
  }
  
  export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const blogDataResp = await getBlogData(params.slug);
    
    if(blogDataResp?.status === 400){
      return notFound();
    }
    
    if(blogDataResp?.status != 200){
      return (
        <main className="flex flex-row justify-center items-center min-h-screen w-full globalMaxW pt-1 px-1 mb-2">
          <p className='font-semibold'>
            Unable to fetch blog post :(
          </p>
        </main>
      );
    }
    
    const contentRESP = await getBlogContent(blogDataResp.postData.contentURL);
    if(contentRESP.status === 404){
      return notFound();
    }
    if(contentRESP.status != 200){
      return <p>Unable to load Page</p>;
    }

    const markdown = JSON.parse(contentRESP.content!);

  return (
    <main className="flex flex-col lg:flex-row items-start justify-end min-h-screen w-full globalMaxW mb-2">
      
      <ActionsSideBar />

      <section className='pt-1 w-full lg:w-8/12 rounded-lg overflow-hidden bg-white'>
        <div className='h-96 w-full relative overflow-hidden'>
          <Image 
            src={blogDataResp.postData!.imageURL}
            layout='fill'
            priority
            className='relative'
            objectFit='cover'
            objectPosition='center'  
            alt="cover-image" />
        </div>

        <div className='p-4 lg:p-10'>
          <p className='my-4'>Dec 7, 2023</p>

          <Reactions />

          <h1 className="font-bold text-3xl lg:text-4xl leading-snug my-4">{blogDataResp.postData!.title}</h1>
          
          <div className="flex gap-2 flex-row flex-wrap justify-items-start items-center">
            {
              blogDataResp.postData!.tags.map((tag: tag)=>{
                return (
                  <span key={tag.id} className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-700 cursor-pointer inline rounded-lg text-sm">#{tag.name}</span>
                );
              })
            }
          </div>
        </div>

        <div className="prose prose-lg prose-h1:text-3xl px-4 md:px-16 mb-10">
          <MDXRemote 
            source={markdown} 
            components={mdxComponents}
          />
        </div>

      </section>

      <RightSideBar />
    </main>
  )
}
