import { useState } from 'react';

import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import DailyPriceList from '../DailyPriceList/DailyPriceList';
import Logo from '../Logo/Logo';

function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const showMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  return (
    <header className="bg-zinc-900 p-4 h-12 flex items-center justify-between relative">
      <div className="flex items-center">
        <a href="/" className="text-white mr-3">
          <Logo />
        </a>
        <span className="text-blue-500 text-xs flex items-center font-bold mr-2 cursor-pointer">
          BTC/USD
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
        <div className="text-white font-bold text-xs mr-3">
          <span className="mr-1 text-gray-400 md:hidden">USD</span>
          <span className="hidden md:inline-block md:text-base">$</span>
          <span className="md:text-base">27,853</span>
        </div>
        <DailyPriceList />
      </div>
      <ButtonsBlock showMenu={showMenu} isVisibleMenu={isVisibleMenu} />
      <nav
        className={`absolute bg-zinc-700 top-12 left-0 right-0 z-50 text-xl h-auto flex flex-col justify-between md:hidden ${
          isVisibleMenu ? '' : 'hidden'
        }`}>
        <ul className="p-4">
          <li>
            <a className="text-gray-200 hover:text-gray-400 block px-5 py-2" href="/">
              Institutions & Partners
            </a>
          </li>
          <li>
            <a className="text-gray-200 hover:text-gray-400 block px-5 py-2" href="/">
              Pro Traders
            </a>
          </li>
          <li>
            <a className="text-gray-200 hover:text-gray-400 block px-5 py-2" href="/">
              Mobile App
            </a>
          </li>
          <li>
            <a className=" text-gray-200 hover:text-gray-400 block px-5 py-2" href="/">
              Markets
            </a>
          </li>
          <li>
            <a className="text-gray-200 hover:text-gray-400 block px-5 py-2" href="/">
              Bitstamp Earn
            </a>
          </li>
          <li>
            <a className="text-gray-200 hover:text-gray-400 block px-5 py-2" href="/">
              Blog
            </a>
          </li>
          <li>
            <a className="text-gray-200 hover:text-gray-400 block px-5 py-2" href="/">
              Learn
            </a>
          </li>
          <li>
            <a
              className="text-gray-200 hover:text-gray-400 px-5 py-2 flex justify-between"
              href="/">
              Tradeview Setting
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="flex gap-4 p-4 border-t border-black">
          <button className="w-52 h-9 border text-sm border-blue-500 bg-transparent text-blue-500 hover:border-blue-600 hover:text-blue-600 rounded transition-all duration-300 flex-1">
            Log in
          </button>
          <button className="w-52 h-9 bg-blue-500 text-sm text-white rounded hover:bg-blue-600 transition-all duration-300 flex-1">
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
