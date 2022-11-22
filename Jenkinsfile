pipeline {
    agent any

    environment{
        AWS_CRED        = 'AWS_sortlog' //Change to yours
        AWS_REGION      = 'ap-southeast-2'// AWS region 
    }
        //Install denpendencies 
    stages{
        stage ('Docker Agent Build Test') {
            when {branch 'uat'}
            agent {
                docker {
                    image 'node:16-alpine'
                }
            }

            steps {
                script {
                    echo "Testing...."
                    sh "yarn install && yarn pre-commit"
                }
            }
        }

        stage('Docker Agent Terraform Build Frontend Infrastructure') {
            agent {
                docker {
                    image 'hashicorp/terraform:light'
                    args '-i --entrypoint='
                }
            }

            steps {
                withAWS(credentials: AWS_CRED, region: AWS_REGION) {
                      script {
                        if (currentBuild.result != null && currentBuild.result != "SUCCESS"){
                            return false
                        }
                        sh '''
                            export APP_ENV="uat"
                            terraform init -input=false
                            terraform workspace select ${APP_ENV} || terraform workspace new ${APP_ENV}
                            terraform apply \
                                -var="app_env=${APP_ENV}"\
                                --auto-approve
                        '''
                      }
                }
            }
        }

        stage('Docker Agent Sync S3'){
            when {
                anyOf{
                        branch 'main';
                        branch 'uat'
                }
            }  

            agent {
                dockerfile {
                    filename 'Dockerfile-Sortlog-Env'
                    additionalBuildArgs  '--build-arg JENKINSUID=`id -u jenkins` --build-arg JENKINSGID=`id -g jenkins` --build-arg DOCKERGID=`stat -c %g /var/run/docker.sock`'
                    args '-v /var/run/docker.sock:/var/run/docker.sock -u jenkins:docker'
                }
            }  

            steps {
                withAWS(credentials: AWS_CRED, region: AWS_REGION) {
                    script {
                        if (currentBuild.result != null && currentBuild.result != "SUCCESS"){
                            return false
                        }
                        
                        S3_BUCKET_NAME = sh(returnStdout: true, script: " terraform output name").trim()
                        CLOUDFRONT_DISTRIBUTION_ID = sh(returnStdout: true, script: "terraform output arn").trim()
                        CLOUDFRONT_DOMAIN_NAME = sh(returnStdout: true, script: "terraform output domain").trim()
                    }

                    dir('./out'){
                        echo "deploying to S3 "
                        sh "aws s3 sync . s3://${S3_BUCKET_NAME}"
                        sh "aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths '/*'"
                        script{
                            while(currentBuild.result != "SUCCESS"){
                                
                            }
                        }
                        sh "aws cloudfront get-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --id ${id from create-validation}"
                    }
                    
                }
            }
        }
    }    
}
