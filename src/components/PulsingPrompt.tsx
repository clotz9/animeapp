import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTranslation } from "react-i18next";

const PulseCharacter = ({ char, index }: { char: string; index: number }) => {
  const theme = useTheme();

  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  return (
    <motion.span
      style={{
        display: "inline-block",
        padding: "0 1px",
      }}
      animate={{
        y: [0, -5, 0],
        color: [primary, secondary, primary],
        textShadow: [
          `0px 0px 4px ${primary}88`,
          `0px 0px 8px ${secondary}cc`,
          `0px 0px 4px ${primary}88`,
        ],
        filter: [
          `drop-shadow(0 0 2px ${primary}66)`,
          `drop-shadow(0 0 6px ${secondary}aa)`,
          `drop-shadow(0 0 2px ${primary}66)`,
        ],
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      {char}
    </motion.span>
  );
};

export default function PulsingPrompt() {
  const { t } = useTranslation("common");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={2}
      sx={{
        textAlign: "center",
      }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
        style={{ marginTop: "12px" }}
      >
        <ArrowUpwardIcon fontSize="large" color="primary" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Typography variant="h6" color="primary">
          {t("promptMessage")
            .split("")
            .map((char, i) => (
              <PulseCharacter
                key={i}
                char={char === " " ? "\u00A0" : char}
                index={i}
              />
            ))}
        </Typography>
      </motion.div>
    </Box>
  );
}
