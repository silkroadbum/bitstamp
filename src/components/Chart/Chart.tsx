function Chart() {
  return (
    <div className="grid grid-cols-[1fr_auto] flex-1">
      <img
        className="h-graph sm:h-graph-small md:h-graph object-cover"
        src="/img/graph.png"
        alt="График"
      />
      <img
        className="h-graph sm:h-graph-small md:h-graph object-fill"
        src="/img/r-graph.png"
        alt="Единицы измерения"
      />
    </div>
  );
}

export default Chart;
