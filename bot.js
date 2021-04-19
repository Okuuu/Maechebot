"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const discord_akairo_1 = require("discord-akairo");
const env_1 = require("./env");
class Client extends discord_akairo_1.AkairoClient {
    // public io: Socket;
    constructor() {
        super();
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: __dirname + "/src/commands",
            prefix: "!",
            loadFilter(file) {
                return file.endsWith(".js");
            },
        });
        this.inhibitorHandler = new discord_akairo_1.InhibitorHandler(this, {
            directory: __dirname + "/src/inhibitors",
        });
        this.commandHandler.loadAll();
        this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
        this.inhibitorHandler.loadAll();
        // require("dotenv").config();
        // this.io = require("socket.io-client").connect("http://localhost:3000", {
        //   reconnection: true,
        //   reconnectionDelay: 2000,
        //   reconnectionDelayMax: 5000,
        //   reconnectionAttempts: Infinity,
        // });
        // this.io.on("custom event", (msg: any) => {
        //   console.log(msg);
        // });
    }
}
exports.Client = Client;
(async () => {
    try {
        console.log(env_1.environment.token);
        await new Client().login(env_1.environment.token);
        console.log("bot awake");
    }
    catch (e) {
        console.error(e);
    }
})();
