import Link from "next/link";
import PostCardActions from "./posts/postCardActions";

export default function PostCard({id, title, tags, slug, imageURL, createdAt} : postCardParams){
    return (
        <Link href={process.env.NEXTAUTH_URL + "/posts/" + slug}>
            <article className="bg-white p-8 my-2 cursor-pointer">
                <div className="text-sm">
                    Dec 22, 2023 (7 hours ago)
                </div>

                <h2 className="font-bold text-3xl  hover:text-indigo-700 my-4">{title}</h2>
                <div className="flex gap-2 flex-row flex-wrap justify-items-start items-center">
                    {
                        tags.map((tag)=>{
                            return (<span key={tag.id} className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-500 cursor-pointer inline rounded-lg text-xs">#{tag.name}</span>);
                        })
                    }
                </div>
                {/* Actions -> POSTCard */}
                <PostCardActions />
            </article>
        </Link>
    );
}