import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "PropertyPulse made my home buying journey incredibly smooth. The team was professional and helped me find my dream home within my budget.",
    avatar: "👩",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Excellent service and genuine property listings. The site visit coordination was seamless and I got the best deal in the market.",
    avatar: "👨",
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Delhi",
    rating: 5,
    text: "Transparent process and expert guidance throughout. I highly recommend PropertyPulse for anyone looking to invest in real estate.",
    avatar: "👩‍💼",
  },
];

export default function Testimonials2() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            We are loved by people from all parts of India
          </h2>
          <div className="flex items-center justify-center gap-0.5 mt-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-sm text-gray-600 font-medium">
              4.8 out of 5
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-lg p-5"
            >
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    // biome-ignore lint/suspicious/noArrayIndexKey: --
                    key={i}
                    className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-5 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-1">
              30,000+
            </div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-1">5000+</div>
            <div className="text-sm text-gray-600">Properties Sold</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-1">
              ₹3 Billion
            </div>
            <div className="text-sm text-gray-600">Worth Transacted</div>
          </div>
        </div>
      </div>
    </section>
  );
}
