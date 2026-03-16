pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'devops-frontend'
        DOCKER_CREDS_ID = 'dockerhub-credentials'
        DOCKER_HUB_USER = 'kavyaamrutha221'
        TAG = "${env.BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dir('my-frontend') {
                        echo "Building Docker Image..."
                        sh """
                        docker build -t ${DOCKER_HUB_USER}/${DOCKER_IMAGE}:${TAG} \
                                     -t ${DOCKER_HUB_USER}/${DOCKER_IMAGE}:latest .
                        """
                    }
                }
            }
        }

        stage('Test Docker Image') {
            steps {
                script {
                    dir('my-frontend') {
                        echo "Testing container..."

                        sh """
                        docker rm -f temp-test-${TAG} || true

                        docker run -d \
                        --name temp-test-${TAG} \
                        -p 8085:80 \
                        ${DOCKER_HUB_USER}/${DOCKER_IMAGE}:${TAG}

                        sleep 5
                        docker ps | grep temp-test-${TAG}
                        """
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {

                    withCredentials([usernamePassword(
                        credentialsId: env.DOCKER_CREDS_ID,
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )]) {

                        sh """
                        echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin

                        docker push ${DOCKER_HUB_USER}/${DOCKER_IMAGE}:${TAG}
                        docker push ${DOCKER_HUB_USER}/${DOCKER_IMAGE}:latest

                        docker logout
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning workspace"

            sh "docker rm -f temp-test-${TAG} || true"

            sh "docker rmi ${DOCKER_HUB_USER}/${DOCKER_IMAGE}:${TAG} || true"
            sh "docker rmi ${DOCKER_HUB_USER}/${DOCKER_IMAGE}:latest || true"

            cleanWs()
        }

        success {
            echo "Build and push successful"
        }

        failure {
            echo "Pipeline failed"
        }
    }
}