import { Stack } from "@mui/material";
import Head from "next/head";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack sx={{ background: "#388e3c" }}>HEADER HOME</Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: "#a1887f" }}>FOOTER</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;
