'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react'
import toast from 'react-hot-toast';

export function RegisterForm() {

  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          password: formData.get('password'),
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        toast.success('User created successfully!');
        router.push('/admin/users');
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error('An unknown error occurred');
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-transparent/60 border-green-300 login-gradient-green p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="my-4">
          <h1 className='text-white text-header-glow font-semibold text-4xl text-center'>New User</h1>
          <div className="mt-6">
            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
              Name
            </label>
            <input
              required={true}
              id="name"
              type="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Email
          </label>
          <input
            required={true}
            id="email"
            type="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            type="submit"
            className="transition-colors duration-300 hover:bg-purple-600 button-glow text-white/80 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  )
}
