# Building up from JavaScript to TypeScript to C# 10 and .NET 6

![JS vs TS vs CS](./js-ts-csharp.png)

This repository is meant to highlight some of the various functional techniques available in C#.

These techniques ultimately mean that there is quite a bit of syntactic congruence with JavaScript and TypeScript; in fact, I first noticed that C# and JavaScript starting to converge around the release of .NET 3.0.

For many developers that are ready to extend from JavaScript and TypeScript on the backend to a more secure, performant, and robust backend runtime, C# on .NET is a natural extension as it has a clear lineage with JavaScript and TypeScript while providing many benefits including easy mutli-threading, language integrated query (LINQ), and many other features.

If you'd like to learn more about C#'s functional features, check out:

- [Lambda Expressions](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)
- [Local Functions](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/local-functions)
- [Pattern Matching](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/pattern-matching)
- [Discards](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/discards)
- [Desconstructing](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/deconstruct)
- [var and Implicit Typing](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/var)
- [Object Initializers](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/how-to-initialize-objects-by-using-an-object-initializer)
- [Array Initializers](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/single-dimensional-arrays)

## Running the JavaScript Sample

To run the JavaScript sample:

```
cd js
node sample.js
```

## Running the TypeScript Sample

To run the TypeScript sample:

```
cd ts
tsc
node sample.js
```

## Running the C# Sample

To run the C# sample:

```
cd cs
dotnet run
```