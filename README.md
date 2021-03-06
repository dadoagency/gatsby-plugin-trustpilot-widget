# gatsby-plugin-trustpilot-widget

![License](https://img.shields.io/github/license/pittica/gatsby-plugin-trustpilot-widget)
![Version](https://img.shields.io/github/package-json/v/pittica/gatsby-plugin-trustpilot-widget)
![Release](https://img.shields.io/github/v/release/pittica/gatsby-plugin-trustpilot-widget)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/dadoagency/gatsby-plugin-trustpilot-widget/dev/gatsby)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/dadoagency/gatsby-plugin-trustpilot-widget/dev/react)
![Node.js Package](https://github.com/dadoagency/gatsby-plugin-trustpilot-widget/workflows/Node.js%20Package/badge.svg)
## Description

[Trustpilot](https://www.trustpilot.com/) widget for [GatsbyJS](https://www.gatsbyjs.org/).

## Install

[![npm](https://img.shields.io/npm/v/@pittica/gatsby-plugin-trustpilot-widget)](https://www.npmjs.com/package/@pittica/gatsby-plugin-trustpilot-widget)

```shell
npm install @dadoagency/gatsby-plugin-trustpilot-widget
```

## Configuration

Edit your **gatsby-config.js**.

```javascript
module.exports = {
	plugins: [
		{
			resolve: `@dadoagency/gatsby-plugin-trustpilot-widget`,
			options: {
				username: "USERNAME",
				business: "BUSINESSUNIT_ID",
			},
		},
	],
};
```

The _username_ and _business_ fields **are required**.

You can get the data from the TrustBox in your businness panel on [Trustpilot](https://www.trustpilot.com/)

```HTML
<!-- TrustBox widget - Review Collector -->
<div class="trustpilot-widget" data-locale="en-US" data-template-id="TEMPLATE_ID" data-businessunit-id="BUSINESSUNIT_ID" data-style-height="52px" data-style-width="100%">
  <a href="https://en.trustpilot.com/review/USERNAME" target="_blank" rel="noopener">Trustpilot</a>
</div>
<!-- End TrustBox widget -->
```

## Component Usage

Import the component **TrustpilotReviews** in your component.

```javascript
import {List, MicroStar} from "@dadoagency/gatsby-plugin-trustpilot-widget";
```

Use it in your code as component.

```javascript
class MyComponent extends React.Component {
	render() {
		return (
			<List
				language="en"
				culture="US"
				theme="light"
				width="100%"
				height="52px"
				stars="3"
			/>
			<MicroStar/>
		);
	}
}
```

### Attributes

The component has optional attributes which the user can use to set the aspect of the TrustBox.

#### language

Sets the language of the locale and the language of the API.

##### Default Value

`en`

##### Note

If you set the language attribute you have to set the _culture_ attribute too.

#### culture

Sets the culture of the locale.

##### Default Value

`US`

##### Note

If you set the culture attribute you have to set the _language_ attribute too.

#### theme

Sets the UI theme of the TrustBox.

##### Values

-   `light`
-   `dark`

##### Default value

`light`

#### width

Sets the width of the widget.

##### Default Value

`100%`

#### height

Sets the height of the widget.

##### Default Value

`52px`

#### stars

Filters reviews by stars

##### Default Value

`null` (returns all reviews)

## Adding New Widgets
You can easily add more widgets by duplicating the most recently edited widget in `src`, setting its `template` to the widget's template ID (which you should define in `src/templates.js`), and exporting it in `index.js`.

If you commit your changes with a commit message starting with `feat`, the npm package for this repo will have its version bumped and the new version published automatically.

## Copyright

(c) 2020, Dado Agency (Pty) Ltd; Pittaca S.r.l.s.
