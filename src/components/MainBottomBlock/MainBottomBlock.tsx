import DepthChart from '../DepthChart/DepthChart';
import OrderBook from '../OrderBook/OrderBook';
import StartTrading from '../StartTrading/StartTrading';

function MainBottomBlock() {
  return (
    <div className="sm:grid sm:grid-cols-[1fr_250px]">
      <OrderBook />
      <StartTrading />
      <DepthChart />
    </div>
  );
}

export default MainBottomBlock;
