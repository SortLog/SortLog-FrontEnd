pipeline {
     agent any

    environment{
        CI ='true'
        AWS_CRED        = 'AWS_linazhao' //Change to yours
        AWS_REGION      = 'ap-southeast-2'// AWS region 
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
                withAWS(credentials: AWS_CRED, region: AWS_REGION)
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