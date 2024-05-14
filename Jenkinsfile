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
        stage('Clone') {
          steps {
            git 'https://github.com/luisdlpr/CunkyBot/git'
          }
        }
        stage('Install dependencies') {
          steps {
            sh 'npm install'
          }
        }
        stage('Lint and Test') {
          steps {
            sh 'npm run lint'
            sh 'npm run test'
          }
        }
        stage('Stage') {
            steps {
                setBuildStatus("Compiling", "compile", "pending");
                script {
                    try {
                        // do the build here
                        setBuildStatus("Build complete", "compile", "success");
                    } catch (err) {
                        setBuildStatus("Failed", "pl-compile", "failure");
                        throw err
                    }
                }
            }
        }
    }
}
