export default function PostCard(){
    return (
        <article className="bg-white p-8 my-2 cursor-pointer">
            <div className="text-sm">
                Dec 22, 2023 (7 hours ago)
            </div>

            <h2 className="font-bold text-3xl  hover:text-indigo-700 my-4">9 Projects you can do to become a Frontend Master</h2>
            <div className="flex gap-2 flex-row flex-wrap justify-items-start items-center">
                <span className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-500 cursor-pointer inline rounded-lg text-xs">#Javascript</span>
                <span className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-500 cursor-pointer inline rounded-lg text-xs">#WebDev</span>
                <span className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-500 cursor-pointer inline rounded-lg text-xs">#React</span>
                <span className="p-2 hover:bg-indigo-50 hover:text-indigo-700 font-semibold text-slate-500 cursor-pointer inline rounded-lg text-xs ">#NextJS</span>
            </div>
            {/* Actions -> POSTCard */}
        </article>
    );
}