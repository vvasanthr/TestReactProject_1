pipeline{
    agent any

environment{
        account_id = '375209111341'
        region = 'eu-north-1'
        repository_name = 'vvasanthr/testreactproject'
}
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
        aws ecr get-login-password --region region | \
        docker login --username AWS --password-stdin account_id.dkr.ecr.region.amazonaws.com
        docker tag super:latest account_id.dkr.ecr.region.amazonaws.com/repository_name
        docker push account_id.dkr.ecr.region.amazonaws.com/repository_name:latest
        '''
    }
}

/*     stage('delete container'){
        steps{
            sh 'docker rm -f duper'
        }
  } */
/*    stage('run container'){
        steps{
            sh 'docker run --name duper -p 7575:5173 -d super'
        }
    }   */
}
}