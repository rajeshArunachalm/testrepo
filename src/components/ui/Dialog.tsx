"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Dialog({
  isOpen,
  onClose,
  title,
  children,
}: DialogProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: --
    // biome-ignore lint/a11y/useKeyWithClickEvents: --
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Dialog */}
      {/* biome-ignore lint/a11y/noStaticElementInteractions: -- */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: -- */}
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className={title ? "p-6" : "p-6"}>
          {!title && (
            <div className="flex justify-end mb-4">
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
