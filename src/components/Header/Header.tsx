import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import DailyPriceList from '../DailyPriceList/DailyPriceList';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="bg-black p-4 h-12 flex items-center justify-between">
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
      <ButtonsBlock />
    </header>
  );
}

export default Header;
