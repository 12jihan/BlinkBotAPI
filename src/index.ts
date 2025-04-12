import express, { Response, Request } from "express";
import { RequestData, REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import dotenv from "dotenv";

import GuildCommands from "./routes/GuildCommands/GuildManager";

dotenv.config();


const app = express();
const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN!);


const msg_obj = (msg: string): RequestData => {
  return {
    body:
    {
      content: msg
    }
  }
};

app.use("/guild", GuildCommands);

app.get('/test', async (req: Request, res: Response) => {
  try {
    const disc_msg = await rest.post(Routes.channelMessages("1275160714780082209"), msg_obj("test"));
    console.log(disc_msg);

  } catch (err) {
    console.error(err);
  }
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000/");
});


