import Link from "next/link";

async function getTagsData(){
    const resp = await fetch(process.env.BASE_URL+"/api/data/tags", {
        next:{
            revalidate: 3600
        }
    });
    if(!resp.ok){
        return {"status": resp.status, "error": resp.statusText};
    }
    const data = await resp.json();
    return {"status": resp.status, "tags": data.tags}
}


export default async function SideNavBar(){
    const data = await getTagsData();

    return (
        <aside className="lg:h-screen mr-2 lg:m-0 lg:w-3/12 h-fit w-full">           
            <section className="my-2 shadow-slate-700 rounded-lg shadow-sm bg-white p-3">
                <h2 className="font-bold mb-4 text-xl">Available Topics</h2> 
                <ul className="flex flex-row lg:flex-col flex-wrap justify-start items-start gap-1">
                    {
                        data.status === 200 ?
                        data.tags.map((tag: tag)=>{
                            return (
                                <Link key={tag.id} href={`/topics/${tag.name}`} className="p-2 hover:text-indigo-700  hover:bg-slate-200 hover:font-semibold rounded-lg">
                                    <li className="inline text-sm">#{tag.name}</li>
                                </Link>
                            );
                        }) : <p className="text-sm">Error Fetching Tags :(</p>
                    }
                    
                </ul>               
            </section>
        </aside>
    );
}