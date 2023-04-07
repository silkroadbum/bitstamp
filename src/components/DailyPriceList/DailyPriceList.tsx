import { dailyDataPrices } from '../../const';

function DailyPriceList() {
  return (
    <ul className="hidden md:flex md:items-center gap-3">
      {dailyDataPrices.map((item, i) => (
        <li className="flex flex-col items-center" key={item.name}>
          <span className="text-gray-400 text-small leading-none">{item.name}</span>
          <span className={`text-xs font-medium ${i === 0 ? 'text-green-500' : 'text-white'}`}>
            {item.price}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default DailyPriceList;
