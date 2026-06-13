import { useState } from "react";

import UploadBox from "./UploadBox";
import StatsCard from "./StatsCard";
import PieChartComponent from "./piechart";
import ImageDisplay from "./imagedisplay";
import ReportCard from "./ReportCard";
import TimeSeriesChart from "./time";
import MapView from "./map";
import DownloadReport from "./download";
import CaptionCard from "./caption";

function Dashboard() {
  const [stats, setStats] = useState({
    vegetation_percent: 0,
    water_percent: 0,
    urban_percent: 0,
  });

  const [originalImage, setOriginalImage] = useState("");

  const [images, setImages] = useState({
    segment: "",
    vegetation: "",
    water: "",
    urban: "",
  });

  const [report, setReport] = useState("");

  return (
    <section
      id="analysis"
      className="py-20 px-6 bg-slate-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Analysis Dashboard
        </h2>
       <div id="report-section">
        {/* Upload Section */}
        <UploadBox
          setStats={setStats}
          setReport={setReport}
          setOriginalImage={setOriginalImage}
          setImages={setImages}
        />

        {/* Statistics + Pie Chart */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <StatsCard stats={stats} />
          <PieChartComponent stats={stats} />
        </div>

        {/* Image Results */}
        <div className="mt-8">
          <ImageDisplay
            originalImage={originalImage}
            images={images}
          />
        </div>

        {/* Environmental Report */}
        <div className="mt-8">
          <ReportCard report={report} />
          </div>
        </div>
        <div className="mt-8">
</div>

<div className="mt-8">
  <TimeSeriesChart />
</div>
<div className="mt-8">
  <MapView />
</div>
<div className="mt-8">
  <DownloadReport />
</div>
<div className="mt-8">
  <CaptionCard stats={stats} />
</div>
      </div>
    </section>
  );
}

export default Dashboard;