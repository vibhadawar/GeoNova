function ReportCard({ report }) {
  return (
<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
<h2 className="text-2xl font-bold text-black dark:text-white mb-6">        AI Environmental Report
      </h2>

<p className="text-gray-700 dark:text-gray-200">        {report || "Upload an image to generate a report."}
      </p>

    </div>
  );
}

export default ReportCard;