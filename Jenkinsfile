pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Task: Build and package the Node.js application'
                echo 'Tool: npm'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Task: Run unit and integration tests'
                echo 'Tool: Jest'
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Task: Analyse the source code for coding standards'
                echo 'Tool: ESLint'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Task: Scan the application for known vulnerabilities'
                echo 'Tool: npm audit'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Task: Deploy the application to the staging server'
                echo 'Tool: AWS EC2'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Task: Run integration tests on the staging environment'
                echo 'Tool: Jest'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Task: Deploy the application to the production server'
                echo 'Tool: AWS EC2'
            }
        }
    }
}
