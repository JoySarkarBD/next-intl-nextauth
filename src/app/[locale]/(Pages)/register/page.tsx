"use client";

import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingPage from "../loading";

export default function Page() {
  const t = useTranslations("RegisterPage");
  const { data: session, status } = useSession();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Show loading message while checking session status
  if (status === "loading") {
    return <LoadingPage />;
  }

  // If already authenticated, redirect back
  if (status === "authenticated") {
    router.back();
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            {t("title")}
          </h2>
        </div>
        <form className='mt-8 space-y-6'>
          <div className='rounded-md shadow-sm'>
            <div className='mb-2'>
              <label htmlFor='username'>{t("username")}</label>
              <input
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                required
                className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                placeholder={t("username")}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='password'>{t("password")}</label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='new-password'
                required
                className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                placeholder={t("password")}
              />
            </div>
            <div>
              <label htmlFor='confirmPassword'>{t("confirmPassword")}</label>
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                autoComplete='new-password'
                required
                className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                placeholder={t("confirmPassword")}
              />
            </div>
          </div>

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <div>
            <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
              {t("register")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
