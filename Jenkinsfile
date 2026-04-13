pipeline {
    agent any

    environment {
        account_id = '375209111341'
        region = 'eu-north-1'
        repository_name = 'vvasanthr/testreactproject'
    }

    stages {

        stage('Clone App Code') {
            steps {
                dir('app') {
                    git branch: 'main', url: 'https://github.com/vvasanthr/TestReactProject_1.git'
                }
            }
        }

        stage('Show Code') {
            steps {
                dir('app') {
                    sh 'ls'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('app') {
                    sh 'docker build -t super .'
                }
            }
        }

        stage('Push to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $region | \
                docker login --username AWS --password-stdin $account_id.dkr.ecr.$region.amazonaws.com

                docker tag super:latest $account_id.dkr.ecr.$region.amazonaws.com/$repository_name:latest

                docker push $account_id.dkr.ecr.$region.amazonaws.com/$repository_name:latest
                '''
            }
        }

        stage('Clone Terraform Code') {
            steps {
                dir('terraform') {
                    git branch: 'main', url: 'https://github.com/vvasanthr/terraform-project.git'
                }
            }
        }

        stage('Terraform Init') {
            steps {
                dir('terraform') {
                    sh 'terraform init'
                }
            }
        }

        stage('Terraform Validate') {
            steps {
                dir('terraform') {
                    sh 'terraform validate'
                }
            }
        }

        stage('Terraform Plan') {
            steps {
                dir('terraform') {
                    sh 'terraform plan'
                }
            }
        }

        stage('Terraform Apply') {
            steps {
                dir('terraform') {
                    sh 'terraform apply -auto-approve'
                }
            }
        }
    }

    post {
        success {
            echo 'EC2 Instance Created Successfully!'
        }
        failure {
            echo 'Pipeline Failed!!'
        }
    }
}