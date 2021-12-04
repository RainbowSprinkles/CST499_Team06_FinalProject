import React, {useEffect, useRef, useState} from "react";

import { Line } from "react-chartjs-2";

const Chart = (props) => {

  const label = useRef([]);
  const second = useRef(0);
  const count = useRef(0);
  const chartData = useRef([]);
  const data = useRef();

  useEffect(() => {
    if (props.clear) {
      label.current = [];
      count.current = 0;
      chartData.current = [];
    }
    // if (props.isDone === true) {
    //   // if (second.current === 0) {
    //     label.current = [];
    //     count.current = 0;
    //     chartData.current = [];
    //     // second.current = second.current + 1;
    //   // }
    // }

    count.current = count.current + 1;
    chartData.current = [...props.data];
    label.current.push(count.current);
    // label2.current.push(props.data.at(-1) - 25);
  }, [props]);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          fontColor: "#212A49",
          fontSize: 20,
        },
      },
      title: {
        display: true,
        text: "Your Speed ",
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          fontColor: "green",
          display: true,
          stepSize: 0,
        },
        min: 10,
        max: 200,
      },
      x: {
        title: {
          display: true,
          text: "Time In Sec",
        },
        grid: {
          display: false,
        },
        ticks: {
          fontColor: "green",
          display: false,
          stepSize: 5,
        },
        beginAtZero: false,
      },
    },
  };

  // Set data depending on test type
  if (props.testType === 'download') {
    data.current = {
          labels: label.current,
          display: false,
          datasets: [
            {
              label: "download Speed",
              lineTension: 0.5,
              data: chartData.current,
              fill: true,
              backgroundColor: "rgba(255,0,34,0.73)",
              borderColor: "rgba(100,52,100,0.7)",
            },
          ],
        };
  } else {
    data.current = {
      labels: label.current,
      display: false,
      datasets: [
        {
          label: "Upload Speed",
          lineTension: 0.5,
          data: chartData.current,
          fill: true,
          backgroundColor: "rgba(00,122,22,0.5)",
          borderColor: "rgba(100,52,100,0.7)",
        },
      ],
    };
  }

  // const data1 = {
  //   labels: label.current,
  //   display: false,
  //   datasets: [
  //     {
  //       label: "download Speed",
  //       lineTension: 0.5,
  //       data: chartData.current,
  //       fill: true,
  //       backgroundColor: "rgba(255,0,34,0.73)",
  //       borderColor: "rgba(100,52,100,0.7)",
  //     },
  //   ],
  // };
  //
  // const data2 = {
  //   labels: label.current,
  //   display: false,
  //   datasets: [
  //     {
  //       label: "Upload Speed",
  //       lineTension: 0.5,
  //       data: chartData.current,
  //       fill: true,
  //       backgroundColor: "rgba(00,122,22,0.5)",
  //       borderColor: "rgba(100,52,100,0.7)",
  //     },
  //   ],
  // };

  return (
    <div>
      <Line
        data={data.current}
        options={options}
        width={700}
        height={220}
      />
    </div>
  );
};

export default Chart;
