#!/bin/sh

# Aguarda o banco ficar disponível
echo "⏳ Aguardando o banco de dados..."
until nc -z $DB_HOST $DB_PORT; do
  sleep 1
done

echo "✅ Banco de dados disponível!"

# Roda as migrations (uma única vez)
echo "🛠️ Rodando as migrations..."
npx sequelize-cli db:migrate

# Inicia o servidor
echo "🚀 Iniciando o servidor..."
npm start
