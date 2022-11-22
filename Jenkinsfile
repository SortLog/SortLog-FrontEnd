pipeline {
    agent any

    environment{
        CI ='true'
        AWS_CRED        = 'AWS_sortlog' //Change to yours
        AWS_REGION      = 'ap-southeast-2'// AWS region 
    }
        //Install denpendencies 
    stages{
        stage('Install dependency')
        {
            steps{
             echo "Installing packages"
             sh 'yarn install'
             }          
        }

        stage('yarn build') 
        {
            steps{
             sh "yarn export "
             sh 'ls -la ./out'
             }
        } 

        stage('TF Launch for Production'){
        when {branch 'main'}    
                steps {
                    withAWS(credentials: AWS_CRED, region: AWS_REGION) {
                   
                    
                        sh '''
                            export APP_ENV="uat-f"
                            terraform init -input=false
                            terraform workspace select ${APP_ENV} || terraform workspace new ${APP_ENV}
                            terraform destroy \
                               -var="app_env=${APP_ENV}"\
                               --auto-approve
                        '''
                         script {
                                S3_BUCKET_NAME = sh(returnStdout: true, script: " terraform output name").trim()
                                CLOUDFRONT_DISTRIBUTION_ID = sh(returnStdout: true, script: "terraform output arn").trim()
                                CLOUDFRONT_DOMAIN_NAME = sh(returnStdout: true, script: "terraform output domain").trim()
                                }                 
                    }
                }
        }

        stage('upload  to  S3 bucket production') {
        when {branch 'main'}   
            steps {
                withAWS(credentials: AWS_CRED, region: AWS_REGION)
               { dir('./out') 
                {
                    echo "deploy to S3 "
                    sh "aws s3 sync . s3://${S3_BUCKET_NAME}"
                    // sh "aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths '/*'"
             }
            }
         
         }

         }
        stage('TF Launch for UAT'){
        when {branch 'uat'}    
                steps {
                    withAWS(credentials: AWS_CRED, region: AWS_REGION) {
                   
                    
                        sh '''
                            export APP_ENV="uat-f"
                            terraform init -input=false
                            terraform workspace select ${APP_ENV} || terraform workspace new ${APP_ENV}
                            terraform destroy \
                               -var="app_env=${APP_ENV}"\
                               --auto-approve
                        '''
                         script {
                                S3_BUCKET_NAME = sh(returnStdout: true, script: " terraform output name").trim()
                                CLOUDFRONT_DISTRIBUTION_ID = sh(returnStdout: true, script: "terraform output arn").trim()
                                CLOUDFRONT_DOMAIN_NAME = sh(returnStdout: true, script: "terraform output domain").trim()
                                }                 
                    }
                }
        }

        stage('upload  to  S3 bucket UAT') {
        when {branch 'uat'}   
            steps {
                withAWS(credentials: AWS_CRED, region: AWS_REGION)
               { dir('./out') 
                {
                    echo "deploy to S3 "
                    sh "aws s3 sync . s3://${S3_BUCKET_NAME}"
                    // sh "aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths '/*'"
             }
            }
         
         }

         }
    }}
