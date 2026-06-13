function StatsCard({ stats }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
        Land Cover Statistics
      </h2>

      <div className="space-y-5">

        {/* Vegetation */}
        <div>
          <div className="flex justify-between mb-1 text-black dark:text-gray-200">
            <span>🟩 Vegetation</span>
            <span>{stats.vegetation_percent}%</span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{
                width: `${stats.vegetation_percent}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Water */}
        <div>
          <div className="flex justify-between mb-1 text-black dark:text-gray-200">
            <span>🟦 Water</span>
            <span>{stats.water_percent}%</span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full"
              style={{
                width: `${stats.water_percent}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Urban */}
        <div>
          <div className="flex justify-between mb-1 text-black dark:text-gray-200">
            <span>⬜ Urban</span>
            <span>{stats.urban_percent}%</span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-gray-500 h-3 rounded-full"
              style={{
                width: `${stats.urban_percent}%`,
              }}
            ></div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default StatsCard;