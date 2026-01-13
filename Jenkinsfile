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

                    apps.each { app ->
                        dir(app.path) {
                            echo "🚀 Deploying ${app.name}..."
                            // Her klasör için geçici bir Dockerfile oluşturup siliyoruz
                            // Jenkinsfile içindeki Dockerfile.temp oluşturan kısmı şununla değiştir:
                            sh """
                            echo 'FROM node:20-alpine as builder
                            WORKDIR /app
                            COPY package.json ./
                            RUN npm install
                            COPY . .
                            RUN npm run build

                            FROM nginx:alpine
                            # Next.js statik çıktıları genellikle .next veya out klasöründedir. 
                            # Garanti olması için build sonrası oluşan dosyaları Nginx'e taşıyoruz.
                            COPY --from=builder /app/.next /usr/share/nginx/html
                            EXPOSE 80
                            CMD ["nginx", "-g", "daemon off;"]' > Dockerfile.temp
                            """
                            
                            sh "docker build -t ${app.name} -f Dockerfile.temp ."
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