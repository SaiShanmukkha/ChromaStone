import Image from "next/image";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";

export default function RightSideBar(){
    return (
        <aside className="w-full h-fit lg:w-3/12 m-1">
            <section className="my-2 rounded-lg bg-white p-6">
                <h1 className="font-extrabold mb-4 text-center text-3xl">Blogger</h1>
                <div className="flex mb-4 gap-4 justify-start items-center">
                    <div className="rounded-full overflow-hidden h-12 w-12">
                        <Image 
                            src="https://source.unsplash.com/random" 
                            alt="Profile Picture"
                            width={48}
                            height={48}
                            className="object-cover object-center"
                        />
                    </div>
                    <h2 className="text-indigo-700 font-bold text-xl">Sai Shanmukkha</h2>
                </div>
                <div>
                    <p className="mb-4 text-sm font-light italic text-gray-700">&quot;I am an aspiring software engineer with a fervent passion for delving into the realms of software engineering, full stack development, and cloud technologies. Through my blog, I aim to demystify the complexities of these fields, sharing my journey and insights with a community of tech enthusiasts. My commitment is to continuous learning and contributing to the vibrant world of technology, one innovative post at a time.&quot;</p>
                    <Link target="_blank"  href={"https://saishanmukkha.vercel.app"}>
                        <div className="p-2 bg-indigo-700 text-center text-sm text-white font-medium rounded-lg">
                            My Profile
                        </div>
                    </Link>
                </div>
                <div className="mt-4">
                    <h2 className="font-semibold">Connect with me:</h2>
                    <ul className="mt-2 flex flex-row gap-4 justify-start items-center">
                        <li>
                            <Link target="_blank" className="text-2xl" href={"https://linkedin.com/in/surapaneni-sai-shanmukkha-437b40190/"}>
                                <GrLinkedin />
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" className="text-2xl" href={"https://github.com/saishanmukkha"}>
                                <FaGithub />
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" className="text-2xl"  href={"mailto:ssshanmukkha@gmail.com"}>
                                <MdMail />
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            {/* <section className="my-2 bg-white p-6">
                <h2>Other Posts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias officia architecto quae ut error perspiciatis ipsum culpa laborum laudantium id, tempora, quaerat labore atque ullam eum unde dolor, molestias cupiditate.</p>
            </section> */}
        </aside>
    );
}