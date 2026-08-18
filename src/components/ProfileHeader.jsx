import { businessDetails } from "@/config/businessDetails";

export default function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center space-y-4 pt-2 pb-1">
      {/* "to ease" Label on Top */}
      <div className="text-xs font-bold tracking-widest text-emerald-800 uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/50 shadow-2xs">
        to ease
      </div>

      {/* Store & Person Titles */}
      <div className="space-y-1.5 px-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {businessDetails.businessName}
        </h1>

        <div className="text-xs font-semibold tracking-wider uppercase text-slate-500 bg-transparent">
          ({businessDetails.personName})
        </div>

        {/* Tagline - Commented out for now */}
        {/* <p className="text-xs sm:text-sm font-medium text-slate-500 pt-0.5">
          {businessDetails.tagline}
        </p> */}
      </div>
    </header>
  );
}
