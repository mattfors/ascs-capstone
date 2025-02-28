module.exports = {
    darkMode: 'class',
    content: ['./dist/*.html'],
    theme: {
        extend: {
            colors : {
                background: {
                    DEFAULT: '#1D3354',
                },
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ['disabled'],
            textColor: ['disabled'],
            opacity: ['disabled'],
            cursor: ['disabled'],
        },
    },
    plugins: [],
}
