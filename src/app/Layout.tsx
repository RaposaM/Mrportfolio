import { Outlet, ScrollRestoration } from "react-router";
import { useEffect } from "react";

// Import all images to preload them
import imgBug21 from "../imports/DesignPortfolio/1ce87d4363ee6fa964cdda36a70f3703b22d025d.png";
import imgImage961 from "../imports/DesignPortfolio/7960192135425a345ed312ea1bfc3f730720ace0.png";
import imgFrame114 from "../imports/DesignPortfolio/d8e9f7adab9241d22039a8b975538326ba03e114.png";
import imgFrame115 from "../imports/DesignPortfolio/034f2c554cfdfc09f65fa34703773fb8e6ef4ca1.png";
import imgFrame116 from "../imports/DesignPortfolio/e8fe553e7c66351f159df5e163f2caf9bb7fe3ae.png";
import imgFrame117 from "../imports/DesignPortfolio/c9a288d7c758e855381736f564ad037ca1df0b56.png";
import imgFrame1321321339 from "../imports/DesignPortfolioAboutPage/d2e7787856084f81fea5080a54ebabb2dc148224.png";
import imgRectangle145 from "../imports/DesignPortfolioAboutPage/f3039712e58e310ff4f4355d2d37057a2b770cfd.png";
import imgRectangle146 from "../imports/DesignPortfolioAboutPage/1b7655a8fd6a5b1efa12f600dc6d3c562aefcde9.png";
import imgRectangle147 from "../imports/DesignPortfolioAboutPage/f23070554c0e1e6355f797ce29cbd1af86d05205.png";
import imgFrame1321321351 from "../imports/DesignPortfolioProjectsPage/7107f6377586a0dc82027304be6a6a2184c18d3f.png";
import imgFrame1321321352 from "../imports/DesignPortfolioProjectsPage/2f07f2889eb21c8afeab86cf965de76136dca99b.png";
import imgFrame1321321353 from "../imports/DesignPortfolioProjectsPage/68f16bb603e89abe668b82b22f9981f474067565.png";
import imgFrame1321321354 from "../imports/DesignPortfolioProjectsPage/091837a1e66e40431196c2a9cdb6d3580ee8df9c.png";
import imgFrame1321321355 from "../imports/DesignPortfolioProjectsPage/9c2e48477ac702dfba6b62a9f0e8df59cbc60363.png";

export default function Layout() {
  useEffect(() => {
    // Preload all images
    const images = [
      imgBug21, imgImage961, imgFrame114, imgFrame115, imgFrame116, imgFrame117,
      imgFrame1321321339, imgRectangle145, imgRectangle146, imgRectangle147,
      imgFrame1321321351, imgFrame1321321352, imgFrame1321321353, imgFrame1321321354, imgFrame1321321355
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
