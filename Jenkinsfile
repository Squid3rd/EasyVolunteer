pipeline {
    agent any

    environment {
        REMOTE_HOST     = 'darklmoon@34.143.164.27'
        SSH_CREDENTIALS = 'ssh_volunteer'
        IMAGES_AND_CONTAINERS = [
            ['nontapatsquid/fastapi-webhook:latest', 'container1'],
            ['nontapatsquid/phpmyadmin:latest', 'volunteer_phpmyadmin'],
            ['nontapatsquid/easyvoluteer_volunteer_website:latest', 'volunteer_website'],
            ['nontapatsquid/mysql:latest', 'volunteer_mysql']
        ]
    }

    stages {
        stage('Pull and Run Containers') {
            steps {
                sshagent([SSH_CREDENTIALS]) {
                    script {
                        for (entry in IMAGES_AND_CONTAINERS) {
                            def image = entry[0]
                            def container = entry[1]

                            sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker pull $image'"
                            sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker run -d --name $container $image'"
                        }
                        sh "ssh -o StrictHostKeyChecking=no $REMOTE_HOST 'docker ps -a'"
                    }
                }
            }
        }
    }
}
