import { tradeMocks } from '../../const';

function OrderBook() {
  return (
    <div className="hidden sm:flex sm:flex-col text-gray-400 text-xs md:flex-1 border-b border-l border-gray-700">
      <p className="uppercase border-b border-gray-700 bg-zinc-800 text-gray-400 text-small p-3 sm:border-t">
        Order Book
      </p>
      <div className="flex flex-1 text-small bg-zinc-900">
        <div className="flex flex-col flex-1">
          <div className="flex p-1 border-b border-gray-700">
            <p className="flex-1 text-right">Amount</p>
            <p className="flex-1 pr-1 text-right">Bid</p>
          </div>
          <ul>
            {tradeMocks.map((item, i) => (
              <li key={i} className="flex text-white text-xs">
                <span className="flex-1 text-right">{item.amount}</span>
                <span className="flex-1 text-right pr-2 text-green-500">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex p-1 border-b border-gray-700">
            <p className="flex-1">Ask</p>
            <p className="flex-1 pr-1 text-right">Amount</p>
          </div>
          <ul>
            {tradeMocks.map((item, i) => (
              <li key={i} className="flex text-white text-xs">
                <span className="flex-1 text-left pl-1 text-red-500">{item.price}</span>
                <span className="flex-1 pr-2 text-right">{item.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderBook;
