"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import AppContainer from "@/components/AppContainer";
import TLLogoIcon from "@/components/icons/tl-logo-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "use-intl";
import LanguageSelectMenu from "./language-select-menu";
import MobileNav from "./mobile-nav";
import Image from "next/image";
import { logo } from "@/assets";
import LogoIpsum from "@/components/logo-ipsum";

const Navbar = () => {
  const leftItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services & Prices",
      href: "/services-prices",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const pathname = usePathname();
  // const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <header className="lg:bg-white bg-transparent   top-0 z-40 w-full transition-all duration-500">
      <AppContainer className="">
        <div className="flex flex-row justify-between items-center py-4">
          <div className="items-center flex">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative  h-full flex items-center gap-2">
                <LogoIpsum />
                <span className="font-secondary text-2xl font-bold">
                  Saloon
                </span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {/* Desktop nav (left items) */}
            <nav className="hidden lg:flex text-center items-center">
              <ul className="flex space-x-3 items-center">
                {leftItems.map((item) => (
                  <li
                    key={item.title}
                    className={cn(
                      " rounded-lg py-2 px-4 relative",
                      pathname.includes(item.href)
                        ? "text-main rounded-full  duration-300"
                        : "text-[#020202] hover:text-[#020202]"
                    )}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-base text-[#020202] flex flex-row gap-1 items-center transition-all duration-300 font-medium  relative"
                      )}
                    >
                      <span
                        className={cn(
                          "relative transition-all duration-300",
                          pathname === item.href
                            ? "text-main rounded-full  duration-300"
                            : "text-[#020202] hover:text-[#020202]"
                        )}
                      >
                        {t(item.title)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Desktop nav (right items) */}
          <div className=" hidden lg:flex items-center gap-x-4">
            <LanguageSelectMenu />
            <Link href={"/book"} className="block">
              <Button className="bg-main hover:bg-main/70 duration-500 cursor-pointer">
                {t("Book Now")}
              </Button>
            </Link>
          </div>

          {/* Mobile nav */}
          <div className="gap-2 flex items-center lg:hidden">
            <Link href={"/book"} className="block  lg:hidden">
              <Button className="bg-main hover:bg-main/70 text-xs h-8 duration-500 cursor-pointer">
                {t("Book Now")}
              </Button>
            </Link>
            <MobileNav leftItems={leftItems} />
          </div>
        </div>
      </AppContainer>
    </header>
  );
};

export default Navbar;
