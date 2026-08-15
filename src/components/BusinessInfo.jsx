import { Building2, User, PhoneCall, MapPin, Clock } from "lucide-react";
import { businessDetails } from "@/config/businessDetails";

export default function BusinessInfo() {
  return (
    <section className="w-full bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-4 text-left">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h2 className="text-xs font-bold tracking-wider text-emerald-900 uppercase flex items-center gap-2">
          <Building2 className="w-4 h-4 text-emerald-700" />
          <span>Business Details</span>
        </h2>
        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
          Verified Store
        </span>
      </div>

      <div className="space-y-3.5 text-sm">
        {/* Store Name & Proprietor */}
        <div className="flex items-start gap-3">
          <User className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
          <div>
            <div className="font-bold text-slate-900 leading-tight">
              {businessDetails.businessName}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Prop. {businessDetails.personName}
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-start gap-3">
          <PhoneCall className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
          <div>
            <div className="text-xs font-medium text-slate-400">Phone Number</div>
            <a
              href={`tel:${businessDetails.phoneRaw}`}
              className="font-semibold text-slate-800 hover:text-emerald-800 transition-colors"
            >
              {businessDetails.phoneNumber}
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
          <div>
            <div className="text-xs font-medium text-slate-400">Store Address</div>
            <a
              href={businessDetails.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-700 hover:text-emerald-800 transition-colors block mt-0.5 leading-relaxed"
            >
              {businessDetails.address}
            </a>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex items-start gap-3 pt-1 border-t border-slate-100">
          <Clock className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
          <div>
            <div className="text-xs font-medium text-slate-400">Opening Hours</div>
            <div className="text-xs font-medium text-slate-700 mt-0.5 leading-relaxed">
              {businessDetails.openingHours}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
