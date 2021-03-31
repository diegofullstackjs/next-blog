import React, {useEffect,ReactNode} from 'react'
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
interface Props  {
  Component : React.FC
}
const  MyApp: React.FC<Props> = ({Component,...props}) =>  {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
