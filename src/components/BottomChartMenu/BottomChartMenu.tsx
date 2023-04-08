import Time from '../Time/Time';

function BottomChartMenu() {
  return (
    <ul className="h-10 flex flex-1 bg-zinc-900 border-t border-b border-r border-gray-700 text-gray-500 text-xs p-3">
      <li className="hover:text-white flex items-center px-1 cursor-default">1D</li>
      <li className="hover:text-white flex items-center px-1 cursor-default">7D</li>
      <li className="hover:text-white flex items-center px-1 cursor-default">1M</li>
      <li className="hover:text-white flex items-center px-1 cursor-default">3M</li>
      <li className="hover:text-white flex items-center px-1 pr-3 cursor-default border-r border-gray-700">
        1Y
      </li>
      <li className="hover:text-white flex items-center px-1 pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          width="18"
          height="18"
          fill="none">
          <path
            stroke="currentColor"
            d="M1.5 8V6.5m7.5 9h5.5a2 2 0 0 0 2-2v-7m-15 0v-2c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v2m-15 0h15"></path>
          <path fill="currentColor" d="M5 1h1v3H5V1zM12 1h1v3h-1V1z"></path>
          <path stroke="currentColor" d="M0 12.5h7.5m0 0L4 16m3.5-3.5L4 9"></path>
        </svg>
      </li>
      <li className="flex-1"></li>
      <li className="hover:text-white flex items-center px-1 pr-3 border-r border-gray-700 cursor-default">
        <Time />
      </li>
      <li className="hover:text-white flex items-center px-1 cursor-default pl-3">%</li>
      <li className="hover:text-white flex items-center px-1 cursor-default">log</li>
      <li className="hover:text-white flex items-center px-1 cursor-default">auto</li>
    </ul>
  );
}

export default BottomChartMenu;
