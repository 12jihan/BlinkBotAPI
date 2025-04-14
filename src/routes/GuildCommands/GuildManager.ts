import { RequestData, REST, Routes } from "discord.js";
import express, { Router } from "express";

const msg_obj = (msg: string): RequestData => {
  return {
    body:
    {
      content: msg
    }
  }
};

export function guildRoutes(rest: REST): Router {
  const router = express.Router();

  router.get("/message", async (req, res, next) => {
    try {
      const disc_msg = await rest.post(Routes.channelMessages("1275160714780082209"), {
        body:
        {
          content: "hi"
        }
      });
      console.log(disc_msg);
      res.send({
        message: "success",
        data: "hi"
      });
      next();
    } catch (err) {
      console.error(err);
    }

  });

  router.post("/", (req, res, next) => {
    res.send("posted");
    next();
  });

  router.delete("/", (req, res, next) => {
    res.send("deleted");
    next();
  });

  return router;
}


export default guildRoutes;
