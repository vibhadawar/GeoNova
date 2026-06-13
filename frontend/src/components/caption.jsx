function CaptionCard({ stats }) {
  const vegetation = stats?.vegetation_percent || 0;
  const water = stats?.water_percent || 0;
  const urban = stats?.urban_percent || 0;

  let caption = "";

  if (vegetation > 50) {
    caption += "🌿 Dense vegetation detected. ";
  }

  if (water > 20) {
    caption += "💧 Significant water bodies present. ";
  }

  if (urban > 40) {
    caption += "🏙 High urbanization observed. ";
  }

  if (
    vegetation < 30 &&
    water < 10 &&
    urban > 50
  ) {
    caption +=
      "⚠ Environmental pressure may be increasing.";
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-4">
        AI Insights
      </h2>

      <p className="text-gray-700 leading-7">
        {caption || "Upload an image to generate insights."}
      </p>

    </div>
  );
}

export default CaptionCard;