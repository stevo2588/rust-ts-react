module.exports = rules = [
    // Add support for native node modules
    {
        test: /\.node$/,
        use: "node-loader",
    },
    {
        test: /\.(m?js|node)$/,
        exclude: /(.webpack|node_modules)/,
        parser: {amd: false},
        use: {
            loader: "@marshallofsound/webpack-asset-relocator-loader",
            options: {
                outputAssetBase: "native_modules",
            },
        },
    },
    {
        test: /\.tsx?$/,
        exclude: /(node_modules|.webpack)/,
        loaders: [
            {
                loader: 'babel-loader',
            },
            {
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }]
    },
    {
        test: /\.js$/,
        include: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
    },
    {
        test: /\.js$/,
        include: /node_modules\/src/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript']
        }
    },
    {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
    },
    {
        test: /\.(svg|ico|icns)$/,
        loader: "file-loader",
        options: {
            name: "[path][name].[ext]",
        },
    },
    {
        test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
        loader: "url-loader",
        options: {
            name: "[path][name].[ext]",
        },
    },
    {
        test: /\.(yml|yaml)$/,
        loader: "raw-loader",
    },
];
