pipeline {
    agent any

    tools {
        nodejs 'Node 20'  // Este nombre debe coincidir con el NodeJS configurado en Jenkins
    }

    environment {
        NODE_OPTIONS = '--experimental-vm-modules'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }
    }

    post {
        always {
            echo 'Build finished'
        }
        success {
            echo 'Tests passed!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
