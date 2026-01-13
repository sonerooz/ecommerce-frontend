pipeline {
    agent any

    stages {
        stage('🏗️ Build & Deploy') {
            steps {
                // Docker imajını oluştur
                sh 'docker build -t frontend-app .'
                
                // Eski konteynır varsa temizle
                sh 'docker stop frontend-container || true'
                sh 'docker rm frontend-container || true'
                
                // 3000 portundan yayına al (Dışarı:3000 -> İçeri:80)
                sh 'docker run -d --name frontend-container --network ecommerce-net -p 3000:80 frontend-app'
            }
        }
    }
}