import express, { Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

import React from 'react';
import { renderToString } from 'react-dom/server';

import App from 'App';
import Default from 'template/Default';
import logger from 'utils/logger';

import Assets from '../static/dist/webpack-assets.json';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(helmet());

app.get('*', (req: Request, res: Response) => {
  const props = {
    assets: Assets,
    content: <App />,
  };

  const component = React.createElement(Default, props);
  const html = renderToString(component);

  return res.send(`<!DOCTYPE html>${html}`);
});

app.listen(PORT, () => {
  logger.info(`Running on port: ${PORT}`);
});
