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

                    // API URL
                    def apiUrl = "http://46.224.218.122:8090"

                    apps.each { app ->
                        // İlgili klasöre giriyoruz (Örn: deniz-tasarim-admin)
                        dir(app.path) {
                            echo "🚀 Deploying ${app.name}..."
                            
                            // --- DÜZELTME BURADA ---
                            // Şu an alt klasördeyiz. Bir üst dizindeki (workspace root) 
                            // nginx.conf'u buraya kopyalıyoruz.
                            sh "cp ../nginx.conf ."
                            // -----------------------

                            def dockerfileContent = """
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=\$NEXT_PUBLIC_API_URL

RUN npx next build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

# Dockerfile ile aynı dizine kopyaladığımız nginx.conf'u içeri alıyoruz
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
""".trim()

                            writeFile file: 'Dockerfile.temp', text: dockerfileContent
                            
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