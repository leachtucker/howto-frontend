const size = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
}

export default {
    device: {
        sm: `(max-width: ${size.sm})`,
        md: `(max-width: ${size.md})`,
        lg: `(max-width: ${size.lg})`,
        xl: `(max-width: ${size.xl})`
    }
}