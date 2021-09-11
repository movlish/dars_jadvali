require('dotenv').config()
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

// const url = process.env.APP_URL || 'https://git.heroku.com/shnq.git'

bot.launch().then()

module.exports ={
    bot
}