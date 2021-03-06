import React, { Fragment } from "react";
import PropTypes from "prop-types";
import templates from "./templates";
import TrustpilotContainer from "./TrustpilotContainer";
import useSitePluginOptions from "./hooks/useSitePluginOptions";

const Mini = ({
  language,
  culture,
  theme,
  height,
  width,
  stars,
}) => {
  const reference = React.createRef();
  const { business, username } = useSitePluginOptions();

  return (
    <Fragment>
      <TrustpilotContainer
        reference={reference}
        template={templates.Mini}
        business={business}
        username={username}
        language={language}
        culture={culture}
        theme={theme}
        height={height}
        width={width}
        stars={stars}
      />
    </Fragment>
  );
};

Mini.propTypes = {
  language: PropTypes.string,
  culture: PropTypes.string,
  theme: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  stars: PropTypes.number,
};

Mini.defaultProps = {
  language: "en",
  culture: "US",
  theme: "light",
  height: "24px",
  width: "100%",
  stars: 5,
};

export default Mini;
