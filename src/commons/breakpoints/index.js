const size = {
    xxs: '400px',
    xs: '505px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
}

export default {
    device: {
        xxs: `(max-width: ${size.xxs})`,
        xs: `(max-width: ${size.xs})`,
        sm: `(max-width: ${size.sm})`,
        md: `(max-width: ${size.md})`,
        lg: `(max-width: ${size.lg})`,
        xl: `(max-width: ${size.xl})`
    }
}