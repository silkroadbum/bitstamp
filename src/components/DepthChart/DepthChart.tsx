function DepthChart() {
  return (
    <div className="hidden sm:flex sm:flex-col text-gray-400 text-xs md:hidden">
      <p className="uppercase border-b border-gray-700 bg-zinc-800 text-gray-400 text-small p-3 sm:border-t">
        DEPTH CHART
      </p>
      <img className="flex-1 object-cover" src="/img/3.png" alt="depth" />
    </div>
  );
}

export default DepthChart;
