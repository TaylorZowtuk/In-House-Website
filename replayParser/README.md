# Overview

C# endpoint that parses a league replay file and returns JSON metadata response

# Prereqs

1. Dotnet SDK - https://dotnet.microsoft.com/en-us/download/dotnet/8.0

# Steps to Run

1. `dotnet run` (inside replayParser folder). Also runs `dotnet build` behind the scenes.

# Steps to Build

1. `dotnet build`

# Swagger

- http://\<host\>:\<port\>/swagger/index.html

# Help

1. `dotnet help`
2. `dotnet new --list`
3. `dotnet new <thing> -h`

### (potentially) Know Issues

1. Rofxd library is .NET v6. This might cause issues if our endpoint is running v8
