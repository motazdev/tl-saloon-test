"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import AppContainer from "../AppContainer";
import ContactLinksItems from "../contact-us/contact-links-items";
import ContactUsForm from "../contact-us/contact-us-form";

const ContactUs = () => {
  const t = useTranslations();
  useGSAP(() => {
    gsap.fromTo(
      ".mentors-upper-title",
      { opacity: 0, filter: "blur(10px)", y: -50 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".mentors-section",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".mentors-big-title",
      { opacity: 0, filter: "blur(5px)", y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".mentors-section",
          start: "top 80%",
        },
      }
    );
  });
  return (
    <AppContainer className="bg-[#f9fafb] py-8">
      <div className="flex mentors-section justify-center flex-col items-center">
        <h1 className="font-semibold mentors-big-title mt-4 text-center text-4xl max-w-md items-center">
          {t("Get in touch")}
        </h1>
      </div>
      <div className="grid relative lg:grid-cols-2 gap-y-4 gap-x-16 mt-8 lg:justify-start justify-center items-start">
        <ContactUsForm />
        <ContactLinksItems />
      </div>
    </AppContainer>
  );
};

export default ContactUs;
