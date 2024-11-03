"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { ChevronDown, ChevronUp, Plus, Home, Package, Users, ShoppingCart, FileText, Briefcase, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';



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

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);
  const router = useRouter();

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-white border-r flex flex-col shadow-sm z-50">
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

const StatCard = ({ label, value, type }) => {
  const getBgColor = () => {
    switch (type) {
      case 'overdue': return 'bg-red-50';
      case 'future': return 'bg-gray-100';
      default: return 'bg-white';
    }
  };

  return (
    <div className={`p-6 rounded-lg border shadow-sm transition-all duration-200 hover:shadow-md ${getBgColor()}`}>
      <p className={`text-sm ${type === 'overdue' ? 'text-red-500' : 'text-gray-500'}`}>{label}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
};

const FinancialDashboard = () => {
  const monthlyData = [
    { month: 'Jan 2024', income: 0, expenses: 0 },
    { month: 'Feb 2024', income: 0, expenses: 0 },
    { month: 'Mar 2024', income: 0, expenses: 0 },
    { month: 'Apr 2024', income: 0, expenses: 0 },
    { month: 'May 2024', income: 0, expenses: 0 },
    { month: 'Jun 2024', income: 0, expenses: 0 },
    { month: 'Jul 2024', income: 0, expenses: 0 },
    { month: 'Aug 2024', income: 0, expenses: 0 },
    { month: 'Sep 2024', income: 0, expenses: 0 },
    { month: 'Oct 2024', income: 1500, expenses: 1750.49 },
    { month: 'Nov 2024', income: 0, expenses: 0 },
    { month: 'Dec 2024', income: 0, expenses: 0 },
  ];

  const expenseData = [
    { name: 'Telephone & Internet', value: 40 },
    { name: 'Wages and Salaries', value: 35 },
    { name: 'Travelling Expenses', value: 10 },
    { name: 'Utilities', value: 10 },
    { name: 'Repairs and Maintenance', value: 5 },
  ];

  const COLORS = ['#FFD700', '#FFE55C', '#808080', '#8A2BE2', '#9370DB'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      {/* Main content area with margin-left to prevent sidebar overlap */}
      <main className="ml-64 min-h-screen">
        <div className="p-8 space-y-8 animate-fadeIn">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Nicolas IP&apos;s Dashboard</h1>
            <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg shadow-sm hover:bg-purple-700 
              transition-all duration-200 hover:shadow-md active:transform active:scale-95">
              Quick Add
            </button>
          </div>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                Invoices & Expenses
                <span className="text-sm font-normal text-gray-500">This fiscal year</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="income" fill="#FFD700" name="Income" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" fill="#8A2BE2" name="Expenses" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="text-sm">Income</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-600" />
                  <span className="text-sm">Expenses</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Money Coming In</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard label="Coming Due (1-30 days)" value="€0.00" />
                  <StatCard label="Coming Due (31-60 days)" value="€0.00" type="future" />
                  <StatCard label="Overdue" value="€0.00" type="overdue" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle>Money Going Out</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard label="Coming Due (1-30 days)" value="€1750.49" />
                  <StatCard label="Coming Due (31-60 days)" value="€0.00" type="future" />
                  <StatCard label="Overdue" value="€0.00" type="overdue" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      Top Expenses
      <span className="text-sm font-normal text-gray-500">This fiscal year</span>
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
      <div className="w-96 h-96 md:flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={expenseData}
              innerRadius={70}
              outerRadius={110}
              paddingAngle={5}
              dataKey="value"
            >
              {expenseData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-4 md:flex-1">
        {expenseData.map((item, index) => (
          <div key={item.name} className="flex items-center gap-3 group">
            <div
              className="w-5 h-5 rounded-full transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </CardContent>
</Card>

          </div>
        </div>
      </main>
    </div>
  );
};

export default FinancialDashboard;