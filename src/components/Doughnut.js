import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Flex, Progress } from "antd";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: [
      "Passed(7253)",
      "Not Available(36)",
      "Warning(681)",
      "Failed(1689)",
    ],
    datasets: [
      {
        // label: "My Firs",
        data: [500, 30, 100, 200],
        backgroundColor: [
          "rgb(0, 128, 0)",
          "rgb(200, 200,200)",
          "rgb(255, 205, 86)",
          "rgb(255, 0,0)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <h2 className=" font-bold text-center text-gray-800">
        Cloud Account Risk Management
      </h2>
      <div className="justify-between mb-4 flex  ">
        <div className="w-[400px] h-56 bg-white shadow-md rounded-lg m-auto py-2   flex justify-center items-center">
          <Doughnut data={data} />
        </div>

        <div className="w-[400px] h-56 bg-white shadow-md rounded-lg m-4 p-14">
          <h2 className=" font-bold text-center text-gray-800">
            Image Risk Assessment
          </h2>
          <Flex gap="small" vertical>
            <Progress percent={30} />
            <Progress percent={70} status="exception" />
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
