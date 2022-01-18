#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Source/CleanArch.Client.Core/CleanArch.Client.Core.csproj", "Source/CleanArch.Client.Core/"]
COPY ["Source/CleanArch.Client.Infrastructure/CleanArch.Client.Infrastructure.csproj", "Source/CleanArch.Client.Infrastructure/"]
COPY ["Source/CleanArch.Client.MVC/CleanArch.Client.MVC.csproj", "Source/CleanArch.Client.MVC/"]
RUN dotnet restore "Source/CleanArch.Client.MVC/CleanArch.Client.MVC.csproj"
COPY . .
WORKDIR "/src/Source/CleanArch.Client.MVC"
RUN dotnet build "CleanArch.Client.MVC.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CleanArch.Client.MVC.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CleanArch.Client.MVC.dll"]