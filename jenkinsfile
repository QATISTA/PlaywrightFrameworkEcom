pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/QATISTA/PlaywrightFrameworkEcom.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}