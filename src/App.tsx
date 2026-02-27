import React from 'react';
import {createTheme, MantineProvider} from "@mantine/core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "@mantine/core/styles.css";
import HomePage from "./Pages/HomePage";

function App() {
    // Centralized Mantine theme tokens used by Tailwind-style semantic colors.
    const theme = createTheme({
        colors: {
            'mine-shaft': [
                '#fafafa', '#f5f5f5', '#e6e6e6', '#d6d6d6', '#a5a5a5', '#767676', '#575757', '#434343', '#2d2d2d', '#1a1a1a', '#0a0a0a',
            ],
            'bright-sun': [
                '#fffbeb', '#fef2c7', '#fee589', '#fdd149', '#fcbe23', '#f69c0a', '#da7505', '#b55108', '#933f0d', '#79340e', '#451903',
            ],
        }
    });

    return (
        <MantineProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    {/* Catch-all route keeps current app on the Home page until additional pages are wired. */}
                    <Route path='*' element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
