import { Box } from "@mui/material";

export default function StyledBox({ children }: { children: React.ReactNode }) {
  return <Box sx={{ margin: "10px" }}>{children}</Box>;
}
