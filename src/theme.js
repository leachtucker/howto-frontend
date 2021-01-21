// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: "Open Sans",
        body: "Raleway",
    },
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: "none",
            },
            // styles for the `a`
            a: {
                color: "teal.500",
                _hover: {
                    textDecoration: "underline",
                },
            },
        },
    },
})

export default theme;