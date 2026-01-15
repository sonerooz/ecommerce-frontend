# 1. Node.js sürümünü 18'den 20'ye yükselttik (Next.js 14+ için şart)
FROM node:20-alpine

# 2. Çalışma klasörünü ayarla
WORKDIR /app

# 3. Bağımlılık dosyalarını kopyala
COPY package*.json ./

# 4. Bağımlılıkları yükle
RUN npm install

# 5. Projenin geri kalanını kopyala
COPY . .

# 6. BUILD AL (Next.js için kritik adım)
# Burası .env.local dosyasındaki API adresini içine gömer.
RUN npm run build

# 7. Portu dışarı aç
EXPOSE 3000

# 8. Uygulamayı başlat
CMD ["npm", "start"]