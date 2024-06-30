import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "bn"];
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
