const messages = [
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
  "naruto, The programmer ninja!",
  "The covid-19 block my commit",
  "If you can imagine you can program"
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};