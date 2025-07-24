# Usa imagem oficial do Node
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install -g sequelize-cli

# Instala as dependências do projeto
RUN apt-get update && apt-get install -y netcat-openbsd

# Copia o restante do código
COPY . .

# Expõe a porta que o app vai usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["sh", "./start.sh"]
