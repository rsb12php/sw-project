set versao=0.0.1

echo "<============ Iniciando o build da versao %versao% ==============>"
docker build -t url_repositorio:%versao% .
echo "<============ Iniciando o build da ultima versao ==============>"
docker build -t url_repositorio .
echo "<============ Build Finalizado ==============>"