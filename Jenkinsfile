pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

    }

    post {

        always {
            echo 'Pipeline completed'

            // If you are using Allure
            allure([
                includeProperties: false,
                results: [[path: 'allure-results']]
            ])
        }
    }
}