const {
    VK
} = require('vk-io');
const fs = require('fs')
let user = new VK();


user.setOptions({
//appId: 3140623,
//appSecret: `VeWdmVclDCtn6ihuP1nt`,
token: 'b9adfcfa23348371e4db0cd0b0b0fe7c2cbe58254be257e45ac9689584abc0fe0facc9883fa4ae32852a4',

});




  user.api.messages.send({message: 'Привет, это сообщение я отправил тебе через вк ио, прямо с твоего же сервера',peer_id: 527037117})





// const {
//     VK
// } = require('vk-io');
// const vk = new VK();
// const {
//     MessageContext
// } = require('vk-io');
//
//
//
// vk.setOptions({
//     token: '3b70004fb7acf7adf884325df5f16f5a786cee50de9f7f60138b4b2517bde39e91b125199f758a028e44d',
//     pollingGroupId: 178999519
// });
//
// const {
//     updates
// } = vk;
//
// updates.on('message', async (message, next) => {
//     if (message.isInbox) {
//
//
//     }
//     await next()
// })
//
// updates.hear(/^(?:данила)$/i, async (message) => {
//     console.log(await vk.api.users.get({'user_ids':1}))
//     return message.send(`терпила`);
//
// });
//
//
//
// vk.updates.start().catch(console.error);
