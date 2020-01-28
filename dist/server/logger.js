"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require('chalk');
var ip = require('ip');
var divider = chalk.gray('\n-----------------------------------');
var logger = {
    error: function (err) {
        console.error(chalk.red(err));
    },
    appStarted: function (port, host, tunnelStarted) {
        console.log("Server started ! " + chalk.green('✓'));
        if (tunnelStarted) {
            console.log("Tunnel initialised " + chalk.green('✓'));
        }
        console.log("\n" + chalk.bold('Access URLs:') + divider + "\nLocalhost: " + chalk.magenta("http://" + host + ":" + port) + "\n      LAN: " + (chalk.magenta("http://" + ip.address() + ":" + port) +
            (tunnelStarted
                ? "\n    Proxy: " + chalk.magenta(tunnelStarted)
                : '')) + divider + "\n" + chalk.blue("Press " + chalk.italic('CTRL-C') + " to stop") + "\n    ");
    },
};
exports.default = logger;
//# sourceMappingURL=logger.js.map