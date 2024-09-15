import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";

export default function Home() {
  return (
    <>
      <Stack sx={{ background: "#388e3c" }}>HEADER</Stack>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top Agents</Box>
          <Box>Top Properties</Box>
          <Box>Events</Box>
        </Stack>
      </Container>
      <Stack sx={{ background: "#a1887f" }}>FOOTER</Stack>
    </>
  );
}
