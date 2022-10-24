import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import "../public/css/styles.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette : {
        primary :{
            main : '#44475a',
            contrastText : '#ff79c6'
        },
        secondary : {
            main : '#ff79c6'
        }
    }
})
import Header from "../components/Header"


function myApp ({Component, pageProps}) {

    return (
    <>
        <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    </>
    
    )
}

export default myApp;