pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'jest'
            }
        }
        stage('Build') {
            steps {
                sh './build.sh'
            }
        }
        stage('Deploy') {
            steps {
            sh
            }
        }
    }
}