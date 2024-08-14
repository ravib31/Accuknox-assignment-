import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Drawer } from "antd";

import Category from "./Category";
import AddWidgetForm from "./AddWidgetForm";
import { BarsOutlined, RedoOutlined, SearchOutlined } from "@ant-design/icons";
import DoughnutChart from "./Doughnut";

function Dashboard() {
  const categories = useSelector((state) => state.categories);
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="max-w-6xl mx-auto">
        {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dashboard
        </h1> */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              CNAPP Dashboard
            </h2>
            <div className="relative">
              <SearchOutlined className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search widgets by name"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-[600px] pl-10 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="ml-14">
              <Button
                type="primary"
                onClick={showDrawer}
                style={{ height: "38px" }} // Set the desired height here
              >
                Add Widget
              </Button>
            </div>
            <div className="-ml-12">
              <Button
                type="primary"
                onClick={() => window.location.reload()}
                style={{ height: "38px" }} // Set the desired height here
              >
                <RedoOutlined />
              </Button>
            </div>
            <div className="-ml-12">
              <Button
                type="primary"
                // onClick={() => window.location.reload()}
                style={{ height: "38px" }} // Set the desired height here
              >
                <BarsOutlined />
              </Button>
            </div>
          </div>
          <DoughnutChart />

          <div className="w-full">
            {Object.keys(categories).map((category) => (
              <Category
                key={category}
                category={category}
                widgets={categories[category].filter((widget) =>
                  widget.name.toLowerCase().includes(searchTerm.toLowerCase())
                )}
              />
            ))}
          </div>
        </div>

        <Drawer
          title="Add a new widget"
          placement="right"
          onClose={closeDrawer}
          visible={drawerVisible}
          width={320}
        >
          <AddWidgetForm />
        </Drawer>
      </div>
    </div>
  );
}

export default Dashboard;
