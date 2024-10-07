module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'url-loader',
              options: {
                url: true,
                limit: 100000,
              },
            },
          ],
        },
      ],
    },
  };