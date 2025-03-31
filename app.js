const TelegramBot = require('node-telegram-bot-api')
const tgfancy = require('tgfancy')

const token = '7816999186:AAE2z2V_KXMI1RcTOnpYXItr_ylvMc-kpes'

 
const bot = new tgfancy(token, {
    polling: true,
    tgfancy:{
        feature: true,
        cancellation: true,

    }

    


})

bot.onText(/\/start/,async (msg, match) => {
    const chatid = msg.chat.id;

    bot.sendMessage(chatid, '🚀 Welcome to Code Tycoon  Made By Sachin Mehta – The Ultimate Startup Simulation! \n\n💼Are you ready to become the next tech tycoon \n Just Select your Industry run your Startup!',{
        reply_markup: {
            inline_keyboard: [
              [{ text: "AI", callback_data: "industry_ai" }],
              [{ text: "Web Development", callback_data:"industry_web"}],
              [{ text: "MERN Stack" , callback_data: "industry_mern"}]

               

            ]
           
        }
    })
})


bot.on("callback_query", async (callback_query) => {
    const chatid = await callback_query.message.chat.id;
    const data = callback_query.data;


    if(data == 'industry_ai'){
        bot.sendMessage(chatid,"You have selected AI as your Startup")

        const AInames = [
            'NeuraNext',
            'Cogniflow AI',
            'SynthMind',
            'QuantumPulse',
            'VisionaryAI'
        ]

        const randomname = AInames[Math.floor(Math.random() * AInames.length)]

        bot.sendMessage(chatid,`You AI Startup's Name is  **${randomname}**`)

        bot.sendMessage(chatid,`${randomname} Select Your Funding Source to KickStart your Journey`,{
            reply_markup:{
                inline_keyboard: [
                    [{ text: `  BootStrapped | Capital $35K | Equity Loss 0% | Risk Level Low  ` , callback_data: "callback_boot" }],
                    [{ text: `  Angel Investor | Capital $150K | Equity Loss 15% | Risk Level Medium  ` , callback_data: "callback_angel"  }],
                    [{ text: `  Venture Capital | Capital $700K | Equity Loss 40% | Risk Level High  ` , callback_data: "callback_venture"  }],
                ]
            }
        })
    }
    

  
    
    else if(data == 'industry_web'){
        bot.sendMessage(chatid,"You have selected Web Development as your Startup But The Web Development is Still in Development")
    }else if(data == 'industry_mern'){
        bot.sendMessage(chatid,"You have selected MERN Stack as your Startup But The MERN Stack is Still in Development")
    }
})




bot.on("callback_query",async (callbackQuery) => {
    const chatid = callbackQuery.message.chat.id;
    const funddata = callbackQuery.data;
    

    if(funddata == 'callback_boot'){
        bot.sendMessage(chatid,`🎉 Congratulations! You’ve secured $35K in Bootstrapped Funding! \n \n💡 With 0% equity loss, you have full control over your startup’s vision \n \n  Strategize wisely, invest in growth, and build your path to success!`)
    }else if(funddata == 'callback_angel'){
        bot.sendMessage(chatid,`🎉 Great Move! You’ve secured $150K from an Angel Investor! 💰🚀 \n \n 
🔄 In exchange, you’ve given up 15% equity, but with the right strategy, this capital can fuel your startup’s growth. \n\n Use your funding wisely to expand, innovate, and gain market traction while keeping your investor happy!`)
    }else if(funddata == 'callback_venture'){
        bot.sendMessage(chatid,`💰 Massive Investment Secured! You’ve landed $700K in Venture Capital funding! 🚀 \n\n 🔥 High risk, high reward! In return, you've given up 40% equity, meaning investors now have a big say in your startup's direction. \n\n Scale aggressively, dominate the market, and make strategic moves to turn this investment into a game-changing success!`)
    }else{
        bot.sendMessage("Wrong Options")
    }
})







 












// bot.on("Hello Code tycoon Bot", async (msg) => {
//     const chatid = msg.chat.id;

//     bot.sendMessage(chatid,"Hello Welcome to Code Tycoon Bot")
// })



