import { MdOutlineAddReaction, MdBookmarkBorder, MdOutlineInsertLink, MdOutlineModeComment } from "react-icons/md";

export default function ActionsSideBar(){
    return (
        <aside className="sticky left-0 top-40 py-4 gap-6 w-1/12 h-fit flex flex-col justify-center items-center">
            <div className='text-center cursor-pointer' title='Add Reaction'>
                <span className='text-2xl'><MdOutlineAddReaction /></span>
                <label className='text-md'>21</label>
            </div>
            <div className='text-center cursor-pointer' title='Go to Comments'>
                <span className='text-2xl'><MdOutlineModeComment /></span>
                <label className='text-md'>6</label>
            </div>
            <div className='text-center cursor-pointer' title='Save'>
                <span className='text-2xl'><MdBookmarkBorder /></span>
                <label className='text-md'>33</label>
            </div>
            <div className='text-center cursor-pointer' title='Copy Link'>
                <span className='text-2xl'><MdOutlineInsertLink /></span>
            </div>
      </aside>
    );
}