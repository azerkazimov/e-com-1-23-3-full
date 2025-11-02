import { Button } from "@/components/ui/button";

export default function ProductSidebar() {
  return (
    <aside className="lg:w-80 shrink-0">
      <div className="space-y-6">
        {/* Search */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Search</h3>
          <input
            type="text"
            placeholder="Type Here"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Select Products */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Select Products
          </h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 rounded"
              />
              <span className="text-gray-700">Watches</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 rounded"
              />
              <span className="text-gray-700">Straps</span>
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Price Range
          </h3>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="$0"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span className="text-gray-500">to</span>
            <input
              type="text"
              placeholder="$150"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Case Color */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Case Color
          </h3>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-lg bg-gray-900 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
            <button className="w-12 h-12 rounded-lg bg-gray-300 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
            <button className="w-12 h-12 rounded-lg bg-blue-500 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
          </div>
        </div>

        {/* Filter By Strap Colors */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Filter By Strap Colors
          </h3>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-lg bg-amber-600 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
            <button className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-400 to-pink-500 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
            <button className="w-12 h-12 rounded-lg bg-blue-600 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
            <button className="w-12 h-12 rounded-lg bg-gray-600 border-2 border-gray-300 hover:border-purple-500 transition-colors"></button>
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button className="w-full py-3 bg-linear-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all">
          Apply Filters
        </Button>
      </div>
    </aside>
  );
}
