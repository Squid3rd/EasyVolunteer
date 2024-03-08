pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yaml'
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

        stage('Pull Docker Images from Docker Hub') {
            steps {
                script {
                    def services = sh(script: "docker-compose -f $DOCKER_COMPOSE_FILE config --services", returnStdout: true).trim().split('\n')
                    services.each { service ->
                        sh "docker pull nontapatsquid/$service"
                    }
                }
            }
        }

        stage('Run Docker on Remote Server') {
            steps {
                sshagent([SSH_CREDENTIALS]) {
                    script {
                        def services = sh(script: "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker-compose -f $DOCKER_COMPOSE_FILE config --services'", returnStdout: true).trim().split('\n')
                        services.each { service ->
                            sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker pull nontapatsquid/$service'"
                            sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker-compose -f $DOCKER_COMPOSE_FILE up -d $service'"
                        }
                    }
                }
            }
        }
    }
}
