import React from 'react';
import PropTypes from 'prop-types';

const Default = ({ assets, content }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>OtakuWorld</title>
      <link
        href={assets.main.css}
        as="style"
        media="screen, projection"
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
      />
    </head>
    <body>
      <div id="root">
        {content}
      </div>
      <script src={assets.main.js} charSet="UTF-8" />
    </body>
  </html>
);

Default.propTypes = {
  assets: PropTypes.shape({
    main: PropTypes.shape({
      css: PropTypes.string,
      js: PropTypes.string,
    }),
  }).isRequired,
  content: PropTypes.element.isRequired,
};

export default Default;
