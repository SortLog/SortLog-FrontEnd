pipeline {
     agent any

     parameters {
        booleanParam defaultValue: false, name: 'createS3bucket'
        booleanParam defaultValue: false, name: 'deloytos3'
    }
    // tools {nodejs "nodejs"}

    environment{
        CI ='true'
        AWS_CRED        = 'AWS_linazhao' //Change to yours
        AWS_REGION      = 'ap-southeast-2'
    }
        //Install denpendencies 
    stages{
        stage('Install dependency')
        {
            steps{
             echo "Installing packages"
             sh 'npm install --force'
             }
             
        }

        stage('yarn build') 
        {
            steps{
             sh "yarn export "
             sh 'ls -la ./out'
             }
        } 

        stage('upload frontend to  S3 bucket') {
            steps {
                withAWS(credentials: AWS_CRED, region: 'ap-southeast-2')
             
               { dir('./out') 
                {
                    echo "deploy to S3 "
                    sh '''
                    aws s3 sync . s3://statics3demo
                    '''}
             }
            }
         
         }

    }
}