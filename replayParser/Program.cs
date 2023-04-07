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

app.MapPost("/parseReplay", async (IFormFile file) => {
    return Results.Ok(await ParseReplay(file));
});

app.MapPost("/parseReplays", async (IFormFileCollection files) => {

    throw new NotImplementedException("Method under construction 🐱‍🐉");

    List<Fraxiinus.Rofl.Extract.Data.Models.ROFL> results = new();

    foreach(var file in files)
    {
        var result = await ParseReplay(file);
        results.Add(result);
    }

    return Results.Ok(results);
});

async Task<Fraxiinus.Rofl.Extract.Data.Models.ROFL> ParseReplay(IFormFile file) {

    Fraxiinus.Rofl.Extract.Data.Models.ROFL replay;

    var filePath = Path.GetTempFileName();
    using (var stream = new FileStream(filePath, FileMode.Create))
    {
        await file.CopyToAsync(stream);
    }

    replay = await RoflReader.LoadAsync(filePath, loadAll: false);

    return replay;
}

app.Run();
