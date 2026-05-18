pipeline {

    agent any

    stages {

        stage('Clean Workspace') {
            steps {

                cleanWs()

                bat 'if exist allure-results rmdir /s /q allure-results'
                bat 'if exist allure-report rmdir /s /q allure-report'
                bat 'if exist test-results rmdir /s /q test-results'
                bat 'if exist playwright-report rmdir /s /q playwright-report'
            }
        }

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

            allure([
                includeProperties: false,
                results: [[path: 'allure-results']]
            ])
        }
    }
}