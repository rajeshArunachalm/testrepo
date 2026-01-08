import { Mail, Phone, User } from "lucide-react";
// import Image from "next/image";

export default function ExpertConsultation() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              FREE Expert Consultation
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Get personalized advice from our real estate experts
            </p>

            <form className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-600 focus:border-orange-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-600 focus:border-orange-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-600 focus:border-orange-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="requirements"
                  className="block text-xs font-medium text-gray-700 mb-1.5"
                >
                  Your Requirements
                </label>
                <textarea
                  rows={3}
                  id="requirements"
                  placeholder="Tell us about your property requirements"
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-orange-600 focus:border-orange-600 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium transition-colors"
              >
                Request Free Consultation
              </button>
            </form>
          </div>

          {/* Right side - Illustration */}
          {/* <div className="hidden lg:block">
            <div className="w-full">
              <Image
                fill={true}
                alt="Consultation"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                className="object-contain rounded-lg"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
