function StartTrading() {
  return (
    <div className="text-gray-400 text-xs md:hidden">
      <p className="uppercase border-b border-gray-700 bg-zinc-800 text-gray-400 text-small p-3">
        Start Trading
      </p>
      <div className="p-5">
        <div className="flex gap-4 mb-4">
          <button className="w-52 h-9 bg-blue-500 text-sm text-white rounded hover:bg-blue-600 transition-all duration-300 flex-1">
            Log in
          </button>
          <button className="w-52 h-9 border text-sm border-blue-500 bg-transparent text-blue-500 hover:border-blue-600 hover:text-blue-600 rounded transition-all duration-300 flex-1">
            Register
          </button>
        </div>
        <h3 className="text-white text-xs text-bold mb-1">Welcome to Bitstamp</h3>
        <p className="mb-2">
          The world's longest-standing crypto exchange.
          <br />
          We provide premium access to cryptocurrency trading for both individuals and institutional
          clients through:
        </p>
        <ul className="list-disc pl-5">
          <li>Volume-based fee structure</li>
          <li>High performance matching engine</li>
          <li>FIX, Websocket and HTTP API connectivity</li>
          <li>24/7 service and dedicated premium support</li>
          <li>Industry-leading security practices</li>
        </ul>
      </div>
    </div>
  );
}

export default StartTrading;
