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
  title: "Meus gastos em Setembro:",
  pieHole: .5,
  backgroundColor:  "transparent",
  pieSliceBorderColor: "#27282d",
  color: "#f7f9f8",
  fontName: 'Roboto Slab',
  titleTextStyle: {
    color: '#f0f2f1',
    fontSize: '24',
  },
  legend: {
    position: "labeled", 
    textStyle: {
      color: `#f0f2f1`,
      fontSize: 16},
  },
  pieSliceTextStyle: {
    color: "#f7f9f8",
    fontSize: "16"
  },
  slices: [
    {color: '#1d3b31'},
    {color: '#1a7a5e'},
    {color: '#259678'},
    {color: '#29a383'},
    {color: '#56ba9f'},
  ]
};


export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="40rem"
      data={data}
      options={options}
      chartLanguage="pt-BR"
    />
  );
}