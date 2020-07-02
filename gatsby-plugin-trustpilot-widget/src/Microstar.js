import React, { Fragment } from "react";
import PropTypes from "prop-types";
import templates from './templates'
import TrustpilotContainer from "./trustpilot-container";
import useSitePluginOptions from "./hooks/useSitePluginOptions"

const MicroStar = ({
    language,
    culture,
    theme,
    height,
    width
}) => {
	const reference = React.createRef();
	const {business, username} = useSitePluginOptions()

	return (
		<Fragment>
			<TrustpilotContainer
				reference={reference}
				template={templates.MicroStar}
				business={business}
                username={username}
                language={language}
				culture={culture}
				theme={theme}
				height={height}
				width={width}
			/>
		</Fragment>
	);
};

MicroStar.propTypes = {
	language: PropTypes.string,
	culture: PropTypes.string,
	theme: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string,
	stars: PropTypes.number,
};

MicroStar.defaultProps = {
	language: "en",
	culture: "US",
	theme: "light",
	height: "52px",
	width: "100%",
};

export default MicroStar;
