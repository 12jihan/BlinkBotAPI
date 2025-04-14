"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guildRoutes = guildRoutes;
const discord_js_1 = require("discord.js");
const express_1 = __importDefault(require("express"));
const msg_obj = (msg) => {
    return {
        body: {
            content: msg
        }
    };
};
function guildRoutes(rest) {
    const router = express_1.default.Router();
    router.get("/message", async (req, res, next) => {
        try {
            const disc_msg = await rest.post(discord_js_1.Routes.channelMessages("1275160714780082209"), msg_obj("test"));
            console.log(disc_msg);
            res.send({
                message: "success",
                data: "hi"
            });
            next();
        }
        catch (err) {
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
exports.default = guildRoutes;
