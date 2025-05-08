import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Container,
  CircularProgress,
  Alert,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAnimeDetails } from "../hooks/useAnimeDetails";
import Header from "../components/common/Header";
import { AnimeDetailsCard } from "../components/AnimeDetailsCard";

const DetailPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const { t } = useTranslation("common");

  const { anime, loading, error } = useAnimeDetails();

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ py: 4, marginTop: "64px" }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            mb: 3,
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          {t("backToSearch")}
        </Button>

        {loading && (
          <Box display="flex" justifyContent="center" py={4}>
            <CircularProgress size={48} />
          </Box>
        )}

        {error && <Alert severity="error">{error}</Alert>}

        {!loading && anime && <AnimeDetailsCard anime={anime} />}
      </Container>
    </>
  );
};

export default DetailPage;
