void setBuildStatus(String message, String context, String state) {
    withCredentials([string(credentialsId: '8a9dd268-c905-4077-90c9-0d1c1ce94358', variable: 'TOKEN')]) {
        sh """
            set -x
            curl \"https://api.github.com/repos/luisdlpr/CunkyBot/statuses/$GIT_COMMIT\" \
                -H \"Content-Type: application/json\" \
                -H \"Authorization: Bearer $TOKEN\" \
                -H \"X-GitHub-Api-Version: 2022-11-28\" \
                -X POST \
                -d \"{\\\"description\\\": \\\"$message\\\", \\\"state\\\": \\\"$state\\\", \\\"context\\\": \\\"$context\\\", \\\"target_url\\\": \\\"$BUILD_URL\\\"}\"
        """
    } 
}

pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Install dependencies') {
          steps {
            script {
              try {
                setBuildStatus("Installing", "install", "pending");
                sh 'npm install'
                setBuildStatus("Install Complete", "install", "success");
              } catch (err) {
                setBuildStatus("Failed", "install", "failure");
                throw err
              }
            }
          }
        }
        stage('Lint and Test') {
          steps {
            script {
              try {
                setBuildStatus("Linting and Testing", "quality", "pending");
                sh 'npm run lint'
                sh 'npm run test'
                setBuildStatus("Passed", "quality", "success");
              } catch (err) {
                setBuildStatus("Failed", "quality", "failure");
                throw err
              }
            }
          }
        }
        stage('Build and Deploy') {
          when {
            buildingTag()
          }
          steps {
            script {
              try {
                setBuildStatus("Building and Deploying", "deploy", "pending");
                  sh 'rm -rf ./dist'
                  sh 'npm run build'
                  sh 'npm run postbuild'
                  sh 'rm -rf /var/lib/jenkins/cunkybot/dist'
                  sh 'cp -r ./dist /var/lib/jenkins/cunkybot'
                  sh 'pm2 restart cunkybot'
                setBuildStatus("Passed", "deploy", "success");
              } catch (err) {
                setBuildStatus("Failed", "deploy", "failure");
                throw err
              }
            }
          }
        }
    }
}
