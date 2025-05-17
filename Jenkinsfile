pipeline {
  agent any

  environment {
    NODE_ENV = 'test'
  }

  tools {
    nodejs 'NodeJS_18' // Asegúrate de que esta versión esté instalada en Jenkins (puedes cambiarla)
  }

  options {
    timestamps()
    skipDefaultCheckout(false)
  }

  stages {

    stage('Checkout código') {
      steps {
        checkout scm
      }
    }

    stage('Instalar dependencias') {
      steps {
        echo 'Instalando dependencias con npm...'
        sh 'npm install'
      }
    }

    stage('Ejecutar pruebas') {
      steps {
        echo 'Ejecutando pruebas unitarias...'
        sh 'npm test'
      }
    }

    stage('Generar reporte de pruebas') {
      steps {
        echo 'Generando reporte de pruebas...'
        junit allowEmptyResults: true, testResults: '**/test-results/junit.xml'
      }
    }
  }

  post {
    always {
      echo 'Proceso finalizado.'
    }

    success {
      echo 'Build exitoso 🎉'
    }

    failure {
      echo 'Build fallido ❌'
    }
  }
}
