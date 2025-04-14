"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rest_1 = require("@discordjs/rest");
const dotenv_1 = __importDefault(require("dotenv"));
const GuildManager_1 = require("./routes/GuildCommands/GuildManager");
dotenv_1.default.config();
const app = (0, express_1.default)();
const rest = new rest_1.REST({ version: '10' }).setToken(process.env.BOT_TOKEN);
app.use("/guild", (0, GuildManager_1.guildRoutes)(rest));
// app.get('/test', async (req: Request, res: Response) => {
//   try {
//     const disc_msg = await rest.post(Routes.channelMessages("1275160714780082209"), msg_obj("test"));
//     console.log(disc_msg);
//
//   } catch (err) {
//     console.error(err);
//   }
// });
app.listen(3000, () => {
    console.log("listening on http://localhost:3000/");
});
