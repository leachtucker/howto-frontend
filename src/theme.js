// theme.js
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    fonts: {
        heading: "'Source Sans Pro', sans-serif",
        body: "'Source Sans Pro', sans-serif",
    },
    colors: {
        text: {
            400: "#636363"
        }
    },
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: "none",
                fontWeight: "300"
            },
            // styles for the `a`
            a: {
                color: "teal.500",
                _hover: {
                    textDecoration: "none",
                },
            },
        },
    },
})

export default customTheme;