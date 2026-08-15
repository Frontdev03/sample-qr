"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { QrCode, Share2, Check, ExternalLink } from "lucide-react";
import { businessDetails } from "@/config/businessDetails";

export default function QRSection({ onScanClick }) {
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [scannedTargetUrl, setScannedTargetUrl] = useState("");

  useEffect(() => {
    // Generate QR destination URL with ?scanned=true query parameter
    let target = `${businessDetails.cardUrl}?scanned=true`;
    if (typeof window !== "undefined" && window.location.origin) {
      target = `${window.location.origin}${window.location.pathname}?scanned=true`;
    }

    setScannedTargetUrl(target);

    QRCode.toDataURL(target, {
      width: 320,
      margin: 2,
      color: {
        dark: "#064e3b", // Deep emerald color for scan accuracy & elegance
        light: "#ffffff",
      },
      errorCorrectionLevel: "H",
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error("QR Code generation error:", err));
  }, []);

  const handleShareOrCopy = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${businessDetails.personName} - ${businessDetails.businessName}`,
          text: `Scan or view Digital Business Card for ${businessDetails.businessName}`,
          url: scannedTargetUrl,
        });
        return;
      } catch (err) {
        // Fallback to copy if share was cancelled or unsupported
      }
    }

    try {
      await navigator.clipboard.writeText(scannedTargetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy error:", err);
    }
  };

  return (
    <section className="w-full bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 flex flex-col items-center text-center space-y-4 shadow-xs">
      <div className="flex items-center gap-2 text-emerald-900 text-xs font-bold tracking-wider uppercase">
        <QrCode className="w-4 h-4 text-emerald-700" />
        <span>Scan QR Code to View Business Card</span>
      </div>

      {/* QR Code Container */}
      <a
        href={scannedTargetUrl}
        onClick={(e) => {
          if (onScanClick) {
            e.preventDefault();
            // onScanClick();
          }
        }}
        title="Click to simulate QR Code scan"
        className="group relative p-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-md hover:border-emerald-300 cursor-pointer"
      >
        {qrDataUrl ? (
          /* eslint-disable-next-next/no-img-element */
          <img
            src={qrDataUrl}
            alt={`Scan QR Code for ${businessDetails.personName}`}
            className="w-48 h-48 object-contain rounded-lg"
          />
        ) : (
          <div className="w-48 h-48 bg-slate-100 animate-pulse rounded-lg flex items-center justify-center text-xs text-slate-400">
            Generating QR Code...
          </div>
        )}

        {/* <div className="absolute inset-0 bg-emerald-950/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-emerald-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
            <ExternalLink className="w-3 h-3" /> Click to Open Card
          </span>
        </div> */}
      </a>

      <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
        Point your phone camera at the QR code to instantly display profile details.
      </p>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={handleShareOrCopy}
          type="button"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-900 hover:border-emerald-300 text-xs font-semibold shadow-2xs transition-colors duration-150 active:scale-[0.97]"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">QR Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Share QR Link</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
