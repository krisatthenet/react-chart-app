import React, { PureComponent } from "react";
import "./App.css";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from "recharts";

const data = [
	{
		name: "Fri, 08 Mar 2019",
		missmatch: 0,
		uncorrected: 50,
		corrected: 50
	},
	{
		name: "Sat, 09 Mar 2019",
		missmatch: 0,
		uncorrected: 60,
		corrected: 40
	},
	{
		name: "Sun, 10 Mar 2019",
		missmatch: 0,
		uncorrected: 68,
		corrected: 38
	},
	{
		name: "Mon, 11 Mar 2019",
		missmatch: 0,
		uncorrected: 65,
		corrected: 40
	},
	{
		name: "Tue, 12 Mar 2019",
		missmatch: 0,
		uncorrected: 80,
		corrected: 30
	},
	{
		name: "Wed, 13 Mar 2019",
		missmatch: 0,
		uncorrected: 79,
		corrected: 29
	},
	{
		name: "Thu, 14 Mar 2019",
		missmatch: 0,
		uncorrected: 55,
		corrected: 45
	}
];

export default class Example extends PureComponent {
	render() {
		return (
			<div className="App-chart">
				<label className="App-chart-label">
					<i class="fas fa-chart-bar" /> Correction statistics
				</label>
				<ResponsiveContainer>
					<AreaChart
						data={data}
						margin={{
							top: 10,
							right: 50,
							left: 10,
							bottom: 30
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Area
							type="monotone"
							dataKey="missmatch"
							stackId="1"
							stroke="green"
							fill="#dfffdb"
						/>
						<Area
							type="monotone"
							dataKey="uncorrected"
							stackId="1"
							stroke="#59d1f9"
							fill="#dbf6ff"
						/>
						<Area
							type="monotone"
							dataKey="corrected"
							stackId="1"
							stroke="blue"
							fill="#dbdeff"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
