// * JavaScript
class Person {
  constructor(name, age, nickname = null) {
    this.name = name;
    this.age = age;
    this.nickname = nickname
  }

  async notify() {
    // * Exception Handling
    try {
      var msg = `Happy ${this.age}th b-day!`;
      return Promise.resolve(msg);
    }
    catch (ex) { throw ex; }      
    finally { }
  }

  invite(
    fn,
    friends
  ) {
    for (var friend of friends) {
      fn(friend);
    }
  }
}

class App {
  async run() {
    var amy = new Person("Amy", 20);    
    // * Async/Await
    var message = await amy.notify();    
    console.log(`${message}: ${amy.name}`);
    // * Destructuring
    var { name, age } = amy;    
    // * Array initialization
    var friends = ["Anish", "Landry"];
    amy.invite(
      (f) => {
        console.log(`Invited ${f}`)
      },
      friends
    );

    function log() {
      console.log("Completed!");
    }

    log();

    // * Arrow style
    var trace = () => console.log("Done");
    trace();

    var thomas = new Person("Thomas", 36);    

    var outer = () => {
      var { name, age } = thomas;
      console.log(name);

      var inner = () => {
        trace();
        console.log("Inner");
        return "Hello from inner()";
      }

      inner();

      var local = (msg) =>
        console.log(msg);
      
      local("Local!");
    }

    outer();
  }
}

var app = new App();
(async () => await app.run())();