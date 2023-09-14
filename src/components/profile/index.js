import React from 'react';
import Main from './main.js';
import About from './about.js';
import Address from './address.js';
import {Card} from '../ui/card';
import {Separator} from '../ui/separator';

const Profile = () => {
    return (
        <Card className='px-8'>
            <Main />
            <Separator />
            <About />
            <Separator />
            <Address />
        </Card>
    );
}

export default Profile;