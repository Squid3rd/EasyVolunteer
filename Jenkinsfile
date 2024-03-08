pipeline {
    agent any

    environment {
        // It's good practice to keep sensitive or specific data like Docker images, remote hosts, and credentials out of the script for security and flexibility.
        DOCKER_IMAGE    = 'nontapatsquid/fastapi-webhook:latest' // Ensure this Docker image name is correct and accessible.
        REMOTE_HOST     = 'darklmoon@34.143.164.27' // Replace with your actual username and remote IP.d
        SSH_CREDENTIALS = 'ssh_volunteer' // Use the ID of the Jenkins stored SSH credentials Test-00.s-sssxsf
    }

    stages {
        stage('Login to Docker Hub') {
            steps {
                // This step logs into Docker Hub using credentials stored in Jenkins.
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USER')]) {
                    sh 'echo $DOCKERHUB_PASSWORD | docker login --username $DOCKERHUB_USER --password-stdin'
                }
            }
        }

        stage('Run Docker on Remote Server') {
            steps {
                // Uses the SSH Agent plugin to setup SSH credentials.
                sshagent([SSH_CREDENTIALS]) {
                    // These commands manage Docker containers on the remote server.
                    // It stops and removes all containers, then removes all images, before running a new container.
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker ps -q | xargs -r docker stop'"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker ps -a -q | xargs -r docker rm'"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker images -q | xargs -r docker rmi -f'"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker pull $DOCKER_IMAGE'"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker run -d --name easyvoluteer_volunteer_website -p 3000:80 $DOCKER_IMAGE'"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker run -d --name mysql -p 3306:80 $DOCKER_IMAGE'"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker run -d --name phpmyadmin -p 8081:80 $DOCKER_IMAGE'"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker run -d --name fastapi-webhook -p 8085:80 $DOCKER_IMAGE'"
                    sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker ps -a'"
                }
            }
        }
    }
}
