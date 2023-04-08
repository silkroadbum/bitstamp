import BottomChartMenu from '../BottomChartMenu/BottomChartMenu';
import Chart from '../Chart/Chart';
import LeftChartMenu from '../LeftChartMenu/LeftChartMenu';
import TopChartMenu from '../TopChartMenu/TopChartMenu';
import Trades from '../Trades/Trades';

function MainTopBlock() {
  return (
    <section className="flex sm:h-small md:h-auto">
      <Trades isBottom={false} />
      <div className="flex overflow-hidden">
        <LeftChartMenu />
        <div className="flex flex-col flex-1">
          <TopChartMenu />
          <Chart />
          <BottomChartMenu />
        </div>
      </div>
    </section>
  );
}

export default MainTopBlock;
