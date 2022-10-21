import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={516}
    viewBox="0 0 280 516"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="125" r="125" />
    <rect x="0" y="265" rx="10" ry="10" width="280" height="22" />
    <rect x="0" y="308" rx="10" ry="10" width="280" height="83" />
    <rect x="0" y="410" rx="10" ry="10" width="100" height="40" />
    <rect x="150" y="410" rx="10" ry="10" width="130" height="40" />
  </ContentLoader>
);

export default Skeleton;
