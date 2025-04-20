import { Box } from "@mui/material";
import Geo from "./Geo";
import Header from "../../components/Header/Header";

export default function GeographyChart() {

  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Geo />
    </Box>
  );
}