"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  // Get the current locale from the URL parameters
  const { locale } = useParams();
  // Handle UI transitions
  const [isPending, startTransition] = useTransition();
  // Access the Next.js router
  const router = useRouter();
  // Get the current pathname
  const pathname = usePathname();

  // Handle the change event for the language selection dropdown
  const onSelectChange = (e: { target: { value: any } }) => {
    // Get the selected locale
    const nextLocale = e.target.value;
    // Replace the current locale in the URL with the new locale
    const newPathname = pathname.replace(/\/(en|bn)/, `/${nextLocale}`);

    // Start a transition to update the URL and re-render the page with the new locale
    startTransition(() => {
      // Update the URL without a full page reload
      router.replace(newPathname);
    });
  };

  return (
    <select
      className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none'
      onChange={onSelectChange}
      disabled={isPending}
      defaultValue={locale}>
      <option value='en'>English</option>
      <option value='bn'>বাংলা</option>
    </select>
  );
}
