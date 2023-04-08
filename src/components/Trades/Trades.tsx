function Trades() {
  return (
    <div className="hidden sm:flex sm:flex-col text-gray-400 text-xs md:hidden">
      <div className="uppercase flex justify-between border-b border-l border-gray-700 bg-zinc-800 text-gray-400 text-small p-3 sm:border-t">
        <p>Trades</p>
        <span className="text-blue-500 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 13" height="17" width="17">
            <g data-v-15ff9968="" data-v-2e8cc40a="" fill="currentColor">
              <path d="M8.5 13c-.1 0-.2 0-.3-.1L2.3 9H.5C.2 9 0 8.8 0 8.5v-4c0-.3.2-.5.5-.5h1.8L8.2.1c.2-.1.4-.1.5 0 .2 0 .3.2.3.4v12c0 .2-.1.4-.3.4 0 .1-.1.1-.2.1zM1 8h1.5c.1 0 .2 0 .3.1L8 11.6V1.4L2.8 4.9c-.1.1-.2.1-.3.1H1v3z"></path>
              <path d="M2.5 9c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5s.5.2.5.5v4c0 .3-.2.5-.5.5z"></path>
            </g>
          </svg>
        </span>
      </div>
      <div className="flex border-b border-gray-700 p-1 text-small">
        <p className="flex-1 text-right">Amount</p>
        <p className="flex-1 text-right">Time</p>
        <p className="flex-1 text-right">Price</p>
      </div>

      <img className="flex-1 object-cover" src="/img/4.png" alt="trades" />
    </div>
  );
}

export default Trades;
