import { useNavigate } from "react-router-dom";
import {
  Grid,
  CardMedia,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import { AnimeSearch } from "../types/anime";

interface AnimeCardProps {
  results: AnimeSearch[];
}

const StyledMotionDiv = styled(motion.div)({
  cursor: "pointer",
  height: "100%",
  backgroundColor: "white",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  position: "relative",
  hover: {
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  },
});

const AnimeCard = ({ results }: AnimeCardProps) => {
  const navigate = useNavigate();

  return (
    <>
      {results.map((anime, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <StyledMotionDiv onClick={() => navigate(`/anime/${anime.mal_id}`)}>
              <CardMedia
                component="img"
                height="300"
                image={anime.images.jpg.image_url}
                alt={anime.title}
                sx={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
              <CardContent sx={{ backgroundColor: "secondary.main" }}>
                <Typography
                  color="background.default"
                  variant="subtitle1"
                  component="div"
                  noWrap
                >
                  {anime.title}
                </Typography>
              </CardContent>
            </StyledMotionDiv>
          </motion.div>
        </Grid>
      ))}
    </>
  );
};

export default AnimeCard;
