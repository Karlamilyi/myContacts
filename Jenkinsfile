pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        BACK_IMAGE = "mouuuuuu/mycontacts-back"
        FRONT_IMAGE = "mouuuuuu/mycontacts-front"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Karlamilyi/myContacts'
            }
        }

        stage('Build Images') {
            steps {
                sh "docker build -t ${BACK_IMAGE}:${BUILD_NUMBER} -t ${BACK_IMAGE}:latest ./back"
                sh "docker build -t ${FRONT_IMAGE}:${BUILD_NUMBER} -t ${FRONT_IMAGE}:latest ./front"
            }
        }

        stage('Push Images') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                sh "docker push ${BACK_IMAGE}:latest"
                sh "docker push ${BACK_IMAGE}:${BUILD_NUMBER}"
                sh "docker push ${FRONT_IMAGE}:latest"
                sh "docker push ${FRONT_IMAGE}:${BUILD_NUMBER}"
            }
        }

        stage('Deploy') {
            steps {
                sh "docker compose -f ~/repos/myContacts/docker-compose.yaml --env-file ~/repos/myContacts/.env down"
                sh "docker compose -f ~/repos/myContacts/docker-compose.yaml --env-file ~/repos/myContacts/.env up -d"
            }
        }
    }

    post {
        success {
            echo "Déployé — back:${BUILD_NUMBER} / front:${BUILD_NUMBER}"
        }
        failure {
            echo 'Pipeline échoué.'
        }
    }
}
