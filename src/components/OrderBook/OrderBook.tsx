function OrderBook() {
  return (
    <div className="hidden sm:flex sm:flex-col text-gray-400 text-xs md:hidden">
      <p className="uppercase border-b border-gray-700 bg-zinc-800 text-gray-400 text-small p-3 sm:border-t">
        Order Book
      </p>
      <div className="flex flex-1 text-small border-b border-gray-700 bg-zinc-800">
        <div className="flex flex-col flex-1">
          <div className="flex p-1">
            <p className="flex-1 text-right">Amount</p>
            <p className="flex-1 text-right">Bid</p>
          </div>
          <img className="flex-1 object-fill" src="/img/1.png" alt="" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex p-1">
            <p className="flex-1">Ask</p>
            <p className="flex-1 text-right">Amount</p>
          </div>
          <img className="flex-1 object-fill" src="/img/2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default OrderBook;
