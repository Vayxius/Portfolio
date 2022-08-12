import React from 'react'
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { VscFileSubmodule, VscTools } from "react-icons/vsc";
import { RiDashboardFill } from "react-icons/ri";
import { AiOutlineBarChart, AiOutlineFileText, AiOutlineHome, AiOutlineFilePdf } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const Menus = [
        { title: "Home", active: true, icon: <AiOutlineHome />, link: "/"},
        { title: "CV", icon: <AiOutlineFileText />, link: "/curriculum-vitae"},
        { title: "Projects", icon: <BsReverseLayoutTextSidebarReverse />},
        { title: "Media", spacing: true, icon: <BsFillImageFill /> },
        { title: "Pages", icon: <AiOutlineFileText /> },
        { title: "Analytics", icon: <AiOutlineBarChart /> },
        { title: "Contact", spacing: true, icon: <MdOutlineContactMail /> },
        { title: "Tools", icon: <VscTools />,submenu: true, submenuItems:[
          {title:"PDF Viewer", icon: <AiOutlineFilePdf />},
        ] },
    ];
    const navigate = useNavigate();

    return (
        <div className={`bg-sky-500 h-screen p-5 pt-8 ${open ? "w-64" : "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-white text-sky-500 text-3xl rounded-full absolute -right-3 top-9 border border-sky-500 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen (!open)} />
            <div className='inline-flex'>
                <VscFileSubmodule className='bg-sky-500 text-4xl rounded cursor-pointer block float-left mr-2 text-white' />
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}> Portfolio </h1>
            </div>

            <div className={`flex items-center rounded-md bg-slate-700 mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
                <BsSearch className={`text-white text-md block float-left cursor-pointer ${open && "mr-2"}`} />
                <input type={"Search"} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
            </div>

            <div className='pt-6'>
                <hr className='border border-sky-300 bg-sky-300'></hr>
            </div>

            <ul className='pt-2'>
                {Menus.map((menu, index) => (
                <>
                <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-sky-300 ${menu.active ? "bg-sky-700 hover:bg-sky-700" : "bg-transparent"} rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`} onClick={() => navigate(menu.link)}>
                    <span className='text-2xl block float-left'>
                        {menu.icon ? menu.icon : <RiDashboardFill />}
                    </span>
                    <span className={`text-base font-medium flex-1 ${ !open && "hidden" }`}>
                        {menu.title}
                    </span>
                    {menu.submenu && open && (
                        <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)} />
                    )}
                </li>
                    {menu.submenu && submenuOpen && open && (
                    <ul>
                        {menu.submenuItems.map((submenuItem, index) => (
                            <li key={index} className={`text-white text-sm flex items-center gap-x-2 cursor-pointer p-2 px-7 hover:bg-sky-300 rounded-md`}>
                            <span className='text-xl block float-left'>
                                {submenuItem.icon ? submenuItem.icon : <RiDashboardFill />}
                            </span>
                            {submenuItem.title}
                            </li>
                        ))}
                    </ul>
                    )}
                </>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar;