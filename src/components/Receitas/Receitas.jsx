import React from "react";
import * as S from "./style.js";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Rectangle,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "Fev", pv: 200 },
	{ name: "Mar", pv: 900 },
	{ name: "Abr", pv: 1000 },
	{ name: "Mai", pv: 550 },
	{ name: "Jun", pv: 1590 },
	{ name: "Jul", pv: 2000 },
	{ name: "Ago", pv: 250 },
	{ name: "Set", pv: 500 },
	{ name: "Out", pv: 1000 },
	// mais dados aqui
];

const Receitas = () => {
	return (
		<S.Container>
			<h1>Gráfico de receitas</h1>
			<ResponsiveContainer width="100%" height={230}>
				<BarChart
					width={540}
					height={230}
					data={data}
					margin={{
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
					}}
				>
					<YAxis
						axisLine={false}
						tickLine={false}
						tick={({ x, y, payload }) => (
							<text
								fontWeight={500}
								x={20}
								y={y}
								dy={3}
								textAnchor="start"
								fill="#666"
							>
								{payload.value}
							</text>
						)}
					/>
					<XAxis
						dataKey="name"
						axisLine={false}
						tickLine={false}
						tick={({ x, y, payload }) => (
							<text
								x={x}
								y={y}
								dy={20}
								textAnchor="middle"
								fill="#666"
								fontWeight={500}
							>
								{payload.value}
							</text>
						)}
					/>
					<Bar
						dataKey="pv"
						fill="rgba(158, 110, 254, 0.24)"
						barSize={42}
						shape={(props) => {
							const { fill, ...other } = props;
							return (
								<Rectangle
									{...other}
									fill={props.payload.name === "Out" ? "#8884d8" : fill}
									radius={6}
								/>
							);
						}}
					/>
				</BarChart>
			</ResponsiveContainer>
		</S.Container>
	);
};

export default Receitas;
