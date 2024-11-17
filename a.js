console.log('a: Hi!')
globalThis.addEventListener('unload', () => {
  console.log('a: Bye!')
})

setTimeout(() => console.log('before goodbye'), 5000)
