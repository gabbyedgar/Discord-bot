const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("vote")
    .setDescription("Get information on how to vote!"),
  async execute(interaction) {
    await interaction.reply("To Vote follow the following stepw:!");
  },
};
