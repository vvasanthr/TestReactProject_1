pipeline{
    agent any

stages{
    stage('git clone'){
        steps{
            git branch:'main', url:'https://github.com/vvasanthr/TestReactProject_11.git'
        }
    }
    stage('show code'){
        steps{
            sh 'ls'
        }
    }
    stage('build docker image'){
        steps{
            sh 'docker build -t super .'
        }
    }
     stage('delete container'){
        steps{
            sh 'docker rm -f duper'
        }
    }
    stage('run container'){
        steps{
            sh 'docker run --name duper -p 7575:5173 -d super'
        }
    }
}
}