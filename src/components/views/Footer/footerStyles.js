import { makeStyles } from '@material-ui/styles';

const footerStyles = makeStyles({
  root: {
    backgroundColor: '#b95608f7',
    margin: 0,
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#222',
    fontFamily: 'inherit',
    position: 'static',
    minHeight: '100px',
  },
  content: {
    color: '#222',
    fontFamily: 'inherit',
  },
});

export default footerStyles;
