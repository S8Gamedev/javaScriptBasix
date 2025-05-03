const user = {
    name: "Alice",
    greetDelayed: function() {
    setTimeout(function() {
        console.log(`Hello, ${this.name}!`);
    }, 
    1000);
     }
    };

user.greetDelay