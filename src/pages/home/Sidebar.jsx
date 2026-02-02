import React from 'react';
import QuickAccessIcons from './QuickAccessIcons';
import ReferEarn from './ReferEarn';

const Sidebar = () => (
  <div className=" w-full">
    {/* Quick Access Icons */}
    <QuickAccessIcons />

    {/* Refer & Earn Section */}
    <ReferEarn />
  </div>
);

export default Sidebar;