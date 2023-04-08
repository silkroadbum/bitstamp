import MainBottomBlock from '../MainBottomBlock/MainBottomBlock';
import MainTopBlock from '../MainTopBlock/MainTopBlock';

function Main() {
  return (
    <main className="flex-1 bg-zinc-900">
      <MainTopBlock />
      <MainBottomBlock />
    </main>
  );
}

export default Main;
