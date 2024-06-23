'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

interface EditUserFormProps {
  initialData: {
    id: string;
    name: string;
    email: string;
    role: 'User' | 'Admin';
  };
}

export function EditUserForm({ initialData }: EditUserFormProps) {

  const [name, setName] = useState<string>(initialData.name);
  const [email, setEmail] = useState<string>(initialData.email);
  const [role, setRole] = useState<'User' | 'Admin'>(initialData.role);

  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = {
      name,
      email,
      role,
    };

    console.log('Submitting form data:', formData); // Log form data before submission

    const response = await fetch(`/api/admin/users/${initialData.id}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log({ response });

    if (response.ok) {
      router.push('/admin/users');
    } else {
      console.error('Failed to update user');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-transparent/60 border-green-300 login-gradient-green p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="my-4">
          <h1 className="text-white text-header-glow font-semibold text-4xl text-center">
            Edit User
          </h1>
          <div className="mt-6">
            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
              Name
            </label>
            <input
              required
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Email
          </label>
          <input
            required
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="role" className="block text-white text-sm font-bold mb-2 mt-4">
            Role
          </label>
          <select
            required
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value as 'User' | 'Admin')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="mt-4 transition-colors duration-300 hover:bg-purple-600 button-glow text-white/80 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
}
