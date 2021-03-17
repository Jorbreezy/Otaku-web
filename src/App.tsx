import React, { PureComponent } from 'react';

import 'assets/stylesheets/base.scss';

import Navbar from 'components/Navbar/Navbar';

class App extends PureComponent<any, any> {
  render() {
    return (
      <>
        <Navbar />
      </>
    );
  }
}

export default App;
