import React from 'react';
import { Header } from '..';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="pt-24">{children}</div>
        </>
    );
};

export default Layout;
