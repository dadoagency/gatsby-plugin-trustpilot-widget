import React from "react";

export default class TrustpilotContainer extends React.Component {
  constructor(props) {
    super(props);

    this.check = setInterval(this.loadLibrary.bind(this), 1000);
  }

  componentDidMount() {
    this.loadLibrary();
  }

  componentWillUnmount() {
    clearInterval(this.check);
  }

  loadLibrary() {
    if (typeof window !== "undefined" && window.Trustpilot) {
      window.Trustpilot.loadFromElement(this.props.reference.current, true);

      clearInterval(this.check);
    }
  }

  render() {
    const {
      theme,
      height,
      width,
      reference,
      template,
      business,
      username,
      stars,
      sku,
    } = this.props;
    const language = this.props.language.toLowerCase();
    const culture = this.props.culture.toUpperCase();
    const domain = language === "en" ? "www" : language;
    return (
      <div
        ref={reference}
        className="trustpilot-widget"
        data-locale={`${language}-${culture}`}
        data-template-id={template}
        data-businessunit-id={business}
        data-style-height={height}
        data-style-width={width}
        data-theme={theme}
        data-stars={stars}
        data-sku={sku}
      >
        <a
          href={`https://${domain}.trustpilot.com/review/${username}`}
          target="_blank"
          rel="noreferrer"
        >
          Trustpilot
        </a>
      </div>
    );
  }
}
