pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
        REMOTE_HOST         = 'nontapatsquid@34.143.164.27'
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

        stage('Remote Docker Compose') {
            steps {
                sshagent([SSH_CREDENTIALS]) {
                    sh "scp $DOCKER_COMPOSE_FILE $REMOTE_HOST:/path/to/remote/directory/"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker-compose -f /path/to/remote/directory/$DOCKER_COMPOSE_FILE pull'"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker-compose -f /path/to/remote/directory/$DOCKER_COMPOSE_FILE up -d'"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker ps -a'"
                }
            }
        }
    }
}
