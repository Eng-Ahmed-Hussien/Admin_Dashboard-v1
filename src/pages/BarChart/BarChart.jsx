import { Box } from "@mui/material";
import Bar from "./Bar";
import Header from "../../components/Header/Header";


export default function BarChart() {

  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
}