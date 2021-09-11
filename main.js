require('dotenv').config()
const { Telegraf } = require('telegraf')
const { Markup } = require('telegraf')
const { bot } = require('./bot')


// bot.start((ctx) => ctx.reply('Welcome'))


bot.start((ctx) => {
    // let priceMassage = `  Salom hurmatli talaba, Sizga 4-kurs dars jadvali kerakmi? Unda quyidagicha kiriting 04.10 yoki 13.10 Siz 4-oktabr yoki 13-oktabr dars jadvali kunini belgiladiz! Agar sizga to'liq jadval kerak bo'lsa pastdagi tugmani bosing`;

    ctx.replyWithHTML(`<i><pre>Salom hurmatli talaba</pre></i>  <b><u>${ctx.from.first_name}</u></b>, @jadval_GKK_bot ya'ni <b>Dars_Jadvali_GKK_4-kurs</b> botiga <b>Xush kelibsiz!</b> <pre> Sizga 4-kurs dars jadvali kerakmi? Unda quyidagicha kiriting:</pre> <b><u>04.10</u></b> <pre>yoki</pre> <b><u>13.10</u></b> <pre> Ya'ni siz 4-oktabr yoki 13-oktabr dars jadvali kunini belgiladiz!\nAgar sizga</pre> <b>to'liq jadval</b> <pre>yoki</pre> <b>haftalik jadval</b> <pre>kerak bo'lsa pastdagi tugmalardan birini bosing</pre>👇`,{
        reply_markup: {
            inline_keyboard: [
                [
                    { text: `To'liq jadval`, callback_data: 'one'},
                    { text: `1-oktabrdan 7-oktabrgacha`, callback_data: 'two'},
                ],
                [
                    { text: `8-oktabrdan 13-oktabrgacha`, callback_data: 'three'},
                    { text: `15-oktabrdan 20-oktabrgacha`, callback_data: 'four'},
                ],
                [
                    { text: `21-oktabrdan 26-oktabrgacha`, callback_data: 'five'},
                    { text: `28-oktabrdan 30-oktabrgacha`, callback_data: 'six'},
                ]
            ]
        }
    })

    // bot.telegram.sendMessage(ctx.chat.id, ctx.from.first_name + priceMassage,
    //     {
    //         reply_markup: {
    //             inline_keyboard: [
    //                 [{ text: `To'liq jadval`, callback_data: 'one'}]
    //             ]
    //         }
    //     })
})


bot.action('one', ctx => {
    // ctx.deleteMessage();
    ctx.replyWithDocument({source: "media/jadval.pdf"})
})

bot.action('two', ctx => {
    // ctx.deleteMessage();
    ctx.replyWithDocument({source: "media/1-hafta.jpg"})
})

bot.action('three', ctx => {
    // ctx.deleteMessage();
    ctx.replyWithDocument({source: "media/2-hafta.xlsx"})
})

bot.action('four', ctx => {
    // ctx.deleteMessage();
    ctx.replyWithDocument({source: "media/1-hafta.jpg"})
})

bot.action('five', ctx => {
    // ctx.deleteMessage();
    ctx.replyWithDocument({source: "media/1-hafta.jpg"})
})

bot.action('six', ctx => {
    // ctx.deleteMessage();
    ctx.replyWithDocument({source: "media/1-hafta.jpg"})
})


function sendStarMessage(ctx) {
    ctx.replyWithDocument({source: "media/jadval.pdf"})
}

function sendStarMessage1(ctx) {
    ctx.replyWithDocument({source: "media/dush.jpg"})
}

function sendStarMessage2(ctx) {
    ctx.replyWithDocument({source: "media/1-hafta.jpg"})
}

function sendStarMessage3(ctx) {
    ctx.replyWithDocument({source: "media/dush.jpg"})
}

function sendStarMessage4(ctx) {
    ctx.replyWithDocument({source: "media/dush.jpg"})
}

bot.on("photo", ctx => {
    ctx.reply('Iltimos rasm tashlamang')
})

bot.on("video", ctx => {
    ctx.reply('Iltimos video tashlamang')
})

bot.on("document", ctx => {
    ctx.reply('Iltimos fayl tashlamang')
})

bot.on("message", async ctx => {
    const msg = ctx.message.text.toLowerCase()

    if (msg.includes(`01.10`)) {
        return sendStarMessage1(ctx);
    }
    
    else if (msg.includes(`jadv`)) {
        return sendStarMessage(ctx);
    }
    
    else if (msg.includes(`02.10`)) {
        return sendStarMessage2(ctx);
    }

    else if (msg.includes(`03.10`)) {
        return sendStarMessage3(ctx);
    }

    else if (msg.includes(`04.10`)) {
        return sendStarMessage4(ctx);
    }

    else {ctx.reply(`Bu haqida ma'lumot topilmadi.\nIltimos qaytadan yozib ko'ring! Masalan: 05.10`)}
})