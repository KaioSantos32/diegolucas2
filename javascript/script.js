// Typewriter
const instance = new Typewriter('#typewriter', {
  loop: true,
  delay: 50,
});

instance.typeString('Web Developer')
  .pauseFor(1000)
  .deleteAll(10)
  .typeString('Writer')
  .pauseFor(1000)
  .deleteAll(10)
  .start();