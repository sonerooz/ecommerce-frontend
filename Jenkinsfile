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
                            
                            // Dockerfile içeriğini tek satırda güvenli şekilde oluşturuyoruz
                            def dockerfileContent = """
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# Next.js statik çıktıları genellikle .next içinde ama static export ise out klasöründedir.
# Önce .next deniyoruz, eğer yoksa out klasörüne bakarız.
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
""".trim()

                            writeFile file: 'Dockerfile.temp', text: dockerfileContent
                            
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