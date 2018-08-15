var path = require('path');

module.exports = {
    entry : [
        './scss/index.scss'
    ],
    output: {
        path : path.resolve(__dirname , './css'),
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use : [
                    {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].css'
                        }
                    },
                    { loader : 'sass-loader' }
                ]
            }
        ]
    }
}