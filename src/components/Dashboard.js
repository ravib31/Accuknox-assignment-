import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Drawer } from "antd";
import {
  BarsOutlined,
  PlusOutlined,
  RedoOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import Category from "./Category";
import AddWidgetForm from "./AddWidgetForm";
import DoughnutChart from "./Doughnut";

const Dashboard = () => {
  const categories = useSelector((state) => state.categories);
  const [searchChar, setSearchChar] = useState("");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  return (
    <div className="min-h-screen bg-sky-100 p-4 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          CNAPP Dashboard
        </h2>
        <div className="relative w-full sm:w-auto">
          <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search widgets by name"
            value={searchChar}
            onChange={(e) => setSearchChar(e.target.value)}
            className="w-full sm:w-[400px] md:w-[600px] pl-10 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <Button
            type="primary"
            onClick={toggleDrawer}
            className="h-9 flex items-center"
          >
            <PlusOutlined />
            <span className="hidden sm:inline">Add Widget</span>
          </Button>
          <Button
            type="primary"
            onClick={() => window.location.reload()}
            className="h-9 flex items-center"
          >
            <RedoOutlined />
          </Button>
          <Button type="primary" className="h-9 flex items-center">
            <BarsOutlined />
          </Button>
        </div>
      </div>
      <DoughnutChart />
      <div>
        {(() => {
          const elements = [];
          for (const category in categories) {
            if (categories.hasOwnProperty(category)) {
              const filteredWidgets = categories[category].filter((widget) =>
                widget.name.toLowerCase().includes(searchChar.toLowerCase())
              );
              elements.push(
                <Category
                  key={category}
                  category={category}
                  widgets={filteredWidgets}
                />
              );
            }
          }
          return elements;
        })()}
      </div>
      <Drawer
        title="Add a new widget"
        placement="right"
        onClose={toggleDrawer}
        visible={drawerVisible}
        width={320}
      >
        <AddWidgetForm />
      </Drawer>
    </div>
  );
};

export default Dashboard;
