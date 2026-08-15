import { Phone, Navigation, MessageCircle } from "lucide-react";
import { businessDetails } from "@/config/businessDetails";

export default function ContactButtons() {
  const whatsappUrl = `https://wa.me/${businessDetails.whatsappNumber}?text=${encodeURIComponent(
    businessDetails.whatsappPresetText
  )}`;

  return (
    <div className="w-full grid grid-cols-1 gap-3 py-2">
      {/* Call Now Button */}
      <a
        href={`tel:${businessDetails.phoneRaw}`}
        className="group relative flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm tracking-wide shadow-md shadow-emerald-900/10 transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
        aria-label="Call Vikram Singh at Dashmesh Medical Store"
      >
        <Phone className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform duration-200" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-900 border border-emerald-200/80 font-semibold text-sm tracking-wide shadow-xs transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label="Message Dashmesh Medical Store on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-emerald-700 group-hover:scale-110 transition-transform duration-200" />
        <span>WhatsApp</span>
      </a>

      {/* Get Directions Button */}
      <a
        href={businessDetails.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm tracking-wide shadow-sm transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        aria-label="Get Directions to Dashmesh Medical Store"
      >
        <Navigation className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform duration-200" />
        <span>Get Directions</span>
      </a>
    </div>
  );
}
