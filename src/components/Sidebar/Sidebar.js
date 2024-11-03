// Sidebar.js
import React, { useState } from 'react';
import NavItem from './NavItem';
import { Home, Package, Users, ShoppingCart, FileText, Briefcase, Settings , Plus} from 'lucide-react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);
  const router = useRouter();
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className="...">
      {/* Logo */}
      <div className="p-6">
        <div className="w-12 h-12 bg-yellow-400 rounded-lg transform -rotate-12 transition-transform hover:rotate-0 duration-300 flex items-center justify-center">
          <span className="text-xl font-bold text-white">BB</span>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="px-4 mb-6 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 
          transition-transform hover:scale-105 duration-200">
          NI
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 space-y-2 overflow-y-auto">
        <NavItem icon={Home} label="Dashboard" isActive={true} />
        <NavItem onClick={()=>router.push('/items')} icon={Package} label="Items" />
        <NavItem icon={Users} label="Partners" />
        
        <NavItem 
          icon={ShoppingCart} 
          label="Sales" 
          hasDropdown 
          isOpen={openSection === 'sales'}
          onClick={() => toggleSection('sales')} 
        />
        {openSection === 'sales' && (
          <div className="ml-4 pl-4 border-l border-gray-200 space-y-2 animate-fadeIn">
            <NavItem icon={FileText} label="Invoices" />
            <NavItem icon={FileText} label="Orders" />
          </div>
        )}
        
        <NavItem 
          icon={ShoppingCart} 
          label="Purchases" 
          hasDropdown 
          isOpen={openSection === 'purchases'}
          onClick={() => toggleSection('purchases')} 
        />
        <NavItem 
          icon={FileText} 
          label="Reports" 
          hasDropdown 
          isOpen={openSection === 'reports'}
          onClick={() => toggleSection('reports')} 
        />
        <NavItem 
          icon={Briefcase} 
          label="Accountant" 
          hasDropdown 
          isOpen={openSection === 'accountant'}
          onClick={() => toggleSection('accountant')} 
        />
      </nav>

      {/* User Profile Bottom */}
      <div className="p-4 border-t bg-gray-50">
        <button className="w-full flex items-center justify-between p-2 hover:bg-white rounded-lg transition-all duration-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-medium
              shadow-sm transition-transform hover:scale-105 duration-200">
              NI
            </div>
            <div className="text-left">
              <div className="font-medium text-gray-900">Nicolas IP</div>
              <div className="text-sm text-gray-500">Admin</div>
            </div>
          </div>
          <Settings className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
