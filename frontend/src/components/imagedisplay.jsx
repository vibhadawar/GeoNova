function ImageDisplay({ originalImage, images }) {
  const imageList = [
    {
      title: "Segmented Image",
      src: images.segment,
    },
    {
      title: "Vegetation Mask",
      src: images.vegetation,
    },
    {
      title: "Water Mask",
      src: images.water,
    },
    {
      title: "Urban Mask",
      src: images.urban,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
        Image Results
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Original Image */}
        <div
          className="
          bg-gray-50
          dark:bg-gray-700
          rounded-2xl
          shadow
          p-4
          hover:shadow-2xl
          hover:scale-105
          transition
          duration-300
          "
        >
          <h3 className="font-semibold text-lg text-black dark:text-white mb-3">
            Original Image
          </h3>

          {originalImage ? (
            <img
              src={originalImage}
              alt="Original"
              className="
              w-full
              h-64
              object-cover
              rounded-xl
              transition
              duration-300
              hover:scale-105
              "
            />
          ) : (
            <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-300">
              Upload an image first
            </div>
          )}
        </div>

        {/* Generated Images */}
        {imageList.map((img, index) => (
          <div
            key={index}
            className="
            bg-gray-50
            dark:bg-gray-700
            rounded-2xl
            shadow
            p-4
            hover:shadow-2xl
            hover:scale-105
            transition
            duration-300
            "
          >
            <h3 className="font-semibold text-lg text-black dark:text-white mb-3">
              {img.title}
            </h3>

            {img.src ? (
              <img
                src={img.src}
                alt={img.title}
                className="
                w-full
                h-64
                object-cover
                rounded-xl
                transition
                duration-300
                hover:scale-105
                "
              />
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-300">
                No image generated
              </div>
            )}
          </div>
        ))}

      </div>

    </div>
  );
}

export default ImageDisplay;