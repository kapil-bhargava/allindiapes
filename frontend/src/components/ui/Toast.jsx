// src/components/ui/Toast.jsx
import React, { useEffect } from 'react';

const Toast = ({ id, message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [id, onClose]);

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  }[type] || 'bg-gray-800';

  const icon = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  }[type] || '●';

  return (
    <div className={`${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[280px] max-w-md animate-slide-down`}>
      <span className="text-lg font-bold">{icon}</span>
      <p className="text-sm flex-1">{message}</p>
      <button onClick={() => onClose(id)} className="text-white/70 hover:text-white">
        ✕
      </button>
    </div>
  );
};

export default Toast;