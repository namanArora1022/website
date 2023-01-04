import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CgMenuRightAlt } from 'react-icons/cg';
import { GrFormClose } from 'react-icons/gr';
import Image from 'next/image';
import logo from '../../public/logo.svg';

const Header: React.FC = () => {
    const router = useRouter();

    const [open, setOpen] = useState(false);

    return (
        <header
            className="flex items-center px-10 md:px-20 fixed h-20 md:h-24 w-full top-0 z-10
            bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 rounded-xl shadow"
        >
            <Image src={logo} alt="N" height="64px" width="64px" />
            <nav className="hidden md:inline-block ml-auto">
                <div className="flex items-center gap-3">
                    <Link href="/" passHref>
                        <a className="border-b-transparent border-b-2 hover:border-b-teal-500">
                            Home
                        </a>
                    </Link>
                    <Link href="/blog" passHref>
                        <a className="border-b-transparent border-b-2 hover:border-b-teal-500">
                            Blogs
                        </a>
                    </Link>
                    {router.pathname === '/' && (
                        <>
                            <a
                                href="#projects"
                                className="border-b-transparent border-b-2 hover:border-b-teal-500"
                            >
                                Projects
                            </a>

                            <a
                                href="#contact"
                                className="border-b-transparent border-b-2 hover:border-b-teal-500"
                            >
                                Contact
                            </a>
                        </>
                    )}
                </div>
            </nav>

            <div
                className="ml-auto inline-block md:hidden cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                {open ? (
                    <GrFormClose className="h-7 w-7" />
                ) : (
                    <CgMenuRightAlt className="h-7 w-7" />
                )}
            </div>

            {/* mobile menu */}
            <nav
                className={`flex flex-col absolute top-20 bg-teal-500 w-full px-4 py-10 text-white items-center justify-center select-none ${
                    open ? 'left-0' : 'left-full'
                } transition-all duration-300 inline-block md:hidden`}
            >
                <Link href="/" passHref>
                    <a className="my-5 text-lg" onClick={() => setOpen(false)}>
                        Home
                    </a>
                </Link>
                <Link href="/blog" passHref>
                    <a className="my-5 text-lg" onClick={() => setOpen(false)}>
                        Blogs
                    </a>
                </Link>
                {router.pathname === '/' && (
                    <>
                        <a
                            href="#projects"
                            className="my-5 text-lg"
                            onClick={() => setOpen(false)}
                        >
                            Projects
                        </a>

                        <a
                            href="#contact"
                            className="my-5 text-lg"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </a>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
