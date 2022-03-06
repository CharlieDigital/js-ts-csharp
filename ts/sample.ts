


// * TypeScript
class Person {
  constructor(
    public name: string,
    public age: number,
    public nickname?: string
  ) { }

  async notify(): Promise<string> {
    // * Exception Handling
    try {
      var msg = `Happy ${this.age}th b-day!`;
      return await Promise.resolve(msg);
    }
    catch (ex) { throw ex; }
    finally { }
  }

  invite(
    fn: (friend: string) => void,
    friends: string[]
  ): void {
    for (var friend of friends) {
      fn(friend);
    }
  }
}

class App {
  async run(): Promise<void> {
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

      var inner = (): string => {
        trace();
        console.log("Inner");
        return "Hello from inner()";
      }

      inner();

      var local = (msg: string) =>
        console.log(msg);
      
      local("Local!");
    }

    outer();
  }
}

var app = new App();
(async () => await app.run())();