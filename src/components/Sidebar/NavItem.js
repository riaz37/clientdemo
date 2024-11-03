// NavItem.js
import React from 'react';
import { ChevronDown } from 'lucide-react';

const NavItem = ({ icon: Icon, label, isActive, hasDropdown, isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group
        ${isActive ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50 text-gray-700'}`}
    >
      <div className="flex items-center gap-3">
        <Icon className={`w-5 h-5 transition-colors duration-200 
          ${isActive ? 'text-purple-600' : 'text-gray-500 group-hover:text-gray-700'}`} />
        <span className="font-medium">{label}</span>
      </div>
      {hasDropdown && (
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 
          ${isOpen ? 'transform rotate-180' : ''}`} />
      )}
    </button>
  );
};

export default NavItem;
