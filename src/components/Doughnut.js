import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Flex, Progress } from "antd";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const threeColors = {
    "0%": "#C70039",
    "50%": "#FFC300",
    "100%": "#B2BEB5",
  };
  const labels = [
    "Passed(7253)",
    "Not Available(36)",
    "Warning(681)",
    "Failed(1689)",
  ];
  const data = {
    datasets: [
      {
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
    <div className="flex items-center justify-center gap-4">
      <div className="w-1/2 h-56 bg-white shadow-md rounded-lg m-auto p-4 items-center">
        <h2 className="font-bold text-center text-gray-800">
          Cloud Account Risk Management
        </h2>
        <div className="flex w-full justify-center h-40">
          <Doughnut data={data} />
          <div className="flex flex-col justify-center items-start px-4">
            {labels.map((label, index) => (
              <div key={index} className="flex items-center mb-2">
                <span
                  className="inline-block w-4 h-4 mr-2"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-1/2 h-56 bg-white shadow-md rounded-lg m-auto p-4 items-center">
        <h2 className="font-bold text-center text-gray-800">
          Image Risk Assessment
        </h2>
        <div className=" w-full justify-center h-48 my-8 ">

        <Flex gap="small" vertical>
          <Progress percent={99.9} strokeColor={threeColors} />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
        </Flex>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
