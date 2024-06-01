import React from "react";
import { theme } from "../config/theme";
import SyncLoader from "react-spinners/SyncLoader";

export const Loader = () => {
  return (
    <SyncLoader
      color={theme.colors.primary}
      loading={true}
      cssOverride={{ opacity: "0.5" }}
      size={10}
    />
  );
};

export default Loader;
