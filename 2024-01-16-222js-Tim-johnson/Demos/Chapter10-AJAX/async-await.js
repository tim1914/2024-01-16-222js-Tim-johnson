function delayResolve() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await delayResolve();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();