import express, { Response } from "express";
import { REST } from '@discordjs/rest';
import { Routes, Request } from 'discord-api-types/v10';
import dotenv from "dotenv";
import GuildCommands from "./routes/GuildCommands/GuildManager";

dotenv.config();


const app = express();
const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN!);


app.use("/guild", GuildCommands);

app.get('/test', async (req: Request) => {
  try {
    const disc_response = await rest.post(Routes.channelMessages("1275160714780082209"),
      {
        body: {
          content: "Hi"
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000/");
});
