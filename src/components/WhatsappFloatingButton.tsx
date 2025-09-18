"use client";
import { useHomeData } from "@/contexts/global/home-data";
import Link from "next/link";
import TLWhatsAppIcon from "./whatsapp-icon";

export default function WhatsappFloatingButton() {
  const { appSettings } = useHomeData();
  return (
    <Link
      // href={`https://wa.me/${appSettings.communication_mobile}`}
      href={`https://wa.me/+97112345678`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 1000,
        background: "#25D366",
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        transition: "box-shadow 0.2s",
      }}
      aria-label="Chat on WhatsApp"
    >
      <TLWhatsAppIcon className="text-white" />
    </Link>
  );
}
