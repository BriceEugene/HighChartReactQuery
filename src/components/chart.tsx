import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Chart() {
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
