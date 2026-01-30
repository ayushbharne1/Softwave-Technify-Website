import React from "react";

const trainingVideos = [
  {
    title: "Softwave Technify Tutorial",
    
    description: "Learn the basics of Earning with Softwave Technify."
  },
  {
    title: "Advanced Training",
   
    description: "Master advanced techniques and strategies."
  },
  {
    title: "Earning Solutions",
    description: "How to Earn by Softwave Technify."
  }
];

const Training = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-800">
        Training Tutorials
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainingVideos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full h-56 md:h-64">
              <iframe
                className="w-full h-full"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                  {video.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">{video.description}</p>
              </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
