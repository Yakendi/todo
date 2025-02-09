import { SApp } from '../assets/styles/app.styles';
import { ThemeProvider } from 'styled-components';
import theme from '../constants/constants.styles';
import {Todos} from "../pages"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SApp>
               <Todos /> 
            </SApp>
        </ThemeProvider>
    );
}

export default App;
