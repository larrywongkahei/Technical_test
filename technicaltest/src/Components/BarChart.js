import { Bar } from "react-chartjs-2";
import React from "react";
import { Chart as chartJS } from "chart.js/auto"

function BarChart ({ Data }) {
    return <div>
        <Bar data={Data} />
    </div>
}

export default BarChart