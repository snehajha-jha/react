import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Styles from "./chart.module.css";
Chart.register(...registerables);

const MultiBarChart = () => {
	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
		datasets: [
			{
				label: "Value 1",
				backgroundColor: "#00FF00",
				data: [100, 200, 300],
			},
			{
				label: "Value 2",
				backgroundColor: "#808080",
				data: [150, 250, 350],
			},
			{
				label: "Value 3",
				backgroundColor: "#0000FF",
				data: [180, 280, 380],
			},
			// Add more datasets for each month
		],
	};

	const options = {
		scales: {
			x: { stacked: true },
			y: { stacked: true },
		},
	};

	return (
		<div className={Styles.chartcontainer}>
			<div style={{ fonts: "8px" }}>Average Chart</div>
			<Bar data={data} options={options} />
		</div>
	);
};

export default MultiBarChart;
