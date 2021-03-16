import express, { Request, Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './App';
import Default from './template/Default';
import Assets from '../static/dist/webpack-assets.json';

const app = express();
const PORT = 3000;

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
  console.log('Listening on PORT: ', PORT);
});
