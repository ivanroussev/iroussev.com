pipeline {
    agent {
        kubernetes {
            yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: docker
    image: docker:24.0.7
    command:
    - cat
    tty: true
    volumeMounts:
      - name: docker-sock
        mountPath: /var/run/docker.sock
  volumes:
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
        type: Socket
'''
        }
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/IvanRoussev/iroussev.com.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                container('docker') {
                    dir('frontend') {
                        sh "docker build -t iroussevcom/site:${env.BUILD_ID} ."
                    }
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                container('docker') {
                    script {
                        sh '''
                            echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                            docker push iroussevcom/site:${BUILD_ID}
                            docker tag iroussevcom/site:${BUILD_ID} iroussevcom/site:latest
                            docker push iroussevcom/site:latest
                        '''
                    }
                }
            }
        }
    }
}