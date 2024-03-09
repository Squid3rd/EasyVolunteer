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
                    
                    // Match the service names from docker-compose.yamสlsssshpj
                    sh 'docker-compose push volunteer_website'
                    sh 'docker-compose push mysql'
                    sh 'docker-compose push phpmyadmin'
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
                    // sh 'docker-compose up'
                    sh 'docker run -d --name volunteer_website -p 3000:3000 nontapatsquid/volunteer_website:latest'
                    sh 'docker run -d --name myphpadmin -p 8082:80 nontapatsquid/phpmyadmin:latest'
                    sh 'docker run -d --name mysql -p 3306:3306 nontapatsquid/mysql:latest'
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
