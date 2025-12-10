'use client';

import { useEffect, useState } from 'react';

interface ToastNotificationProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
}

export default function ToastNotification({
  message,
  type = 'success',
  duration = 3000,
  onClose,
}: ToastNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 300); // Match animation duration
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const bgColor = {
    success: 'bg-[#00AA00]',
    error: 'bg-red-600',
    info: 'bg-blue-600',
  }[type];

  const icon = {
    success: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }[type];

  return (
    <div
      className={`fixed top-20 right-4 z-50 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 min-w-[300px] max-w-md transform transition-all duration-300 ${
        isExiting
          ? 'translate-x-full opacity-0'
          : 'translate-x-0 opacity-100'
      } animate-slide-in-right`}
      style={{
        animation: isExiting
          ? 'slideOutRight 0.3s ease-out forwards'
          : 'slideInRight 0.3s ease-out',
      }}
    >
      <div className="flex-shrink-0">{icon}</div>
      <p className="font-semibold text-sm flex-1">{message}</p>
      <button
        onClick={() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsVisible(false);
            onClose?.();
          }, 300);
        }}
        className="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
        aria-label="Close notification"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

