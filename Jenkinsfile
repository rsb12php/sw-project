pipeline {

    agent {
        docker { image 'node' }
    }

    environment {
        EMAIL_TO = 'sb.1296@gmail.com'
        SNYK_TOKEN = credentials('snyk-token')
    }

    stages {

         stage('Checkout') {
            steps {
                git branch: 'master',
                    credentialsId: 'suacredencial',
                    url: 'url do repositorio'
                sh "ls -lat"
                sh 'npm install -g @angular/cli@7'
            }
        }

        stage('Build') {
            steps {
                sh './build.sh'
            }
        }

        stage('Test') {
            steps {
                sh './test.sh'
                snykSecurity snykInstallation: 'snyk', snykTokenId:'snyk_integration'
            }
        }

        stage('Deploy') {
            steps {
                 withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'docker login --username $USERNAME --password $PASSWORD'
                }
                sh 'chmod +x ./deploy-docker.sh  && ./deploy-docker.sh'
            }
        }

    }
    
    post {

        always {
            archiveArtifacts artifacts: 'build/app1/**', fingerprint: true
        }

        failure {
            emailext body: 'Check console output at $BUILD_URL to view the results. \n\n 
                ${CHANGES} \n\n -------------------------------------------------- \n
                ${BUILD_LOG, maxLines=100, escapeHtml=false}', 
            to: "${EMAIL_TO}", 
            subject: 'Build failed Jenkins: $PROJECT_NAME - #$BUILD_NUMBER'
            updateGitlabCommitStatus name: 'build', state: 'failed'
        }
    
        success {
            updateGitlabCommitStatus name: 'build', state: 'success'
        }
    }
}