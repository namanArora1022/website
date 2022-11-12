import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 pt-5 lg:pt-7">
            <Link href="/">
                <h3 className="font-Parisienne text-4xl cursor-pointer mb-4 md:mb-0">
                    Naman
                </h3>
            </Link>
            <nav className="flex items-center gap-3">
                <Link href="/" passHref>
                    <a className="hover:border-b-2 hover:border-b-teal-500">
                        Home
                    </a>
                </Link>
                <Link href="/blog" passHref>
                    <a className="hover:border-b-2 hover:border-b-teal-500">
                        Blogs
                    </a>
                </Link>
                <a
                    className="hover:border-b-2 hover:border-b-teal-500"
                    href="#projects"
                >
                    Projects
                </a>
                <a
                    className="hover:border-b-2 hover:border-b-teal-500"
                    href="#contact"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Header;
