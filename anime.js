


const {
    VK
} = require('vk-io');
const vk = new VK();
const {
    MessageContext
} = require('vk-io');



vk.setOptions({
    token: '3b70004fb7acf7adf884325df5f16f5a786cee50de9f7f60138b4b2517bde39e91b125199f758a028e44d',
    pollingGroupId: 178999519
});

const {
    updates
} = vk;

updates.on('message', async (message, next) => {
    if(message.senderId<1) return; 
    if (message.isInbox) {


    }
    await next()
})

updates.hear(/^(?:данила)\s?(.*)?/i, async (message) => {
    if(!message.$match[1])  {message.send('Нет параметра');return}else{
    console.log(message);
    return message.send(`терпила`);
    }
});



vk.updates.start().catch(console.error);
