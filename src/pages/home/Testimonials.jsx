const testimonials = [
  {
    name: "Sarah Smith",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/100?img=2",
    review:
      "Amazing experience! The platform is smooth, intuitive and helped me grow my business effortlessly.",
  },
  {
    name: "Sunil Rathod",
    role: "Full Stack Developer",
    image: "https://avatars.githubusercontent.com/u/102689516?v=4",
    review:
      "The platform is well-structured and easy to use. The project flow, UI clarity, and earning transparency make it very reliable for users. Overall, a smooth and professional experience.",
  },
  {
    name: "Rahul Verma",
    role: "Freelancer",
    image: "https://i.pravatar.cc/100?img=3",
    review:
      "Highly recommended. Clean UI, easy onboarding and great earning opportunities.",
  },
];

export default function Testimonials() {
  return (
    <div className="py-12 px-4">
      <p className="text-center text-sm text-orange-500 font-medium">
        What our customers say about us
      </p>
      <h2 className="text-center text-3xl font-bold mb-10">
        Testimonials
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 rounded-full mx-auto mb-4"
            />

            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-sm text-gray-500 mb-4">{item.role}</p>

            <p className="text-sm text-gray-600 leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
