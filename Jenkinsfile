pipeline {
    agent any

    stages {
        stage('🏗️ Build & Deploy All Apps') {
            steps {
                script {
                    def apps = [
                        ['name': 'frontend-main',  'path': 'deniz-tasarim-fe',     'port': '3000'],
                        ['name': 'frontend-admin', 'path': 'deniz-tasarim-admin',  'port': '3001'],
                        ['name': 'frontend-seller', 'path': 'deniz-tasarim-seller', 'port': '3002']
                    ]

                    // API URL'ini burada tanımlayalım (İstersen Jenkins Environment Variable'dan da çekebilirsin)
                    def apiUrl = "http://46.224.218.122:8090"

                    apps.each { app ->
                        dir(app.path) {
                            echo "🚀 Deploying ${app.name}..."
                            
                            // 1. DEĞİŞİKLİK: Dockerfile içine ARG ve ENV satırlarını ekliyoruz
                            // Dikkat: Groovy string içinde $ işareti değişken sandığı için \$ ile escape ediyoruz.
                            def dockerfileContent = """
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Build argümanını al
ARG NEXT_PUBLIC_API_URL
# Bunu ortam değişkenine çevir (Next.js build sırasında bunu görecek)
ENV NEXT_PUBLIC_API_URL=\$NEXT_PUBLIC_API_URL

# Next.js build alırken artık yukarıdaki URL'i kullanacak
RUN npx next build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
""".trim()

                            writeFile file: 'Dockerfile.temp', text: dockerfileContent
                            
                            // 2. DEĞİŞİKLİK: docker build komutuna --build-arg ekliyoruz
                            sh "docker build --build-arg NEXT_PUBLIC_API_URL='${apiUrl}' -t ${app.name} -f Dockerfile.temp ."
                            
                            sh "docker stop ${app.name}-container || true"
                            sh "docker rm ${app.name}-container || true"
                            sh "docker run -d --name ${app.name}-container --network ecommerce-net -p ${app.port}:80 ${app.name}"
                        }
                    }
                }
            }
        }
    }
}