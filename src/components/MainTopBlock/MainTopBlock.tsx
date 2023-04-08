import BottomChartMenu from '../BottomChartMenu/BottomChartMenu';
import Chart from '../Chart/Chart';
import LeftChartMenu from '../LeftChartMenu/LeftChartMenu';
import TopChartMenu from '../TopChartMenu/TopChartMenu';

function MainTopBlock() {
  return (
    <section className="flex sm:h-small md:h-auto">
      <div className="flex flex-1 overflow-hidden">
        <LeftChartMenu />
        <div className="flex-1">
          <TopChartMenu />
          <Chart />
          <BottomChartMenu />
        </div>
      </div>
    </section>
  );
}

export default MainTopBlock;
