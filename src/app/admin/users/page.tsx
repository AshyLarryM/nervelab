

import AdminPageFrame from "@/components/admin/AdminPageFrame"
import { User } from "@prisma/client";
import Link from "next/link";

export default async function UsersTablePage() {

  const users: User[] = await getUsers();

  return (
    <AdminPageFrame>
      <div className="bg-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="bg-transparent py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-2xl font-semibold leading-6 text-white text-center">Users</h1>
                  <p className="mt-6 text-sm text-gray-300 text-center">
                    A list of all the users in your account including their name, title, email and role.
                  </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <Link href={'/admin/users/create'} >
                    <button
                      type="button"
                      className="block bg-transparent border border-purple-500 button-glow px-3 py-2 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Add user
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead>
                        <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                            Name
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Email
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                            Role
                          </th>
                          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {users.map((user) => (
                          <tr key={user.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                              {user.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{user.email}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{user.role}</td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <a href="#" className="text-green-600 transition-colors duration-150 hover:text-green-300">
                                Edit<span className="sr-only">, {user.name}</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminPageFrame >
  );
}

export async function getUsers() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/admin/users`, {
    cache: 'no-store',
  });
  return res.json();
}