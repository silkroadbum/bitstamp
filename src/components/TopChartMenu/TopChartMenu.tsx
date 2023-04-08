function TopChartMenu() {
  return (
    <ul className="h-10 flex flex-1 bg-zinc-800 border-t border-b border-r border-gray-700 text-gray-500 text-sm">
      <li className="hover:text-white border-r border-gray-700 flex items-center px-3">1h</li>
      <li className="hover:text-white flex items-center border-r border-gray-700 px-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          width="28"
          height="28"
          fill="currentColor">
          <path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"></path>
          <path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"></path>
          <path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"></path>
          <path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"></path>
        </svg>
      </li>
      <li className="cursor-pointer flex items-center border-r border-gray-700 px-2 text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          width="28"
          height="28"
          fill="none">
          <path
            stroke="currentColor"
            d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"></path>
        </svg>
        Indicators
      </li>
      <li className="cursor-pointer flex items-center text-gray-700 pl-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
          <path
            fill="currentColor"
            d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"></path>
        </svg>
      </li>
      <li className="cursor-pointer flex items-center text-gray-700 border-r border-gray-700 pr-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
          <path
            fill="currentColor"
            d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"></path>
        </svg>
      </li>
      <li className="flex-1"></li>
      <li className="hover:text-white cursor-pointer flex items-center border-l border-gray-700 px-2">
        <svg
          data-v-d7baa766=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          width="24"
          height="24"
          id="tv-btn-full-screen-off">
          <g data-v-d7baa766="" fill="currentColor">
            <path
              data-v-d7baa766=""
              d="M23.97 11.5h-1V7h-4.49V6h5.49v5.5zm-20 0h-1V6h5.51v1H3.97v4.5zm20 10.5h-5.49v-1h4.49v-4.5h1V22zM8.48 22H2.97v-5.5h1V21h4.51v1z"></path>
            <path
              data-v-d7baa766=""
              d="m3.127 6.86.707-.707 4.497 4.498-.707.707zm15.5 3.79 4.497-4.497.707.707-4.497 4.497zM3.131 21.145l4.498-4.497.707.707-4.498 4.497zm15.501-3.79.707-.707 4.497 4.497-.707.707z"></path>
          </g>
        </svg>
      </li>
    </ul>
  );
}

export default TopChartMenu;
