import { makeStyles } from '@material-ui/styles';

const mainStyle = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f1f4f0',
    margin: 0,
    padding: 0,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default mainStyle;
