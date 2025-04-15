const TelegramBot = require('node-telegram-bot-api')
const tgfancy = require('tgfancy')
const { faker } = require('@faker-js/faker')




const bot = new tgfancy(token, {
    polling: true,
    tgfancy: {
        feature: true,
        cancellation: true,

    }




})

bot.onText(/\/start/, async (msg, match) => {
    const chatid = msg.chat.id;


    bot.sendMessage(chatid, '🚀 Welcome to Code Tycoon  Made By Sachin Mehta – The Ultimate Startup Simulation! \n\n💼Are you ready to become the next tech tycoon \n Just Select your Industry run your Startup!', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "AI", callback_data: "industry_ai" }],
                [{ text: "Web Development", callback_data: "industry_web" }],
                [{ text: "MERN Stack", callback_data: "industry_mern" }]



            ]

        }
    })
})


bot.on("callback_query", async (callback_query) => {
    const chatid = await callback_query.message.chat.id;
    const data = callback_query.data;




    if (data == 'industry_ai') {
        bot.sendMessage(chatid, "You have selected AI as your Startup")

        const AInames = [
            'NeuraNext',
            'Cogniflow AI',
            'SynthMind',
            'QuantumPulse',
            'VisionaryAI'
        ]

        const randomname = AInames[Math.floor(Math.random() * AInames.length)]

        bot.sendMessage(chatid, `You AI Startup's Name is  **${randomname}**`)

        bot.sendMessage(chatid, `${randomname} Select Your Funding Source to KickStart your Journey`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: `  BootStrapped | Capital $35K | Equity Loss 0% | Risk Level Low  `, callback_data: "callback_boot" }],
                    [{ text: `  Angel Investor | Capital $150K | Equity Loss 15% | Risk Level Medium  `, callback_data: "callback_angel" }],
                    [{ text: `  Venture Capital | Capital $700K | Equity Loss 40% | Risk Level High  `, callback_data: "callback_venture" }],
                ]
            }
        })
    }




    else if (data == 'industry_web') {
        bot.sendMessage(chatid, "You have selected Web Development as your Startup But The Web Development is Still in Development")
    } else if (data == 'industry_mern') {
        bot.sendMessage(chatid, "You have selected MERN Stack as your Startup But The MERN Stack is Still in Development")
    }
})




bot.on("callback_query", async (callbackQuery) => {
    const chatid = callbackQuery.message.chat.id;
    const funddata = callbackQuery.data;
    
    const messageid = callbackQuery.message.message_id;

    await bot.deleteMessage(chatid,messageid)


    if (funddata == 'callback_boot') {
        const capital = {}

        const capital2 = capital[chatid] = 35000;


        bot.sendMessage(chatid, `🎉 Congrtulations! You’ve secured $35K in Bootstrapped Funding! \n \n💡 With 0% equity loss, you have full control over your startup’s vision \n \n  Strategize wisely, invest in growth, and build your path to success!`)

        bot.sendMessage(chatid, `Before you start developing your AI product, it's essential to hire the right team. Choose your team and get ready to bring your product to life!`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Hire an AI Developer - $15K", callback_data: "callback_dev" }],
                    [{ text: "Hire a Data Scientist - $12K", callback_data: "callback_sci" }],
                    [{ text: "Hire an AI Designer - $8K", callback_data: "callback_design" }],
                    [{ text: "Hire a Marketing Specialist - $6K", callback_data: "callback_special" }],
                    [{ text: "Hire a Product Manager  - $10K", callback_data: "callback_manager" }],
                    [{ text: "Hire a Business Strategist - $5K", callback_data: "callback_stategy" }]
                ]
            }
        })

    } else if (funddata == 'callback_angel') {
        bot.sendMessage(chatid, `🎉 Great Move! You’ve secured $150K from an Angel Investor! 💰🚀 \n \n 
🔄 In exchange, you’ve given up 15% equity, but with the right strategy, this capital can fuel your startup’s growth. \n\n Use your funding wisely to expand, innovate, and gain market traction while keeping your investor happy!`)
    } else if (funddata == 'callback_venture') {
        bot.sendMessage(chatid, `💰 Massive Investment Secured! You’ve landed $700K in Venture Capital funding! 🚀 \n\n 🔥 High risk, high reward! In return, you've given up 40% equity, meaning investors now have a big say in your startup's direction. \n\n Scale aggressively, dominate the market, and make strategic moves to turn this investment into a game-changing success!`)
    } else {
        bot.sendMessage("Wrong Options")
    }





})


