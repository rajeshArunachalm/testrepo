import {
  Calculator,
  CreditCard,
  FileText,
  Home,
  Key,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Search",
    description: "Find your perfect property",
  },
  {
    icon: FileText,
    title: "Legal Assistance",
    description: "Complete legal support",
  },
  {
    icon: Calculator,
    title: "EMI Calculator",
    description: "Plan your finances",
  },
  { icon: Key, title: "Virtual Tours", description: "360° property views" },
  { icon: CreditCard, title: "Home Loans", description: "Best loan offers" },
  { icon: Shield, title: "Insurance", description: "Property protection" },
];

export default function SunnyPropsConcierge() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            SunnyProps <span className="text-amber-600">Concierge</span>
          </h2>
          <p className="text-sm text-gray-600">
            End-to-end services for your home buying journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col items-center text-center p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-600 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-600 transition-colors">
                  <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xs font-semibold text-gray-900 mb-0.5 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
