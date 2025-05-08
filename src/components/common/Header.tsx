import { AppBar, Toolbar, Typography } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import { UI } from "../../utils/constants";
import { KickerSVG } from "../AnimatedHeading";
import { AnimatedCharacter } from "../AnimatedHeading";

export default function AnimeHeader() {
  const bounceControls = useAnimation();

  const { t } = useTranslation("common");

  const triggerBounce = () => {
    bounceControls.start({
      y: [0, -10, 0],
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "secondary.main",
        color: "primary.main",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <KickerSVG onKick={triggerBounce} />
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          {t("appTitle")
            .split("")
            .map((char, i) => (
              <AnimatedCharacter
                key={i}
                char={char === " " ? "\u00A0" : char}
                index={i}
                isTarget={i === UI.ANIMATION_KICK_INDEX}
                controls={i === UI.ANIMATION_KICK_INDEX ? bounceControls : null}
              />
            ))}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
