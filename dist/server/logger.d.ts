declare const logger: {
    error: (err: any) => void;
    appStarted: (port: any, host: any, tunnelStarted: any) => void;
};
export default logger;
