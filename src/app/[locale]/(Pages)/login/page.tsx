"use client";

import { signIn, useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import LoadingPage from "../loading";

export default function Page() {
  const { locale } = useParams();
  const router = useRouter();
  const [submittingState, setSubmittingState] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();

  // Show loading message while checking session status
  if (status === "loading") {
    return <LoadingPage />;
  }

  // If already authenticated, redirect back
  if (status === "authenticated") {
    router.back();
  }

  // Handle username input change
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittingState(true);
    setError(null);

    const url = new URL(window.location.href);

    const trimmedUsername = username.trim(); // Trim the username

    // Determine callback URL based on current location
    const callbackUrl: string =
      url.href === `${url.origin}${url.pathname}`
        ? `${url.origin}/${locale}`
        : url.searchParams.get("callbackUrl") ?? "";

    // Attempt to sign in with credentials
    const res = await signIn("credentials", {
      username: trimmedUsername,
      password,
      redirect: false,
    });

    // Handle sign-in response
    if (res?.error) {
      setError(res.error);
      setSubmittingState(false);
    } else {
      router.push(callbackUrl);
      setSubmittingState(false);
    }
  };

  const users: any[] = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@example.com",
      role: "admin",
      username: "admin",
      password: "admin",
    },
    {
      id: 2,
      name: "Regular User",
      email: "user@example.com",
      role: "user",
      username: "user",
      password: "user",
    },
  ];

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div className='mt-8 space-y-6'>
          <h3 className='text-center text-lg font-semibold text-gray-700'>
            Dummy User Credentials
          </h3>
          <ul className='list-disc list-inside'>
            {users.map((user) => (
              <li key={user.id} className='text-gray-600'>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}:{" "}
                {user.username} / {user.password}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Log in to your account
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div className='rounded-md shadow-sm'>
            <div className='mb-2'>
              <label htmlFor='username'>Username</label>
              <input
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                required
                value={username}
                onChange={handleUsernameChange}
                className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                placeholder='Username'
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={password}
                onChange={handlePasswordChange}
                className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <div>
            <button
              type='submit'
              disabled={submittingState}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${
                submittingState
                  ? "text-gray-300 bg-blue-900"
                  : "text-white bg-blue-600 hover:bg-blue-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
