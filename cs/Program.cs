var app = new App();
await app.Run();

// * CSharp
record Person (
  string Name,
  int Age,
  string? Nickname = null
) {

  public async Task<string> Notify() {
    // * Exception Handling
    try {
      var msg = $"Happy {this.Age}th b-day!";
      return await Task.FromResult(msg);
    }
    catch (Exception) { throw; }
    finally { }
  }

  public void Invite(
    Action<string> fn,
    string[] friends
  ) {
    foreach (var friend in friends) {
      fn(friend);
    }
  }
}


class App {
  public async Task Run() {
    var amy = new Person("Amy", 20);
    // * Async/Await
    var message = await amy.Notify();
    Console.WriteLine($"{message}: {amy.Age}");
    // * Destructuring
    var (name, age, _) = amy;
    // * Array initialization
    var friends = new[] { "Anish", "Landry" };
    amy.Invite(
      (f) => {
        Console.WriteLine($"Invited {f}");
      },
      friends
    );

    void log() {
      Console.WriteLine("Completed!");
    }

    log();

    // * Arrow style
    void trace() => Console.WriteLine("Done");
    trace();

    var thomas = new Person("Thomas", 36);

    var outer = () => {
      var ( name, age, _ ) = thomas;
      Console.WriteLine(name);

      var inner = string () => {
        trace();
        Console.WriteLine("Inner");
        return "Hello from inner()";
      };

      inner();

      var local = (string msg) =>
        Console.WriteLine(msg);

      local("Local!");
    };

    outer();
  }
}
