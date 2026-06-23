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
                sh '''
                    docker stop myContacts-backend myContacts-frontend myContacts-db || true
                    docker rm myContacts-backend myContacts-frontend myContacts-db || true
                '''
                sh "docker network create mycontacts-net || true"
                sh """
                    docker run -d \
                      --name myContacts-db \
                      --network mycontacts-net \
                      -e MONGO_INITDB_ROOT_USERNAME=admin \
                      -e MONGO_INITDB_ROOT_PASSWORD=password \
                      -v mongo-data:/data/db \
                      mongo:latest
                """
                sh """
                    docker run -d \
                      --name myContacts-backend \
                      --network mycontacts-net \
                      -p 3000:3000 \
                      -e MONGO_URL=mongodb://admin:password@myContacts-db:27017/mycontacts?authSource=admin \
                      mouuuuuu/mycontacts-back:latest
                """
                sh """
                    docker run -d \
                      --name myContacts-frontend \
                      --network mycontacts-net \
                      -p 5173:5173 \
                      mouuuuuu/mycontacts-front:latest
                """
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
