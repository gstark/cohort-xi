dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.1/publish

docker build -t coffee-ship-api-image ./bin/release/netcoreapp2.1/publish

docker tag coffee-ship-api-image  registry.heroku.com/coffee-ship-api/web

docker push registry.heroku.com/coffee-ship-api/web

heroku container:release web -a coffee-ship-api
