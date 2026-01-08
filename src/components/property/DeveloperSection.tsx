import { Award, Building2, Calendar } from "lucide-react";

interface DeveloperSectionProps {
  name: string;
  description: string;
}

export default function DeveloperSection({
  name,
  description,
}: DeveloperSectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Developer
      </h2>

      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
          <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3 sm:mb-4">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Established</div>
                <div className="text-sm font-semibold text-gray-900">1986</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Total Projects</div>
                <div className="text-sm font-semibold text-gray-900">270+</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Awards</div>
                <div className="text-sm font-semibold text-gray-900">50+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="w-full py-3 rounded-md border border-amber-600 text-amber-600 hover:bg-linear-to-r hover:from-amber-500 hover:to-amber-600 hover:text-white text-sm font-medium transition-colors"
      >
        View All Projects by Prestige Group
      </button>
    </div>
  );
}
