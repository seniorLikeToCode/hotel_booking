import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main className='p-10'>
                {children}
            </main>
            <Footer />

        </div>
        
    );
}

export default Layout;