'use client'
import Link from 'next/link';
import Image from 'next/image';
import react, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import {BiBookBookmark, BiSolidMessageRounded} from 'react-icons/bi';
import {BsFillPersonVcardFill, BsPersonWorkspace, BsTelegram} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {GiHamburgerMenu, GiSkills} from 'react-icons/gi';
import {CgCloseR} from 'react-icons/cg';
import logotipo from '../../../public/assets/logotipo.png';
import {IoLogoWhatsapp} from 'react-icons/io';



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuClose, setMenuClose] = useState(false);

    
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="fixed w-full h-24 shadow-sm bg-gradient-to-r from-[#0F182C] to-[#16304E] font-sansnarrow">
            <div className="flex justify-between items-center h-full px-4">
                <Link href='/'>
                    <Image
                        src={logotipo.src}
                        alt="logo"
                        width="120"
                        height="75"
                        className="cursor-pointer"
                        priority
                    />
                </Link>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex text-sm mr-52 mt-8">
                        <Link href="/">
                            <li className=" text-white  p-2 uppercase py-2
                            md:px-6 text-center 
                             text-bold
                             hover:text-[#8D6D3A] active:text-[#382b18]  hover:bg-[#58585880] active:bg-[#cacad26c]
                             active:text-[#bebdc9e1] 
                             transition duration-500 ease-in-out">Sobre mim</li>
                        </Link>
                        <Link href="/">
                            <li className="pb-2 text-white  p-2 uppercase py-2
                            md:px-6 text-center 
                             text-bold
                             hover:text-[#8D6D3A] active:text-[#382b18]  hover:bg-[#58585880] active:bg-[#cacad26c]
                             active:text-[#bebdc9e1] 
                             transition duration-500 ease-in-out">Skills</li>
                        </Link>
                        <Link href="/">
                            <li className="pb-2 text-white  p-2 uppercase py-2
                            md:px-6 text-center 
                             text-bold
                             hover:text-[#8D6D3A] active:text-[#382b18]  hover:bg-[#58585880] active:bg-[#cacad26c]
                             active:text-[#bebdc9e1] 
                             transition duration-500 ease-in-out">Portfólio</li>
                        </Link>
                        <Link href="/">
                            <li className="pb-2 text-white  p-2 uppercase py-2
                            md:px-6 text-center 
                             text-bold
                             hover:text-[#8D6D3A] active:text-[#382b18]  hover:bg-[#58585880] active:bg-[#cacad26c]
                             active:text-[#bebdc9e1] 
                             transition duration-500 ease-in-out">Cursos</li>
                        </Link>
                        <Link href="/">
                            <li className="pb-2 text-white  p-2 uppercase py-2
                            md:px-6 text-center 
                             text-bold
                             hover:text-[#8D6D3A] active:text-[#382b18]  hover:bg-[#58585880] active:bg-[#cacad26c]
                             active:text-[#bebdc9e1] 
                             transition duration-500 ease-in-out">Contato</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer">
                    <GiHamburgerMenu size={25} className=" transition duration-300 ease-in-out text-[#8D6D3A] active:text-[#382b18]" />
                </div>
            </div>
            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[55%] sm:hidden h-screen bg-gradient-to-r from-[#142742] to-[#16304E] p-10 ease-in overflow-x-auto overflow-y-hidden transition duration-75" :
                    "fixed left-[100%] top-0 p-10 transition ease-out -translate-x-6 duration-75 overflow-y-auto overflow-x-hidden "
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer text-[#8D6D3A] active:text-[#382b18]">
                        <CgCloseR size={25} />
                    </div>
                </div>
<br/>
                <Image
                        src={logotipo}
                        alt="logot"
                        className="cursor-pointer"/>                
                <div className="flex-col text-white text-sm uppercase">
                    <ul>
                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition  duration-300 ease-in-out cursor-pointer active:text-[#8D6D3A]"
                            >
                               <BsFillPersonVcardFill className="m-2"/> Sobre mim
                            </li>
                        </Link>
                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer  active:text-[#8D6D3A]"
                            >
                                 <GiSkills className="m-2"/>  Skills
                            </li>
                        </Link>
                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer  active:text-[#8D6D3A]"
                            >
                               <BsPersonWorkspace className="m-2"/> Portfólio
                            </li>
                        </Link>
                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer active:text-[#8D6D3A]"
                            >
                               <BiBookBookmark className="m-2"/> Cursos
                            </li>
                        </Link>
                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer hover:text-[#8d6096] active:text-[#8D6D3A]"
                            >
                               <BiSolidMessageRounded className="m-2"/> Contato
                            </li>
                        </Link>

                    </ul>
                </div>
                <br/>
                <br/>
                <hr />
                <br/>
                
                <div className="items-center flex justify-center">
                <div className="flex items-center text-white mt-5 text-2xl">
                    <Link href={'/'}>
                        <AiFillGithub className="m-1 active:text-[#000000] transition duration-200 ease-in-out"/>
                    </Link>

                    <Link href={'/'}>
                        <AiFillLinkedin className="m-1 active:text-[#0A66C2] transition duration-200 ease-in-out "/>
                    </Link>

                    <Link href={'/'}>
                        <IoLogoWhatsapp className="m-1 active:text-[#25D366] transition duration-200 ease-in-out"/>
                    </Link>
    
                    <Link href={'/'}>
                        <BsTelegram className="m-1 active:text-[#0A66C2] transition duration-200 ease-in-out "/>
                    </Link>

                    <Link href={'/'}>
                    <MdEmail className="m-1 active:text-[#BD1D1B] transition duration-200 ease-in-out"/>
                    </Link>
                </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;