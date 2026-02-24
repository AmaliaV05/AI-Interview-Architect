using System.Text.Json.Serialization;
using Amazon.Lambda.APIGatewayEvents;

[JsonSerializable(typeof(string))]
[JsonSerializable(typeof(APIGatewayHttpApiV2ProxyRequest))]
[JsonSerializable(typeof(APIGatewayHttpApiV2ProxyResponse))]

internal partial class AppJsonSerializerContext : JsonSerializerContext { }