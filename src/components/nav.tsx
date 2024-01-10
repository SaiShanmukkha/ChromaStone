// "use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ThemeSwitcher from "@components/UI/themeSwitch";
import Avatar from "./avatar";

export default function NavBar(){
    // const { data: session} = useSession();
    return (
        <nav className="bg-white fixed top-0 z-10 flex flex-row items-center justify-center w-full border-b-2 h-14">
            <main className="flex flex-row items-center justify-between w-full h-full globalMaxW">
                <Link href={"/"}>
                    <div className="flex flex-row justify-center items-center w-fit">
                        <Image placeholder="empty" style={{objectFit:"cover"}} src="/icon.png" alt="ChromaStone" width={60} height={60} />
                        <h2 className="font-extrabold text-xl">ChromaStone</h2>
                    </div>
                </Link>

                {/* <div className="">
                    <input className="font-normal focus:border-2 focus:border-indigo-600 text-md outline-none border-2 placeholder:text-black border-black px-4 py-1 rounded-lg" type="text" placeholder="Search..." />
                </div> */}

                {/* <div className="gap-10 flex flex-row justify-between items-center">
                    <ThemeSwitcher />
                    {
                        session ? 
                        <>
                            <Avatar name={session.user.name} email={session.user.email} />
                        </>: 
                        <>
                            <Link href={"/login"}><button className="font-medium bg-indigo-700 text-white transition-all cursor-pointer rounded-lg border-indigo-600 text-md px-2 py-1 border-2">Login</button></Link>
                        </>
                    }
                </div> */}
            </main>
        </nav>
    );
}