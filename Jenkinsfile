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
            docker build -t super .
        }
    }
    stage('run container'){
        steps{
            docker run --name duper -p 7575:5173 -d superstar
        }
    }
}
}