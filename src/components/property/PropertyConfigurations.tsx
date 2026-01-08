interface PropertyConfigurationsProps {
  configurations: {
    name: string;
    propertyType: string;
    vastuCompliant: boolean;
    configuration: string;
    builtupArea: number;
    carpetArea: number;
    plotArea: number;
    superBuiltupArea: number;
    price: number;
  }[];
}

export default function PropertyConfigurations({
  configurations,
}: PropertyConfigurationsProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Configurations
      </h2>

      <div className="space-y-3">
        {configurations.map((config, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: --
            key={index}
            className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-amber-600 transition-colors cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                  {config.name}
                </h3>

                {config.builtupArea > 0 && (
                  <p className="text-xs sm:text-sm text-gray-600">
                    Build up Area: {config.builtupArea}
                  </p>
                )}
                {config.carpetArea > 0 && (
                  <p className="text-xs sm:text-sm text-gray-600">
                    Carpet Area: {config.carpetArea}
                  </p>
                )}
                {config.plotArea > 0 && (
                  <p className="text-xs sm:text-sm text-gray-600">
                    Size: {config.plotArea}
                  </p>
                )}
                {config.superBuiltupArea > 0 && (
                  <p className="text-xs sm:text-sm text-gray-600">
                    Super Built up Area: {config.superBuiltupArea}
                  </p>
                )}
              </div>

              <div className="text-base sm:text-lg font-bold text-gray-900 mb-0 sm:mb-1">
                {config.price} Cr
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
