import { Line } from "react-chartjs-2";
import React from "react";
import { Chart as chartJS } from "chart.js/auto"

function LineChart ({ Data }) {
    return <div>
        <Line data={Data} />
    </div>
}

export default LineChart