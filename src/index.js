//IMPORTAR REACT Siempre
import React from 'react';

//IMPORTAR REACT-DOM Siempre
import ReactDOM from 'react-dom';

// IMPORTAR estilos css desde el mismo JS
import './index.css';

// Esto arranca nuestra aplicación
import App from './App';

//Simula datos de manera local, Las aplicaciones web dependen mucho de la conección del servidos ya que la aplicación web no posee datos, el servidor es quien tiene los datos y la aplicación web solo se encarga de pintarlos
//LOGRA QUE LA APP PUEDA SEGUIR FUNCIONANDO SIN CONECCIÓN A INTERNET
import registerServiceWorker from './registerServiceWorker';

//REACT.DOM es la biblioteca de react enfocada al navegador
//El método RENDER pinta la interfase en pantalla
// Lo que va a renderizar es la aplicacion que escribí osea APP
// Después le decimos en dónde vamos a pintar APP, en este caso con document.getElementById(root) indicamos dónde lo llamaremos
ReactDOM.render(<App cat={5} txt="this is the prop value"/>, document.getElementById('root'));

//Aquí empezamos a usar el REGISTER SERVICE WORKER
registerServiceWorker();
