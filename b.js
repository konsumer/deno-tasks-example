console.log('b: Hi!')
globalThis.addEventListener('unload', () => {
  console.log('b: Bye!')
})

setTimeout(() => console.log('before goodbye'), 5000)
