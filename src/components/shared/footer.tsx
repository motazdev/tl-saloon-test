import { logo } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import TLTwitterLine from "../twitter-line";
import TLInstagramLine from "../instagram-line";
import TLFaceBookLine from "../facebook-line";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-10">
        <div className="flex flex-col  items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              className="text-[#9c6c49] hover:text-[#f26c0d] text-base font-normal leading-normal transition-colors"
              href="/"
            >
              {t("Home")}
            </Link>
            <Link
              className="text-[#9c6c49] hover:text-[#f26c0d] text-base font-normal leading-normal transition-colors"
              href="/services-prices"
            >
              {t("Services & Prices")}
            </Link>
            <Link
              className="text-[#9c6c49] hover:text-[#f26c0d] text-base font-normal leading-normal transition-colors"
              href="/contact-us"
            >
              {t("Contact Us")}
            </Link>
            <Link
              className="text-[#9c6c49] hover:text-[#f26c0d] text-base font-normal leading-normal transition-colors"
              href="/blog"
            >
              {t("Blog")}
            </Link>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              className="text-[#9c6c49] hover:text-[#f26c0d] transition-colors"
              href="#"
            >
              <TLTwitterLine />
            </Link>
            <Link
              className="text-[#9c6c49] hover:text-[#f26c0d] transition-colors"
              href="#"
            >
              <TLInstagramLine />
            </Link>
            <Link
              className="text-[#9c6c49] hover:text-[#f26c0d] transition-colors"
              href="#"
            >
              <TLFaceBookLine />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-[#9c6c49] text-base font-normal leading-normal">
            © 2025 Saloon. {t("All rights reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
