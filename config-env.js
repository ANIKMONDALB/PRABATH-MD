
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.SESSION_ID, PRABATH-MD~fFUyjTpJ#Cx8gmkE1Rwhl-KaGLVj0ez0A6G7Onwcjlnjj05UisbE   
    BOT_NUMBER:  process.env.BOT_NUMBER,918617340627
    GITHUB_USERNAME: username,ANIKMONDALB
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN,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
};
