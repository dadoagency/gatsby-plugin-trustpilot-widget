import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import templates from './templates';
import TrustpilotContainer from './TrustpilotContainer';
import useSitePluginOptions from './hooks/useSitePluginOptions';

const Grid = ({ language, culture, theme, height, width, stars }) => {
  const reference = React.createRef();
  const { business, username } = useSitePluginOptions();

  return (
    <Fragment>
      <TrustpilotContainer
        reference={reference}
        template={templates.Grid}
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

Grid.propTypes = {
  language: PropTypes.string,
  culture: PropTypes.string,
  theme: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  stars: PropTypes.number,
};

Grid.defaultProps = {
  language: 'en',
  culture: 'US',
  theme: 'light',
  height: '52px',
  width: '100%',
  stars: 5,
};

export default Grid;
