import { useState } from 'react';
import SideBar from './SideBar';
import HomeSkeleton from '../skeleton/HomeSkeleton';
// import FrontPageCard from './FrontPageCard';
// import FrontPageCard from './FrontPageCard';
// import HomeSkeleton from '../skeleton/HomeSkeleton';

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black min-h-screen">
            <div className="flex">
                <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className="flex-1 p-5 overflow-y-auto">
                    <HomeSkeleton />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
