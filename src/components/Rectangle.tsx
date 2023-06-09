import { FC } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  percentage: number;
};

const Rectangle: FC<Props> = ({ percentage }) => {
  return (
    <Box
      sx={{
        width: 30,
        height: 170,
        outline: '3px solid black',
        borderRadius: 2,
        position: 'relative',
      }}
    >
      <motion.div
        animate={{
          height: `${percentage}%`,
        }}
        style={{
          width: '100%',
          borderRadius: 2,
          position: 'absolute',
          backgroundColor: 'black',
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default Rectangle;