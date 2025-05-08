import { Box, InputBase, alpha, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const MotionDiv = motion.div;

function ExpandableSearchField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  const controls = useAnimation();
  const theme = useTheme();

  const handleMouseEnter = () => {
    controls.start({
      width: "300px",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    });
  };

  const handleMouseLeave = () => {
    if (!value) {
      controls.start({
        width: "55px",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
    }
  };

  useEffect(() => {
    if (value) controls.set({ width: "300px" });
  }, [value, controls]);

  return (
    <MotionDiv
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={controls}
      initial={{ width: "55px" }}
      whileHover={{
        backgroundColor: alpha(theme.palette.primary.main, 0.25),
        opacity: 1,
      }}
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.primary.main, 0.15),
        borderRadius: "50px",
        overflow: "hidden",
        height: "55px",
        marginBottom: 20,
      }}
    >
      {/* Search Icon Container */}
      <Box
        sx={{
          width: "55px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <SearchIcon color="primary" />
      </Box>

      {/* Input Base */}
      <InputBase
        autoFocus
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={{
          flex: 1,
          opacity: 1,
          transition: "opacity 0.3s ease, margin-left 0.3s",
          color: "primary.main",
          ml: value ? 1 : 0,
        }}
      />
    </MotionDiv>
  );
}

const SearchBar = ({ query, setQuery }: SearchBarProps) => {
  const { t } = useTranslation("common");
  return (
    <ExpandableSearchField
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={t("searchPlaceholder")}
    />
  );
};

export default SearchBar;
