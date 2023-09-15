import { Chart } from "react-google-charts";

export const data = [
  ["Category", "Total spent"],
  ["Aluguel", 1500],
  ["Alimentação", 700],
  ["Roupas", 200],
  ["Streaming", 100],
  ["Extra", 300],
];

export const options = {
  title: "Meus gastos do mês",
  pieHole: 0.5,
  is3D: true,
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}