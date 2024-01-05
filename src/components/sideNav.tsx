async function getTagsData(){
    const resp = await fetch(process.env.NEXTAUTH_URL+"/api/data/tags", {
        cache: 'no-store',
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
        <aside className="h-screen w-3/12">           
            <section className="my-2 rounded-lg bg-white p-6">
                <h2 className="font-bold mb-4 text-xl">Available Topics</h2> 
                <ul className="flex flex-col flex-wrap justify-start items-start gap-1">
                    {
                        data.status === 200 ?
                        data.tags.map((tag: tag)=>{
                            return (
                                <li key={tag.id} className="p-2 hover:bg-slate-100 hover:text-indigo-700 hover:font-semibold cursor-pointer inline rounded-lg text-sm">#{tag.name}</li>
                            );
                        }) : <p className="text-sm">Error Fetching Tags :(</p>
                    }
                    
                </ul>               
            </section>
        </aside>
    );
}