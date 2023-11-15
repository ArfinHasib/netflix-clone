import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';
import { BsChevronDown } from 'react-icons/bs';
import { useCallback, useState } from 'react';

const Navbar = () => {
   const [showMobileMenu, setShowMobileMenu] = useState(false);

   const toggleMobileMenu = useCallback(() => {
      setShowMobileMenu((current) => !current);
   }, []);

   return (
      <nav className='w-full fixed z-40'>
         <div className='px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90'>
            {/* eslint-disable-next-line */}
            <img src='/images/logo.png' alt='Logo' className='h-4 lg:h-7' />
            <div className='flex-row ml-8 gap-7 hidden lg:flex'>
               <NavbarItem label='Home' />
               <NavbarItem label='Series' />
               <NavbarItem label='Movies' />
               <NavbarItem label='New & Popular' />
               <NavbarItem label='My List' />
               <NavbarItem label='Browse by languages' />
            </div>
            <div
               onClick={toggleMobileMenu}
               className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'
            >
               <p className='text-white text-sm'>Browse</p>
               <BsChevronDown className='text-white transition' />
               <MobileMenu visible={showMobileMenu} />
            </div>
            <div className=''></div>
         </div>
      </nav>
   );
};

export default Navbar;
