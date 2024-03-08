pipeline {
    agent any

    environment {
        // Define variablesggdsss
        // DOCKER_IMAGE       = 'nontapatsquid/fastapi-webhook:latest'
        DOCKER_IMAGE1    = 'nontapatsquid/easyvoluteer_volunteer_website:latest' 
        DOCKER_IMAGE2    = 'nontapatsquid/mysql:latest' 
        DOCKER_IMAGE3    = 'nontapatsquid/phpmyadmin:latest' 
        DOCKER_CREDENTIALS = credentials('dockerhub')
    }

    stages {
        stage('Start Jenkins') {
            steps {
                sh 'echo Start Jenkins............'
                sh 'echo docker : user = $DOCKER_CREDENTIALS_USR : password = $DOCKER_CREDENTIALS_PSW'
            }
        }

        stage('Build Docker Image with Compose') {
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
                    sh 'docker push $DOCKER_IMAGE1'
                    sh 'docker push $DOCKER_IMAGE2'
                    sh 'docker push $DOCKER_IMAGE3'
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
