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

        bot.sendMessage(chatid,"Select Your Startup Name to Initiate your Startup",{

            reply_markup:{
                inline_keyboard: [
                    [{ text: "NeuraNext", callback_data: "Nueral_data"}],
                    [{ text: "Cogniflow AI ", callback_data: "Cogniflow_data"}],
                    [{ text: "SynthMind ", callback_data: "SythMind_data"}],
                    [{ text: "QuantumPulse", callback_data: "QuantumPulse_data"}],
                    [{ text: "VisionaryAI ", callback_data: "Visionary_data"}],
                ]
            }
        })


        bot.on("callback_query", async (callbackQuery) => {
            const chatid = await callbackQuery.message.chat.id;
            const neudat = callbackQuery.data;

            // console.log(chatid,"Received callback data:", neudat);


        if(neudat == 'Neural_data'){
            bot.sendMessage(chatid,"Your Startup Name is NeuraNext")
        }
        }) 
   

   

        


    }else if(data == 'industry_web'){
        bot.sendMessage(chatid,"You have selected Web Development as your Startup")
    }else if(data == 'industry_mern'){
        bot.sendMessage(chatid,"You have selected MERN Stack as your Startup")
    }
})
 












// bot.on("Hello Code tycoon Bot", async (msg) => {
//     const chatid = msg.chat.id;

//     bot.sendMessage(chatid,"Hello Welcome to Code Tycoon Bot")
// })



