stage('Run Container') {
  steps {
    sh 'docker rm -f devops-demo || true'
    sh 'docker run -d -p 3000:3000 devops-demo'
  }
}
