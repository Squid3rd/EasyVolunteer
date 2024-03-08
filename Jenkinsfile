pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
        DOCKER_IMAGE        = 'nontapatsquid/fastapi-webhook:latest'
        REMOTE_HOST         = 'darklmoon@34.143.164.27'
        SSH_CREDENTIALS     = 'ssh_volunteer'
    }

    stages {
        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USER')]) {
                    sh 'echo $DOCKERHUB_PASSWORD | docker login --username $DOCKERHUB_USER --password-stdin'
                }
            }
        }

        stage('Deploy with Docker Compose on Remote Server') {
            steps {
                sshagent([SSH_CREDENTIALS]) {
                    script {
                        sh "scp -o StrictHostKeyChecking=no $DOCKER_COMPOSE_FILE $REMOTE_HOST:~/docker-compose.yml"
                        sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker-compose -f ~/docker-compose.yml pull'"
                        sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker-compose -f ~/docker-compose.yml up -d'"
                    }
                }
            }
        }
    }
}
