import { сurrencyPairs } from '../../const';

function FooterList() {
  return (
    <ul className="flex items-center overflow-hidden gap-3 flex-1">
      {сurrencyPairs.map((item) => (
        <li className="flex items-center" key={item.name}>
          <span className="mr-1 cursor-pointer text-gray-400 text-xs">{item.name}</span>
          <span className="mr-1 text-xs text-green-500">{item.changePercent}</span>
          <span className="text-xs text-gray-500">{item.change}</span>
        </li>
      ))}
    </ul>
  );
}

export default FooterList;
