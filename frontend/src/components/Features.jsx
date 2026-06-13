import {
  Upload,
  Scan,
  Trees,
  FileText,
  PieChart,
  Search
} from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Image Upload",
    desc: "Upload satellite imagery for analysis"
  },
  {
    icon: Scan,
    title: "Segmentation",
    desc: "Detect vegetation, water and urban areas"
  },
  {
    icon: Trees,
    title: "Land Cover",
    desc: "Analyze environmental composition"
  },
  {
    icon: PieChart,
    title: "Visual Insights",
    desc: "Interactive statistics and charts"
  },
  {
    icon: FileText,
    title: "AI Reports",
    desc: "Generate environmental summaries"
  },
  {
    icon: Search,
    title: "Change Detection",
    desc: "Compare images over time"
  }
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-slate-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  dark:bg-gray-800
                  p-8
                  rounded-2xl
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                  cursor-pointer
                "
              >
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Icon
                    size={32}
                    className="text-green-600 dark:text-green-400"
                  />
                </div>

                <h3 className="text-xl font-bold mt-5 text-black dark:text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;