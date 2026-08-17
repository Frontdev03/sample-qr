import { Plus } from "lucide-react";
import { businessDetails } from "@/config/businessDetails";

export default function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center space-y-4 pt-2 pb-1">
      {/* Pharmacy Medical Cross Icon */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-950/5 border border-emerald-800/20 text-emerald-800 shadow-sm transition-transform duration-300 hover:scale-105">
        <div className="absolute inset-0 rounded-2xl bg-emerald-700/10 blur-sm -z-10"></div>
        {/* Crisp Medical Cross Symbol */}
        <div className="relative flex items-center justify-center">
          <Plus className="w-8 h-8 text-emerald-800 stroke-[2.5]" />
        </div>
      </div>

      {/* Store & Person Titles */}
      <div className="space-y-1.5 px-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {businessDetails.businessName}
        </h1>

        <div className="inline-block px-3 py-1 rounded-full bg-emerald-900 text-white text-xs font-semibold tracking-wider uppercase shadow-xs">
          {businessDetails.personName}
        </div>

        {/* Tagline - Commented out for now */}
        {/* <p className="text-xs sm:text-sm font-medium text-slate-500 pt-0.5">
          {businessDetails.tagline}
        </p> */}
      </div>
    </header>
  );
}
