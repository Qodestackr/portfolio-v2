import React from 'react';

import { Header } from '../nav';
import SideBar from '../nav/Sidebar.nav.jsx';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <SideBar />
            <div className="flex flex-col items-center justify-center mt-40 space-y-10 md:justify-start md:items-start md:ml-20 ml-10 mb-10">
                {children}
            </div>
        </>
    );
};

export default Layout;