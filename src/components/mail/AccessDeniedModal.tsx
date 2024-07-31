'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { useSession } from 'next-auth/react';

interface AccessDeniedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccessDeniedModal({ isOpen, onClose }: AccessDeniedModalProps){

  const { data: session } = useSession();
  const userName = session?.user.name


  const modalRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 overflow-y-auto p-8">
      <div className="fixed inset-0 bg-black bg-opacity-65 backdrop-blur-sm"></div>
      <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div
          ref={modalRef}
          className="inline-block align-middle bg-transparent border border-purple-500 button-glow rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-6"
        >
          <div className="text-center my-8">
            <h3 className="text-3xl leading-6 font-medium text-white text-glow ">
              Access Denied
            </h3>
            <div className="mt-4">
              <p className="text-md text-gray-200">
                <span className='font-semibold'>{userName} </span>does not have permission to view this content.
              </p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-lg"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
