pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = credentials('dockerhub')
    }

    stages {
        stage('Start Jenkins') {
            steps {
                sh 'echo Start Jenkins............'
                sh 'echo docker : user = $DOCKER_CREDENTIALS_USR : password = $DOCKER_CREDENTIALS_PSW'
            }
        }

        stage('Build Docker Images with Compose') {
            steps {
                dir('./') {
                    sh 'echo "Running in $(pwd)"'
                    sh 'docker-compose build'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    sh 'echo $DOCKER_CREDENTIALS_PSW | docker login --username $DOCKER_CREDENTIALS_USR --password-stdin'
                    
                    // Match the service names from docker-compose.yamls
                    sh 'docker-compose push nontapatsquid/volunteer_website:lastest'
                    sh 'docker-compose push nontapatsquid/volunteer_mysql:lastest'
                    sh 'docker-compose push nontapatsquid/volunteer_phpmyadmin:lastest'
                }
            }
        }

        stage('Clear Docker Components') {
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker system prune -af'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose pull'
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
