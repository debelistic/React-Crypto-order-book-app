import React from 'react';
import Main from './views';
import mainStyle from './mainstyle';

const App = () => {
  const classes = mainStyle();

  return (
    <div className={classes.root}>
      <Main />
    </div>
  );
};


export default App;
