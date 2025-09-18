"use client";
import AppContainer from "@/components/AppContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLocale, useTranslations } from "next-intl";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DatePickerDemo } from "@/components/ui/date-picker";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import ar from "react-phone-number-input/locale/ar";
import en from "react-phone-number-input/locale/en";
import { Label } from "@/components/ui/label";

const frameworks = [
  {
    value: "Classic Haircut",
    label: "Classic Haircut",
  },
  {
    value: "Beard Trim",
    label: "Beard Trim",
  },
  {
    value: "Haircut & Shave Combo",
    label: "Haircut & Shave Combo",
  },
];
export default function JobApplyPage() {
  const t = useTranslations();
  const schema = z.object({
    full_name: z.string().min(1, t("Required")).max(255),
    email: z.string().email(t("Invalid email")).max(255),
    phone: z.string().min(1, t("Required")).max(20),
    address: z.string().max(500).optional(),
    birth_date: z.string().refine(
      (val) => {
        if (!val) return false;
        const date = new Date(val);
        return date < new Date();
      },
      { message: t("Birth date must be before today") }
    ),
  });

  type FormValues = z.infer<typeof schema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      address: "",
      birth_date: "",
    },
  });

  //   const mutation = useMutation({
  //     mutationFn: (data: IJobApplyBody) => appService.sendJobApplication(data),
  //     onSuccess: (data) => {
  //       toast.success(data.message);
  //       form.reset();
  //     },
  //     onError: (err) => {
  //       toast.error(err.message);
  //     },
  //   });
  function onSubmit(data: z.infer<typeof schema>) {
    console.log({ data });
    // const phoneNumber = parsePhoneNumberFromString(form.getValues("phone"), {
    //   defaultCallingCode: data.phone,
    // });
    // if (!phoneNumber || !phoneNumber.isValid()) {
    //   form.setError("phone", { message: t("invalid-phone-number") });
    //   return false;
    // }
    // const payload: IJobApplyBody = {
    //   full_name: data.full_name,
    //   email: data.email,
    //   phone: data.phone,
    //   address: data.address || undefined,
    //   birth_date: data.birth_date,
    // };
    // mutation.mutate(payload);
  }
  const lang = useLocale();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <AppContainer>
      <div className="py-8 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-4xl">
          {t("Book Your Appointment")}
        </h1>
        <p className="mt-4 sm:text-xl text-sm text-gray-600">
          {t("book-page-desc")}
        </p>
      </div>
      <div className="max-w-xl mx-auto py-4">
        <Card className="!pt-0">
          <CardHeader className="!pb-0">
            <CardTitle className="text-lg hidden"></CardTitle>
          </CardHeader>
          <CardContent className="!pt-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("Full Name")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("enter your full name here")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("Email")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("Enter your email here")}
                          {...field}
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("Phone")}</FormLabel>
                      <FormControl>
                        <PhoneInput
                          value={field.value}
                          onChange={field.onChange}
                          className="!text-lg text-left [unicode-bidi:plaintext]"
                          defaultCountry="AE"
                          placeholder={t("Enter Phone Here")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col gap-3">
                  <Label htmlFor="date" className="px-1">
                    {t("Service")}
                  </Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full h-14 rounded-2xl justify-between"
                      >
                        {value
                          ? frameworks.find(
                              (framework) => framework.value === value
                            )?.label
                          : t("Select Service")}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="md:w-[400px] sm:w-[400px] lg:w-[500px] min-[300]:w-[300px]  p-0">
                      <Command>
                        <CommandInput
                          placeholder={`${t("search-service")}...`}
                        />
                        <CommandList>
                          <CommandEmpty>
                            {t("no-service-avaliable")}
                          </CommandEmpty>
                          <CommandGroup>
                            {frameworks.map((framework) => (
                              <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                  setValue(
                                    currentValue === value ? "" : currentValue
                                  );
                                  setOpen(false);
                                }}
                              >
                                <CheckIcon
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {t(framework.label)}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
                <DatePickerDemo />
                {/* <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("Notes")}</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-main py-5 hover:bg-main/80 duration-500"
                  //   disabled={mutation.status === "pending"}
                >
                  {/* {mutation.status === "pending" ? (
                    <LoadingSpinner />
                  ) : (
                    t("Book Now")
                  )} */}
                  {t("Book Now")}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </AppContainer>
  );
}
