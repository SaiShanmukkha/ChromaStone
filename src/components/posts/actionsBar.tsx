import { MdOutlineAddReaction, MdBookmarkBorder, MdOutlineInsertLink, MdOutlineModeComment } from "react-icons/md";

export default function ActionsSideBar(){

    const handleCopyLink = ()=>{
        navigator.clipboard.writeText(window.location.href)
            .then(()=>alert("Blog Post Link Copied to clipboard"));
    };


    return (
        <aside className="bg-white sticky z-50 left-0 top-0 lg:top-40 px-2 py-6 lg:py-10 lg:m-1 lg:rounded-lg gap-6 w-full lg:w-1/12 h-fit flex flex-row lg:flex-col justify-around items-center">
            {/* <div className='flex flex-row lg:flex-col gap-3 items-center justify-center cursor-pointer' title='Add Reaction'>
                <span className='text-2xl'><MdOutlineAddReaction /></span>
                <label className='text-md'>21</label>
            </div> */}
            {/* <div className='flex flex-row lg:flex-col items-center justify-center gap-3 cursor-pointer' title='Go to Comments'>
                <span className='text-2xl'><MdOutlineModeComment /></span>
                <label className='text-md'>6</label>
            </div> */}
            {/* <div className='flex flex-row lg:flex-col gap-3 items-center justify-center cursor-pointer' title='Save'>
                <span className='text-2xl'><MdBookmarkBorder /></span>
                <label className='text-md'>33</label>
            </div> */}
            <div className='cursor-pointer' title='Copy Link' onClick={handleCopyLink}>
                <span className='text-2xl'><MdOutlineInsertLink /></span>
            </div>
      </aside>
    );
}