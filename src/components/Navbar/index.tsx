'use client'
import { Link } from 'react-scroll';
import Image from 'next/image';
import react, { useState, useCallback, useEffect } from 'react';
import { BiBookBookmark, BiBrain } from 'react-icons/bi';
import { BsFillPersonVcardFill, BsPersonWorkspace, BsTelegram } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import logotipo from '../../../public/assets/logotipo.png';
import { ImMail } from 'react-icons/im';
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 7) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={` ${color ? 'bg-[#3a311de1] backdrop-blur-md transition duration-150 ease-in'
            :
            'g-[#3a311de1] backdrop-blur-md transition duration-300 ease-out'} 
        fixed w-full h-24 shadow-sm bg-[#f3f5f90] font-sansnarrow`}>
            <div className="flex justify-between items-center h-full px-4">
                <Link href='/'
                    to="início"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={50}
                >
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
                        <Link
                            to="sobremim"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={50}
                        >
                            <li className=" text-white  p-2 uppercase py-2
                            md:px-6 text-center 
                             text-bold cursor-pointer
                             hover:text-[#f2bc65] active:text-[#382b18]  hover:bg-[#58585880] active:bg-[#cacad26c]
                             active:text-[#bebdc9e1] 
                             transition duration-500 ease-in-out">Sobre mim</li>
                        </Link>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={50}
                        >
                            <li className="pb-2 text-white  p-2 uppercase py-2
                            md:px-6 text-center 
                            text-bold
                            hover:text-[#f2bc65] active:text-[#382b18]  hover:bg-[#58585880] active:bg-[#cacad26c]
                            active:text-[#bebdc9e1] 
                            transition duration-500 ease-in-out">Skills</li>
                        </Link>
                        <a href="/">
                            <li className="pb-2 text-white  p-2 uppercase py-2
                            md:px-6 text-center 
                             text-bold
                             hover:text-[#f2bc65] active:text-[#382b18]  hover:bg-[#58585880] active:bg-[#cacad26c]
                             active:text-[#bebdc9e1] 
                             transition duration-500 ease-in-out">projetos</li>
                        </a>
                        <a href="/">
                            <li className="pb-2 text-white  p-2 uppercase py-2
                            md:px-6 text-center 
                             text-bold
                             hover:text-[#f2bc65] active:text-[#382b18]  hover:bg-[#58585880] active:bg-[#cacad26c]
                             active:text-[#bebdc9e1] 
                             transition duration-500 ease-in-out">Cursos</li>
                        </a>
                        <a href="/">
                            <li className="pb-2 text-white  p-2 uppercase py-2
                            md:px-6 text-center 
                             text-bold
                             hover:text-[#f2bc65] active:text-[#382b18]  hover:bg-[#58585880] active:bg-[#cacad26c]
                             active:text-[#bebdc9e1] 
                             transition duration-500 ease-in-out">Contato</li>
                        </a>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer">
                    <GiHamburgerMenu size={25} className=" transition duration-300 ease-in-out text-[#8D6D3A] active:text-[#382b18]" />
                </div>
            </div>
            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[55%] md:z-50 sm:hidden h-screen bg-gradient-to-r from-[#151d29] to-[#204168] p-10 ease-in overflow-x-auto overflow-y-hidden transition duration-75" :
                    "fixed left-[100%] top-0 p-10 transition ease-out -translate-x-6 duration-200 overflow-y-auto overflow-x-hidden "
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer text-[#8D6D3A] active:text-[#382b18]">
                        <CgCloseR size={25} />
                    </div>
                </div>
                <br />
                <Image
                    src={logotipo}
                    alt="logot"
                    className="cursor-pointer" />
                <div className="flex-col text-white text-sm uppercase">
                    <ul>
                        <Link href="/"
                            to="sobremim"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={50}
                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition  duration-300 ease-in-out cursor-pointer active:text-[#8D6D3A]"
                            >
                                <BsFillPersonVcardFill className="m-2" /> Sobre mim
                            </li>
                        </Link>
                        <a href="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer  active:text-[#8D6D3A]"
                            >
                                <BiBrain className="m-2" /> Skills
                            </li>
                        </a>
                        <a href="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer  active:text-[#8D6D3A]"
                            >
                                <BsPersonWorkspace className="m-2" /> Projetos
                            </li>
                        </a>
                        <a href="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer active:text-[#8D6D3A]"
                            >
                                <BiBookBookmark className="m-2" /> Cursos
                            </li>
                        </a>
                        {/* <a href="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer hover:text-[#8d6096] active:text-[#8D6D3A]"
                            >
                               <BiSolidMessageRounded className="m-2"/> Contato
                            </li>
                        </a> */}

                    </ul>
                </div>

                <br />
                <br />
                <hr />
                <br />

                <div className="flex items-center justify-center w-full text-white font-sansnarrow py-1 pt-10">
                    <span className="text-sm ">CONTATO</span>
                </div>
                <div className="items-center flex justify-center">
                    <div className="flex items-center text-white mt-5 text-2xl">
                        <a href={'https://github.com/VictorLopesz'}>
                            <FaGithubSquare className="m-1 text-[29px] active:text-[#000000] transition duration-200 ease-in-out" />
                        </a>

                        <a href={'mailto:euvictor_h@hotmail.com'}>
                            <ImMail className="m-1 active:text-[#BD1D1B] transition duration-200 ease-in-out" />
                        </a>


                        <a href={'https://t.me/pleasevictor'}>
                            <BsTelegram className="m-1 active:text-[#0A66C2] transition duration-200 ease-in-out " />
                        </a>

                        <a href={'https://www.linkedin.com/in/lopesvictorh/'}>
                            <FaLinkedin className="m-1 text-[28px] active:text-[#0A66C2] transition duration-200 ease-in-out " />
                        </a>

                        <a href={'https://wa.me/5521980260633'}>
                            <FaWhatsappSquare className="m-1 text-[29px] active:text-[#25D366] transition duration-200 ease-in-out" />
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;