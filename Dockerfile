# 1. Aşama: İnşaat (Node.js)
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json .
# Bağımlılıkları yükle
RUN npm install
COPY . .
# Projeyi derle (build klasörü oluşturur)
RUN npm run build

# 2. Aşama: Sunum (Nginx)
FROM nginx:alpine
# React'in çıktısını Nginx'in yayın klasörüne kopyala
# NOT: Eğer Vite kullanıyorsan '/app/dist', Create-React-App ise '/app/build' olur.
# Standart React ise aşağıdaki gibidir:
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]