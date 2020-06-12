#!/bin/bash

versao=0.0.1

if ! [ -x "$(command -v docker)" ]; then
  echo 'Error: docker não está instalado.' >&2
  exit 1
fi

echo "<============ Iniciando o build da versão $versao ==============>"
docker build -t url_repositorio:${versao} .
echo "<============ Iniciando o build da última versão ==============>"
docker build -t url_repositorio .
echo "<============ Enviando imagem na versão $versao para o repositorio ==============>"
docker push url_repositorio:${$versao}
echo "<============ Enviando imagem na última versão para o repositorio ==============>"
docker push url_repositorio
echo "<============ Deploy Finalizado ==============>"