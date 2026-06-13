import { useState } from "react";
import axios from "axios";

function CompareBox() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const [result, setResult] = useState(null);
  const [heatmapImage, setHeatmapImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCompare = async () => {
    if (!image1 || !image2) {
      alert("Please select both images");
      return;
    }

    try {
      setLoading(true);

      const compareForm = new FormData();
      compareForm.append("image1", image1);
      compareForm.append("image2", image2);

      const compareResponse = await axios.post(
        "http://localhost:8000/compare",
        compareForm
      );

      setResult(compareResponse.data);

      const heatmapForm = new FormData();
      heatmapForm.append("file1", image1);
      heatmapForm.append("file2", image2);

      await axios.post(
        "http://localhost:8000/change_heatmap",
        heatmapForm
      );

      setHeatmapImage(
        "http://localhost:8000/outputs/change_heatmap.jpg?" +
          new Date().getTime()
      );

    } catch (error) {
      console.error(error);
      alert("Comparison failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="compare"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">

        <h2 className="text-4xl font-bold text-center mb-10 text-black dark:text-white">
          Change Detection Analysis
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Before Image */}
          <div>
            <h3 className="font-semibold mb-2 text-black dark:text-white">
              Before Image
            </h3>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage1(e.target.files[0])}
              className="w-full border rounded-lg p-3"
            />

            {image1 && (
              <img
                src={URL.createObjectURL(image1)}
                alt="Before"
                className="mt-4 h-64 w-full object-cover rounded-xl shadow-md"
              />
            )}
          </div>

          {/* After Image */}
          <div>
            <h3 className="font-semibold mb-2 text-black dark:text-white">
              After Image
            </h3>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage2(e.target.files[0])}
              className="w-full border rounded-lg p-3"
            />

            {image2 && (
              <img
                src={URL.createObjectURL(image2)}
                alt="After"
                className="mt-4 h-64 w-full object-cover rounded-xl shadow-md"
              />
            )}
          </div>

        </div>

        <div className="text-center mt-8">

          <button
            onClick={handleCompare}
            disabled={loading}
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
              transition-all
              disabled:bg-gray-400
            "
          >
            {loading ? "Comparing..." : "Compare Images"}
          </button>

        </div>

        {/* Results */}

        {result && (
          <div className="mt-10 bg-slate-100 dark:bg-gray-700 p-6 rounded-xl">

            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Comparison Results
            </h3>

            <div className="space-y-3 text-lg">

              <p>
                🌿 Vegetation Change:
                <strong>
                  {" "}
                  {result.changes?.vegetation_change}%
                </strong>
              </p>

              <p>
                💧 Water Change:
                <strong>
                  {" "}
                  {result.changes?.water_change}%
                </strong>
              </p>

              <p>
                🏙️ Urban Change:
                <strong>
                  {" "}
                  {result.changes?.urban_change}%
                </strong>
              </p>

            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">
                AI Change Summary
              </h4>

              <p>
                {result.status}
              </p>
            </div>

          </div>
        )}

        {/* Heatmap */}

        {heatmapImage && (
          <div className="mt-12">

            <h3 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
              Change Heatmap
            </h3>

            <img
              src={heatmapImage}
              alt="Change Heatmap"
              className="
                max-w-5xl
                w-full
                mx-auto
                rounded-2xl
                shadow-lg
              "
            />

          </div>
        )}

      </div>
    </section>
  );
}

export default CompareBox;