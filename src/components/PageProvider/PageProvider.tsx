import React from "react";
import HomePage from "../../pages/HomePage";
import ServicesPage from "../../pages/ServicesPage";
import HairStylingPage from "../../pages/HairStylingPage";
import BeardAndShavePage from "../../pages/BeardAndShavePage";
import DirectionsPage from "../../pages/DirectionsPage";

type PageProviderProps = {
  page: string;
};

const pageMap: Record<string, React.FC> = {
  Home: HomePage,
  Services: ServicesPage,
  "Hair Styling": HairStylingPage,
  "Beard and Shave": BeardAndShavePage,
  Directions: DirectionsPage,
};

export const PageProvider: React.FC<PageProviderProps> = ({ page }) => {
  const PageComponent = pageMap[page] || (() => <div>Page Not Found</div>);
  return <PageComponent />;
};
