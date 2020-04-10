const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/front/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src/build')
    },
    "module": {
        "rules": [
            {
                "test": /\.css$/,
                "use": [
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    }
};