"use client";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const { data: session} = useSession();
  if(session){
    redirect("/");
  }
  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-full pt-1 px-1 mb-10">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold my-5 text-center text-gray-800">Login Page</h1>
          <p className="text-sm font-normal text-gray-600 text-center mb-10">Login using one of below options</p>

          <div className="flex flex-col gap-4">
            <button className="font-bold px-6 py-3 rounded-lg border-2 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-300" onClick={()=>signIn("google")}>Google</button>
            <button className="font-bold px-6 py-3 rounded-lg text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-300" onClick={()=>signIn("github")}>GitHub</button>
          </div>

          <p className="text-center my-3">Don&apos;t have an account, <Link className="underline text-blue-600 font-semibold" href={"/register"}>create</Link></p>
        </div>
    </main>
  )
}
