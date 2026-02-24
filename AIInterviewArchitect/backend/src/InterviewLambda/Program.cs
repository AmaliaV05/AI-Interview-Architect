using Amazon.Lambda.Serialization.SystemTextJson;

var builder = WebApplication.CreateSlimBuilder(args);

builder.Services.ConfigureHttpJsonOptions(options =>
{
    options.SerializerOptions.TypeInfoResolverChain.Insert(0, AppJsonSerializerContext.Default);
});

builder.Services.AddAWSLambdaHosting(
    LambdaEventSource.HttpApi, 
    new SourceGeneratorLambdaJsonSerializer<AppJsonSerializerContext>()
);

var app = builder.Build();

app.MapGet("/", () => "API is active");

app.Run();
