pipeline {
    agent {

        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Setup') {
            steps {
                sh 'npm i'
            }
        }
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
                sh './stop.sh'
                sh './start.sh'
            }
        }
    }
}