bot.on("callback_query", async (callbackQuery) => {
    const chatid = callbackQuery.message.chat.id;
    const teamdata = callbackQuery.data;


    const capital2 = teamdata.data;




    if (teamdata == 'callback_dev') {


        bot.sendMessage(chatid, "You've successfully hired an AI Developer for your product development—an excellent decision! Now, it's time to move forward and start building your AI product.")
        bot.sendMessage(chatid, "Your Remaining Capital After Hiring AI developer is $20K Use it wisely New Features Are in development")


    } else if (teamdata == 'callback_sci') {



        bot.sendMessage(chatid, "You've successfully hired an Data Scientist for your product development—an excellent decision! Now, it's time to move forward and start building your AI product.")
        bot.sendMessage(chatid, "Your Remaining Capital After Hiring Data Scientist is $23K Use it wisely New Features Are in development")
    } else if (teamdata == 'callback_design') { 


        bot.sendMessage(chatid, "You've successfully hired an AI Designer for your product development—an excellent decision! Now, it's time to move forward and start building your AI product.")
        bot.sendMessage(chatid, "Your Remaining Capital After Hiring Data Scientist is $27K Use it wisely New Features Are in development")
    } else if (teamdata == 'callback_special') {


        bot.sendMessage(chatid, "You've successfully hired an Marketing Specialist for your product development—an excellent decision! Now, it's time to move forward and start building your AI product.")
        bot.sendMessage(chatid, "Your Remaining Capital After Hiring Data Scientist is $29K Use it wisely New Features Are in development")
    } else if (teamdata == 'callback_manager') {


        bot.sendMessage(chatid, "You've successfully hired an Product Manager for your product development—an excellent decision! Now, it's time to move forward and start building your AI product.")
        bot.sendMessage(chatid, "Your Remaining Capital After Hiring Data Scientist is $25K Use it wisely New Features Are in development")
    } else if (teamdata == 'callback_stategy') {


        bot.sendMessage(chatid, "You've successfully hired an Business Strategist for your product development—an excellent decision! Now, it's time to move forward and start building your AI product.")
        bot.sendMessage(chatid, "Your Remaining Capital After Hiring Data Scientist is $30K Use it wisely New Features Are in development")
    }

})



// bot.on("callback_query", async (callbackQuery) => {
//     const chatid = callbackQuery.message.chat.id;
//     const hirestartdata  = callbackQuery.data;


 

//     const ai = [
//        " AI Chatbot",
//        " AI Voice Assistant",
//         "AI Virtual Agent",
//        " AI Customer Support Bot",
//        "AI Image Generator",
//        "AI Art Creator",
//        "AI Video Enhancer",
//        "AI Face Animator",
//        "AI Code Assistant",
//        "AI Bug Fixer",
//       " AI Code Generator",
//        "AI DevOps Automator",
//        "AI Content Generator",
//        "AI Blog Writer",
//        "AI Grammar Checker",
//        "AI Summarizer",
//        "AI Task Automator",

// "AI Document Scanner",

// "AI Email Assistant",

// "AI Workflow Optimizer",

// "AI Ad Copywriter",

// "AI SEO Optimizer",

// "AI Social Media Planner",

// "AI Growth Hacker",

// "AI Stock Predictor",

// "AI Investment Advisor",

// "AI Crypto Bot",

// "AI Risk Analyzer",
// "AI Disease Predictor",

// "AI Medical Assistant",

// "AI Mental Health Chatbot",

// "AI Diet & Fitness Coach",

// "AI Tutoring Assistant",

// "AI Language Translator",

// "AI Exam Helper",

// "AI Knowledge Engine",


// "AI Fraud Detector",

// "AI Password Manager",

// "AI Phishing Blocker",

// "AI Threat Scanner",
//     ]
    

    

//     bot.sendMessage(chatid, `Select Your Product Name to Start your Developement with your Team`, {
//         reply_markup: {
//             inline_keyboard: [
//                 [{ text:  faker.helpers.arrayElement(ai) , callback_data: "callback_ainame" }],
//                 [{ text: "Get a New Name" , callback_data: "callback_randomname" }]
//             ]
//         }
//     })
// })


// bot.on("callback_query", async (callbackQuery) => {
//     const chatid = callbackQuery.message.chat.id;

//     const ai = callbackQuery.data;

//     if(ai == 'callback_ainame'){
//         bot.sendMessage(chatid,"Currently this feature in development phase stary curious to know Callback_ainame for remember or testing!")
//     }else if(ai == 'callback_randomname'){
//         bot.sendMessage(chatid,"Currently this feature in development phase stary curious to know randomname for remember or testing!!")
//     }
// })








// bot.on("Hello Code tycoon Bot", async (msg) => {
//     const chatid = msg.chat.id;

//     bot.sendMessage(chatid,"Hello Welcome to Code Tycoon Bot")
// })



