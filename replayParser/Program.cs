using Fraxiinus.Rofl.Extract.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// TODO: generalize to take a file instead of a filepath which forces the 
// endpoint to run on the same server as the frontend
app.MapPost("/parseReplay", async (string filepath) => {
    return Results.Ok(await ParseReplay(filepath));
});

app.MapPost("/parseReplays", async (IFormFileCollection files) => {
    throw new NotImplementedException("Method under construction 🐱‍🐉");
});

async Task<Fraxiinus.Rofl.Extract.Data.Models.ROFL> ParseReplay(string filepath) {
    Fraxiinus.Rofl.Extract.Data.Models.ROFL replay;
    replay = await RoflReader.LoadAsync(filepath, loadAll: false);

    return replay;
}

app.Run();
