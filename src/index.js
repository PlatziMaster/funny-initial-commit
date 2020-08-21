const messages = [
  "in case of fire: git commit, git push and leave building",
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
  "the greats murmur as learning with this commit",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
  "naruto, The programmer ninja!",
  "The covid-19 block my commit",
  "On the Internet, nobody knows that you are a dog.",
  "When I wrote this code only me and God knew why we did it, now only God knows",
  "¿Quién es el General Failure y por qué está leyendo mi disco duro?",
  "Memory is like an orgasm - it's so much better when you don't have to fake it.",
  "Keep it simple: as simple as possible, but no more.",
  "Real programmers don't document. If it was difficult to write, it must be difficult to understand.",
  "The reason God was able to create the universe in six days is that he didn't have to worry about making it backward compatible.",
  "Hardware is what you can kick. Software is what you can only insult.",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};