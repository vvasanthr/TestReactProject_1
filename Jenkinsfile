pipeline{
    agent any

stages{
    stage('git clone'){
        steps{
            git branch:'main', url:'https://github.com/vvasanthr/TestReactProject_1.git'
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
    stage('Push to ECR') {
    steps {
        sh '''
        aws ecr get-login-password --region eu-north-1 | \
        docker login --username AWS --password-stdin 375209111341.dkr.ecr.eu-north-1.amazonaws.com
        docker tag super:latest 375209111341.dkr.ecr.eu-north-1.amazonaws.com/vvasanthr/testreactproject
        docker push 375209111341.dkr.ecr.eu-north-1.amazonaws.com/vvasanthr/testreactproject:latest
        '''
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