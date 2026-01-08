"use client";

import { Download, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EnquiryForm from "@/components/property/EnquiryForm";
import Dialog from "@/components/ui/Dialog";

type Props = {
  projectId: string;
  name: string;
  coverImage?: string | null;
  startingPrice: number;
  configuration: string;
  address: string;
  reraNumber?: string | null;
  brochure?: string | null;
};

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800&q=80";

function formatPriceShort(price?: number | null) {
  if (typeof price !== "number") return { main: "INR —", suffix: "" };
  if (price >= 1e7) {
    return {
      main: `INR ${(price / 1e7).toFixed(2)} Cr`,
      suffix: "onwards",
    };
  }
  if (price >= 1e5) {
    return {
      main: `INR ${(price / 1e5).toFixed(2)} Lacs`,
      suffix: "onwards",
    };
  }
  return { main: `INR ${Math.round(price)}`, suffix: "onwards" };
}

export default function ProjectCard({
  projectId,
  coverImage,
  startingPrice,
  name,
  configuration,
  address,
  reraNumber,
  brochure,
}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const imageUrl = coverImage || FALLBACK_IMAGE;
  const price = startingPrice ?? null;
  const priceParts = formatPriceShort(price);

  return (
    <>
      <Link
        href={`/properties/${projectId}`}
        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-200 cursor-pointer group shadow-sm"
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            fill={true}
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2 flex gap-2">
            <span className="px-2.5 py-1 bg-white text-gray-900 text-xs font-semibold shadow-sm rounded">
              Featured
            </span>
            {reraNumber ? (
              <span className="px-2.5 py-1 bg-white text-green-700 text-xs font-semibold shadow-sm rounded border border-green-200">
                RERA Verified
              </span>
            ) : null}
          </div>
        </div>

        <div className="p-4 space-y-2">
          <div className="space-y-1">
            <h3 className="text-[19px] font-semibold text-gray-900 leading-tight">
              {name}
            </h3>
            <p className="inline-flex flex-wrap items-center gap-1 text-gray-600 text-base mb-2">
              {configuration} for Sale in {address}
            </p>
          </div>

          <div className="flex items-baseline gap-1.5 text-base pb-2">
            <span className="font-semibold text-gray-900">
              {priceParts.main}
            </span>
            {priceParts.suffix && (
              <span className="text-gray-500">{priceParts.suffix}</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (brochure) {
                  try {
                    const response = await fetch(brochure);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = `${name.replace(/\s+/g, "-")}-brochure.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                  } catch {
                    window.open(brochure, "_blank");
                  }
                }
              }}
              disabled={!brochure}
              className="w-full py-2 rounded-md border border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-300 flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              Brochure
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsDialogOpen(true);
              }}
              className="w-full py-2 rounded-md bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium transition-colors flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              Quick Call
            </button>
          </div>
        </div>
      </Link>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Enquire Now"
      >
        <EnquiryForm
          projectId={projectId}
          projectName={name}
          onSuccess={() => setIsDialogOpen(false)}
          variant="dialog"
        />
      </Dialog>
    </>
  );
}
