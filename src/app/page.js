"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProfileHeader from "@/components/ProfileHeader";
import QRSection from "@/components/QRSection";
import { QrCode, ArrowLeft } from "lucide-react";

function CardContent() {
  const searchParams = useSearchParams();
  const [isScanned, setIsScanned] = useState(false);

  useEffect(() => {
    if (searchParams.get("scanned") === "true") {
      setIsScanned(true);
    }
  }, [searchParams]);

  return (
    <main className="w-full max-w-md mx-auto bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-300/40 border border-slate-200/80 space-y-6 transition-all duration-300 my-auto">
      {isScanned ? (
        /* AFTER SCANNING QR: Show ONLY Person Name & Business Name */
        <div className="space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
          <ProfileHeader />

          {/* Minimal toggle back to view QR code */}
          {/* <div className="pt-2">
            <button
              onClick={() => setIsScanned(false)}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-800 transition-colors py-1 px-3 rounded-full hover:bg-emerald-50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to QR Code</span>
            </button>
          </div> */}
        </div>
      ) : (
        /* BEFORE SCANNING: Show ONLY QR Code */
        <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <QRSection onScanClick={() => setIsScanned(true)} />
        </div>
      )}

      {/* 
        Commented components retained for full digital card view if needed later:
        - ContactButtons
        - BusinessInfo
        - Footer
      */}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <main className="w-full max-w-md mx-auto bg-white rounded-3xl p-8 shadow-xl border border-slate-200/80 text-center text-xs text-slate-400">
          Loading...
        </main>
      }
    >
      <CardContent />
    </Suspense>
  );
}
