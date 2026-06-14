pipeline {
    agent any
    stages {
        stage("git clone"){
            steps{
                git branch: 'main', 
                credentialsId: 'github-creds', 
                url: 'https://github.com/shaliniche-code/notes_app.git'
            }
        }
        stage("listing the files"){
            steps{
                sh 'ls'
            }
        }
        stage("build image"){
    steps{
        sh 'docker rm -f notesapplatest || true'
        sh 'docker build -t notesapplatest .'
    }
}
        stage("deploy"){
            steps{
                sh ''' 
                docker container prune -f
                docker stop notesappcontainerv1 || true
                docker rm notesappcontainerv1 || true
                docker run -d --name notesappcontainerv1 -p 3000:3000 notesapplatest
                '''
            }
        }
    }
    
    
}
