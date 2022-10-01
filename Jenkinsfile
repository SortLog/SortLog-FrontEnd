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
        OwnerEmail      = 'linazhao881@gmail.com' //Change to yours
        S3BucketName    = 'statics3demo' //Change to yours, used to save cfn yml files larger than 50KB
        SecurityGroupID = 'sg-0212b4a25537026c9' //Change to your default VPC's default security group ID
        JenkinsServer   = 'http://20.188.28.15:8080/'   //Change to your JenkinsServer URL
        AWS_REGION      = 'ap-southeast-2'
        // VPCStackName    = 'VPCALBStack'
        // VPCTemplate     = 'vpc-alb-app-db.yaml'
        // EC2StackName    = 'LinuxMachineDeploy'
        // EC2Template     = 'LinuxMachineDeploy.yaml'
        // InstanceType    = 't2.micro'
        // InstanceCount   = 3
        // SecurityPorts   = '[22,443,3000,8080,9100]' //SSH, HTTPS, grafana, cadvisor, node-exporter line92 use it configure variable in the front

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

        stage('npm build')
        {
            steps{
             sh "npm  i --legacy-peer-deps"
            //  sh "npm run dev "
             sh "yarn export --legacy-peer-deps "
             sh 'ls -la ./'
             }
        } 
         stage('Build Docker image') {
            steps {
                sh 'docker build -t sampleresume .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 8000:8000 sampleresume'
            }
          }

        stage('create S3 bucket') {
            when {expression{return params.createS3bucket}}   
            steps {
                withAWS(credentials: AWS_CRED, region: 'ap-southeast-2')
             {
                dir('src') {
                    echo "deploy to S3 "
                    sh '''
                    aws s3 mb s3://$S3BucketName --region $AWS_REGION
                    '''}
             }

         }
         
         }

        stage('upload frontend to  S3 bucket') {
            when {expression{return params.deloytos3}} 
            steps {
                withAWS(credentials: AWS_CRED, region: 'ap-southeast-2')
             {
                dir('./build') {
                    echo "deploy to S3 "
                    sh '''
                    aws s3 cp index.html s3://$S3BucketName
                    '''}
             }
            }
         
         }

    }
}