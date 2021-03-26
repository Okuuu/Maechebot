import { AkairoClient, CommandHandler, InhibitorHandler } from "discord-akairo";
// import { Socket } from "socket.io-client";
declare module "discord-akairo" {
  interface AkairoClient {
    commandHandler: CommandHandler;
    inhibitorHandler: InhibitorHandler;
    // io: Socket;
  }
}

export class Client extends AkairoClient {
  commandHandler: CommandHandler;
  readonly inhibitorHandler: InhibitorHandler;
  // public io: Socket;
  constructor() {
    super();
    this.commandHandler = new CommandHandler(this, {
      directory: __dirname + "/commands",
      prefix: "!",
      loadFilter(file) {
        return file.endsWith(".js");
      },
    });
    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: __dirname + "/inhibitors",
    });
    this.commandHandler.loadAll();
    this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
    this.inhibitorHandler.loadAll();
    require("dotenv").config();
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
(async () => {
  try {
    await new Client().login(process.env.bot_token);
    console.log("bot awake");
  } catch (e) {
    console.error(e);
  }
})();