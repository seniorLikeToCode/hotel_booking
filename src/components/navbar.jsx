import React from 'react';
import { Button } from './ui/button';
import { PlusIcon } from 'lucide-react';

const Navbar = () => {
    return <>
        <div className='h-14 shadow-lg flex justify-between items-center'>
            <p className='text-xl font-semibold pl-4'>ESTTE</p>
            <div className='flex gap-6 pr-4'>
                {/* search bar here */}
                <Button variant='outline' className='w-32'><PlusIcon size={20} className='pr-1'/>Post New</Button>
                <Button className='w-32'>JOIN</Button>
                <Button className='w-32'>SIGN IN</Button>
            </div>
        </div>
    </>
};

export default Navbar;