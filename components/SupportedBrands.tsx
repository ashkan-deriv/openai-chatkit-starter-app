export function SupportedBrands() {
  return (
    <div className="flex h-[90vh] w-full flex-col rounded-lg bg-white p-6 shadow-sm transition-colors dark:bg-slate-900">
      <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
        Supported Brands
      </h2>
      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
        <li className="flex items-center">
          <span className="mr-2 text-blue-500">•</span>
          Kraken
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-blue-500">•</span>
          ByBit
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-blue-500">•</span>
          CoinW
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-blue-500">•</span>
          Binance
        </li>
        <li className="flex items-center">
          <span className="mr-2 text-blue-500">•</span>
          OKX
        </li>
      </ul>
    </div>
  );
}
