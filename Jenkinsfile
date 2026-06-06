pipeline {
    agent any

    stages {
        stage('Run Container') {
            steps {
                // Windows uses bat for command execution
                bat 'docker rm -f devops-demo || exit 0'
                bat 'docker run -d -p 3000:3000 --name devops-demo devops-demo'
            }
        }
    }
}
