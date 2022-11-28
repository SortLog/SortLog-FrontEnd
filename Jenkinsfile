eepipeline {
     agent any

    environment{
         
        AWS_CRED        = 'AWS_sortlog' //Change to yours AWS credentials
        AWS_REGION      = 'ap-southeast-2'
    }
        
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

        stage('upload frontend to  S3 bucket') {
            steps {
                withAWS(credentials: AWS_CRED, region: AWS_REGION)
               { dir('./out') 
                {
                    echo "deploy to S3 "
                    sh '''
                    aws s3 sync . s3://sortlog-frontend
                    '''}
             }
            }
         
         }

    }
}
