// import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Avatar({name, email}:{name: string, email: string}){
    return (
        <div className="flex flex-row gap-2 flex-wrap">
            <div className="px-4 py-3 text-sm text-gray-900">
                <div className="font-bold truncate text-indigo-500">{name}</div>
                {/* <div className="truncate">{email}</div> */}
            </div>
            <button onClick={()=>signOut()} className="rounded-lg bg-indigo-700 text-white text-sm font-semibold m-2 p-2">Log Out</button>
        </div>
        // <div className="relative">       
        //     <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
        //         <div className="rounded-full overflow-hidden h-9 w-9">
        //             <Image 
        //                 src="https://source.unsplash.com/random" 
        //                 alt="Profile Picture"
        //                 width={36}
        //                 height={36}
        //                 className="object-cover object-center"
        //             />
        //         </div>
        //     </button>

        //     <div id="dropdownAvatarName" className="absolute right-5 top-10 z-20 bg-slate-50 divide-y divide-gray-100 rounded-b-xl rounded-l-xl shadow w-60">
        //         <div className="px-4 py-3 text-sm text-gray-900">
        //             <div className="font-bold truncate">{name.split(" ")[0].toUpperCase()}</div>
        //             <div className="truncate">{email}</div>
        //         </div>
        //         <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
        //             {/* <li>
        //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">Account</a>
        //             </li> */}
        //             <li onClick={()=>signOut()} className="cursor-pointer transition-all block px-4 py-2 text-sm hover:font-bold hover:text-indigo-700 hover:bg-gray-100">Sign out</li>
        //         </ul>
        //     </div>
        // </div>
    );
}