import { appleImg, searchImg, bagImg } from '../utils';
import { navLists } from '../constants';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple logo" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav.id}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} className="cursor-pointer" />
          <img src={bagImg} alt="basket" width={18} height={18} className="cursor-pointer" />
          <RxHamburgerMenu
            className="text-white hidden max-sm:block"
            fontSize={25}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-black z-10 fixed top-0 left-0">
              <MdClose
                fontSize={30}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
              {navLists.map((nav) => (
                <div
                  key={nav.id}
                  className="py-3 text-lg cursor-pointer text-gray hover:text-white transition-all"
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
