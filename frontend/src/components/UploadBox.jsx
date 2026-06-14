import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";

function UploadBox({
  setStats,
  setReport,
  setOriginalImage,
  setImages,
}) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select an image first");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:8000/segment",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Stats
      setStats({
        vegetation_percent: response.data.vegetation_percent,
        water_percent: response.data.water_percent,
        urban_percent: response.data.urban_percent,
      });

      // Report
      setReport(response.data.report);

      // Original image
      setOriginalImage(URL.createObjectURL(file));

      // Generated images
      setImages({
         segment:
    response.data.segmented_image + "?" + Date.now(),

  vegetation:
    response.data.vegetation_mask + "?" + Date.now(),

  water:
    response.data.water_mask + "?" + Date.now(),

  urban:
    response.data.urban_mask + "?" + Date.now(),
      });

    } catch (error) {
      console.error(error);
      alert("Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="analysis" className="py-10">
<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
<h2 className="text-3xl font-bold text-black dark:text-white mb-3">          Satellite Image Analysis
        </h2>

<p className="text-gray-600 dark:text-gray-300">          Upload a satellite image and analyze vegetation,
          water bodies and urban regions.
        </p>

<div className="border-2 border-dashed border-gray-500 rounded-xl p-8 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-4"
          />

          {file && (
            <p className="text-green-600 font-medium">
              Selected: {file.name}
            </p>
          )}

        </div>

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="
          mt-6
          bg-green-600
          text-white
          px-8
          py-3
          rounded-xl
          font-semibold
          hover:bg-green-700
          transition
          disabled:bg-gray-400
          "
        >
          {loading ? "Analyzing..." : "Analyze Image"}
        </button>

        {loading && (
          <div className="mt-6">
            <Loader />
          </div>
        )}

      </div>
    </section>
  );
}

export default UploadBox;