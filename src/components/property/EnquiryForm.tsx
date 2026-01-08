"use client";

import { useMutation } from "@apollo/client/react";
import { Mail, Phone, User } from "lucide-react";
import Image from "next/image";
import { type FormEvent, useState } from "react";
import { gql } from "@/__generated__";

import LogoSmall from "../../../public/logos/small.png";

const CREATE_INQUIRY_MUTATION = gql(`
  mutation CreateInquiry(
    $projectId: ID!
    $name: String!
    $email: String!
    $phone: String!
    $getWhatsappUpdates: Boolean
    $allowOtherSellersToContact: Boolean
  ) {
    createInquiry(
      projectId: $projectId
      name: $name
      email: $email
      phone: $phone
      getWhatsappUpdates: $getWhatsappUpdates
      allowOtherSellersToContact: $allowOtherSellersToContact
    ) {
      id
      name
      email
      phone
    }
  }
`);

interface EnquiryFormProps {
  projectId: string;
  developerName?: string;
  projectName?: string;
  onSuccess?: () => void;
  variant?: "default" | "dialog";
}

export default function EnquiryForm({
  projectId,
  developerName = "Prestige Group",
  projectName = "Prestige Nautilus",
  onSuccess,
  variant = "default",
}: EnquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [allowOtherSellersToContact, setAllowOtherSellersToContact] =
    useState(false);
  const [getWhatsappUpdates, setGetWhatsappUpdates] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createInquiry, { loading }] = useMutation(CREATE_INQUIRY_MUTATION);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      await createInquiry({
        variables: {
          projectId,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          getWhatsappUpdates,
          allowOtherSellersToContact,
        },
      });
      setIsSubmitted(true);
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setAllowOtherSellersToContact(false);
      setGetWhatsappUpdates(false);
      // Call onSuccess callback if provided (e.g., to close dialog)
      if (onSuccess) {
        // Delay to show success message briefly before closing
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (err) {
      console.error("Error creating inquiry:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit inquiry. Please try again.",
      );
    }
  };

  if (isSubmitted) {
    const containerClass =
      variant === "dialog"
        ? "p-4"
        : "bg-white border border-gray-200 rounded-lg p-4 sm:p-6";
    return (
      <div className={containerClass}>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Checkmark</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Thank You!
          </h3>
          <p className="text-sm text-gray-600">
            Your inquiry has been submitted successfully. We'll get back to you
            soon.
          </p>
        </div>
      </div>
    );
  }

  const containerClass =
    variant === "dialog"
      ? "p-0"
      : "bg-white border border-gray-200 rounded-lg p-4 sm:p-6";

  return (
    <div className={containerClass}>
      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          Interested? Enquire Now
        </h3>
        <div className="flex items-start gap-3">
          <div className="h-8">
            <Image
              src={LogoSmall}
              alt="Sunny Props"
              className="h-full w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {projectName} - {developerName}
            </p>
            <p className="text-xs text-gray-600">Developer</p>
          </div>
        </div>
      </div>

      <form className="space-y-3" onSubmit={handleSubmit}>
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-xs text-red-600">{error}</p>
          </div>
        )}

        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-700 mb-1.5"
          >
            Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-amber-600 focus:border-amber-600 outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-xs font-medium text-gray-700 mb-1.5"
          >
            Phone
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="tel"
              id="phoneNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
              className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-amber-600 focus:border-amber-600 outline-none"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-700 mb-1.5"
          >
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-amber-600 focus:border-amber-600 outline-none"
            />
          </div>
        </div>

        <div className="flex items-start gap-2 pt-2">
          <input
            type="checkbox"
            id="contact-consent"
            checked={allowOtherSellersToContact}
            onChange={(e) => setAllowOtherSellersToContact(e.target.checked)}
            className="mt-0.5 w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-600"
          />
          <label htmlFor="contact-consent" className="text-xs text-gray-600">
            Allow other sellers to Contact
          </label>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="whatsapp-consent"
            checked={getWhatsappUpdates}
            onChange={(e) => setGetWhatsappUpdates(e.target.checked)}
            className="mt-0.5 w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-600"
          />
          <label htmlFor="whatsapp-consent" className="text-xs text-gray-600">
            Get WhatsApp Updates
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-md bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Get Contact Details"}
        </button>

        <p className="text-xs text-center text-gray-600 leading-relaxed">
          I authorize <span className="font-medium">Sunny Props</span> and its
          representatives to Call, SMS, Email or WhatsApp me about its products
          and offers. This consent overrides any registration for DNC/NDNC.
        </p>
      </form>

      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 text-center">
        <p className="text-xs sm:text-sm font-medium text-gray-900 mb-2">
          Find your dream home today!
        </p>
        <div className="flex items-center justify-center gap-2 mb-3">
          <Phone className="w-4 h-4 text-amber-600" />
          <span className="text-xs sm:text-sm text-gray-700">
            Call us Toll Free
          </span>
        </div>
        <a
          href="tel:+918080190190"
          className="text-xl sm:text-2xl font-bold text-amber-600 hover:text-amber-700"
        >
          +91 8080 190190
        </a>
      </div>
    </div>
  );
}
