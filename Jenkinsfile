pipeline {
    agent any

    environment {
        REMOTE_HOST     = 'darklmoon@34.143.164.27'
        SSH_CREDENTIALS = 'ssh_volunteer'
    }

    stages {
        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USER')]) {
                    sh 'echo $DOCKERHUB_PASSWORD | docker login --username $DOCKERHUB_USER --password-stdin'
                }
            }
        }

        stage('Run Docker on Remote Server') {
            steps {
                sshagent([SSH_CREDENTIALS]) {
                    script {
                        sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker-compose -f docker-compose.yml pull volunteer_website mysql phpmyadmin'"
                        sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker-compose -f docker-compose.yml up -d'"
                    }
                }
            }
        }
    }
}
