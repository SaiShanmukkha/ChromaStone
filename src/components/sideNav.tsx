import Image from "next/image";
import Link from "next/link";

export default function SideNavBar(){

    return (
        <aside className="h-screen w-3/12">           
            <section className="my-2 rounded-lg bg-white p-6">
                <h2 className="font-bold mb-4 text-xl">Available Topics</h2> 
                <ul className="flex flex-col flex-wrap justify-start items-start gap-1">
                    <li className="p-2 hover:bg-slate-100 hover:text-indigo-700 hover:font-semibold cursor-pointer inline rounded-lg text-md">#aws</li>
                    <li className="p-2 hover:bg-slate-100 hover:text-indigo-700 hover:font-semibold cursor-pointer inline rounded-lg text-md">#python</li>
                    <li className="p-2 hover:bg-slate-100 hover:text-indigo-700 hover:font-semibold cursor-pointer inline rounded-lg text-md">#linux</li>
                    <li className="p-2 hover:bg-slate-100 hover:text-indigo-700 hover:font-semibold cursor-pointer inline rounded-lg text-md">#docker</li>
                    <li className="p-2 hover:bg-slate-100 hover:text-indigo-700 hover:font-semibold cursor-pointer inline rounded-lg text-md">#kubernetes</li>
                    <li className="p-2 hover:bg-slate-100 hover:text-indigo-700 hover:font-semibold cursor-pointer inline rounded-lg text-md">#cloud</li>
                    <li className="p-2 hover:bg-slate-100 hover:text-indigo-700 hover:font-semibold cursor-pointer inline rounded-lg text-md">#csharp</li>
                    <li className="p-2 hover:bg-slate-100 hover:text-indigo-700 hover:font-semibold cursor-pointer inline rounded-lg text-md">#dotnet</li>
                </ul>               
            </section>
        </aside>
    );
}