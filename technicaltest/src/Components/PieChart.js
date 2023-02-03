import { Pie } from "react-chartjs-2";
import React from "react";
import { Chart as chartJS } from "chart.js/auto"

function PieChart ({ Data }) {
    return <div>
        <Pie data={Data} />
    </div>
}

export default PieChart