import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { AnimeDetail } from "../types/anime";

export const AnimeDetailsCard = ({ anime }: { anime: AnimeDetail }) => {
  const theme = useTheme();
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        elevation={6}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 4,
          overflow: "hidden",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(145deg, #2d2d2d, #1c1c1c)"
              : "linear-gradient(135deg, #fefefe, #f5f5f5)",
        }}
      >
        <CardMedia
          component={motion.img}
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          sx={{
            width: { xs: "100%", md: 300 },
            objectFit: "cover",
          }}
          image={anime.images.jpg.image_url}
        />

        <CardContent
          sx={{
            flex: 1,
            p: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            {anime.title}
          </Typography>

          <Grid container spacing={1}>
            {[
              anime.type,
              `${anime.episodes} eps`,
              anime?.status,
              anime.year?.toString(),
              `Score: ${anime.score ?? "N/A"}`,
            ]
              .filter(Boolean)
              .map((label, idx) => (
                <Grid key={idx}>
                  <Chip
                    label={label}
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 500 }}
                  />
                </Grid>
              ))}
          </Grid>

          {anime.genres.length > 0 && (
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {t("genre")}:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {anime.genres.map((g) => (
                  <Chip
                    key={g.name}
                    label={g.name}
                    variant="outlined"
                    color="secondary"
                    size="small"
                  />
                ))}
              </Box>
            </Box>
          )}

          <Typography
            variant="body1"
            sx={{ whiteSpace: "pre-line", lineHeight: 1.7 }}
          >
            {anime.synopsis || t("noSynopsis")}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
