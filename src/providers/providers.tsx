import { ThemeProvider, createTheme } from "@mui/material/styles";
import  CssBaseline  from "@mui/material/CssBaseline";

const theme = createTheme({
    palette: {
        mode: 'dark',
    }
})

interface child {
    children: React.ReactNode
}



const Providers = ({ children }: child) => {
    return ( 
        <ThemeProvider theme={theme} >
            <CssBaseline>
                { children }
            </CssBaseline>
        </ThemeProvider>
     );
}
 
export default Providers;