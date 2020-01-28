declare const _default: {
    mode: any;
    entry: any;
    output: any;
    optimization: any;
    module: {
        rules: ({
            test: RegExp;
            exclude: RegExp;
            use: any;
            include?: undefined;
        } | {
            test: RegExp;
            include: RegExp;
            use: string[];
            exclude?: undefined;
        } | {
            test: RegExp;
            use: string;
            exclude?: undefined;
            include?: undefined;
        } | {
            test: RegExp;
            use: {
                loader: string;
                options: {
                    limit: number;
                    noquotes: boolean;
                };
            }[];
            exclude?: undefined;
            include?: undefined;
        } | {
            test: RegExp;
            use: ({
                loader: string;
                options: {
                    limit: number;
                    mozjpeg?: undefined;
                    gifsicle?: undefined;
                    optipng?: undefined;
                    pngquant?: undefined;
                };
            } | {
                loader: string;
                options: {
                    mozjpeg: {
                        enabled: boolean;
                    };
                    gifsicle: {
                        interlaced: boolean;
                    };
                    optipng: {
                        optimizationLevel: number;
                    };
                    pngquant: {
                        quality: string;
                        speed: number;
                    };
                    limit?: undefined;
                };
            })[];
            exclude?: undefined;
            include?: undefined;
        } | {
            test: RegExp;
            use: {
                loader: string;
                options: {
                    limit: number;
                };
            };
            exclude?: undefined;
            include?: undefined;
        })[];
    };
    plugins: any;
    resolve: {
        plugins: import("tsconfig-paths-webpack-plugin").TsconfigPathsPlugin[];
        modules: string[];
        extensions: string[];
        mainFields: string[];
    };
    devtool: any;
    target: string;
    performance: any;
};
export = _default;
