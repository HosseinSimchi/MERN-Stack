import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import "../public/css/styles.css"
// import '@mui/icons-material'
// import '@mui/material'
// import 'emotion/react'

import Header from "../components/Header"


function myApp ({Component, pageProps}) {

    return (
    <>
        <Header />
        <Component {...pageProps} />
    </>
    
    )
}

export default myApp;