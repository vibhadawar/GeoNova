import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function DownloadReport() {

  const handleDownload = async () => {

    const element = document.getElementById("report-section");

    const canvas = await html2canvas(element);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const width = 190;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      10,
      10,
      width,
      height
    );

    pdf.save("GeoSense_Report.pdf");
  };

  return (
    <div className="text-center mt-8">

      <button
        onClick={handleDownload}
        className="
        bg-red-600
        text-white
        px-8
        py-3
        rounded-xl
        font-semibold
        hover:bg-red-700
        transition
        "
      >
        📄 Download PDF Report
      </button>

    </div>
  );
}

export default DownloadReport;