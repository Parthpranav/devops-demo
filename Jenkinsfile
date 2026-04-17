pipeline {
  agent any
  stages {
    stage('Hello') {
      steps {
        echo 'Hello Parth 🚀'
      }
    }
  }
}
pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        echo 'Code cloned'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t devops-demo .'
      }
    }

    stage('Run Container') {
      steps {
        sh 'docker run -d -p 3000:3000 devops-demo'
      }
    }
  }
}
