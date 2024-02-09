import { ApplicationCommandType } from "discord.js";
import { Command } from "@/discord/base";

new Command({
    name: "ping",
    description: "Ping command",
    dmPermission: false,
    type: ApplicationCommandType.ChatInput,
    async run(interaction){ // ChatInputCommandInteraction

        interaction.reply({ content: "pong" });
    }
    
});