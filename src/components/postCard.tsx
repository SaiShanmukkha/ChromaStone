import Link from "next/link";
import PostCardActions from "./posts/postCardActions";

function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

export default function PostCard({id, title, tags, slug, readTime, imageURL, createdAt} : postCardParams){
    return (
        <Link href={process.env.NEXTAUTH_URL + "/posts/" + slug}>
            <article className="bg-white shadow-slate-700 rounded-lg shadow-sm p-8 my-2 cursor-pointer">
                <div className="text-sm">
                    {formatDate(createdAt)}
                </div>

                <h2 className="font-bold text-lg md:text-xl lg:text-2xl hover:text-indigo-700 my-4">{title}</h2>
                <div className="flex gap-2 flex-row flex-wrap justify-items-start items-center">
                    {
                        tags ? tags.map((tag)=>{
                            return (<span key={tag.id} className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-500 cursor-pointer inline rounded-lg text-xs">#{tag.name}</span>);
                        }) : <></>
                    }
                </div>
                {/* Actions -> POSTCard */}
                {/* <PostCardActions readTime={readTime} /> */}
            </article>
        </Link>
    );
}