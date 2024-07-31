'use client'
import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react'
import toast from 'react-hot-toast';

export function LoginForm() {

  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (result?.ok) {
      toast.success('Successfully Signed In');

      const session = await getSession();
      const userId = session?.user?.id;
      const userRole = session?.user.role

      if (userRole === 'Admin') {
        router.push('/');
      } else if (userId) {
        router.push(`/mail/inbox/${userId}`);
      } else {
        toast.error('Failed to retrieve user information.');
      }
    } else {
      console.error('Login failed', result?.error);
      const errorMessageForToast = result?.error ?? 'Login Failed due to unknown error';
      toast.error(errorMessageForToast);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center sm:p-4 px-8">
      <form onSubmit={handleSubmit} className="bg-transparent/60 border-green-300 login-gradient-green p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <h1 className='text-white text-header-glow font-semibold text-4xl text-center'>Login</h1>
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Email
          </label>
          <input
            required={true}
            id="email"
            type="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
            Password
          </label>
          <input
            required={true}
            id="password"
            type="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            type="submit"
            className="transition-colors duration-300 hover:bg-purple-600 button-glow text-white/80 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Authenticate
          </button>
        </div>
      </form>
    </div>
  )
}
