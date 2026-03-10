import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";

import successAnimation from "@/public/assets/lottie/success.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#202123",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  borderRadius: "12px",
};

export default function ModalSuccess({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        
        <Lottie
          animationData={successAnimation}
          loop={false}
          autoplay={true}
          style={{ width: 180, margin: "0 auto" }}
        />

        <Typography variant="h6" sx={{ mt: 2 }}>
          Message Sent Successfully
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Your message has been sent.
        </Typography>

      </Box>
    </Modal>
  );
}