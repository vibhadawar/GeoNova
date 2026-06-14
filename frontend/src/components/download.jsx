import jsPDF from "jspdf";

function DownloadReport({ stats, report }) {
  const handleDownload = () => {
    try {
      const pdf = new jsPDF();

      pdf.setFontSize(20);
      pdf.text("GeoSense Report", 20, 20);

      pdf.setFontSize(14);
      pdf.text(`Vegetation: ${stats.vegetation_percent}%`, 20, 50);
      pdf.text(`Water: ${stats.water_percent}%`, 20, 65);
      pdf.text(`Urban: ${stats.urban_percent}%`, 20, 80);

      pdf.text("Environmental Report:", 20, 110);

      pdf.setFontSize(12);
      pdf.text(report || "No report available", 20, 125, {
        maxWidth: 170,
      });

      pdf.save("GeoSense_Report.pdf");
    } catch (err) {
      console.error(err);
      alert("PDF generation failed");
    }
  };

  return (
    <div className="text-center mt-8">
      <button
        onClick={handleDownload}
        className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700"
      >
        📄 Download PDF Report
      </button>
    </div>
  );
}

export default DownloadReport;