import { Box } from "@mui/material";

interface LoadingProps {
  open: boolean;
}

const Loading = ({ open }: LoadingProps) => {
  if (!open) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        backgroundColor: "rgb(255, 255, 255)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        src="/loading.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: 220,
          height: 220,
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default Loading;
