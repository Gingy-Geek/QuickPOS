# mxpos_frontent
FrontEnd para multiplex stores interface de terminal Auto-Cobro

# McQuick
McQuick es una aplicación que permite a los clientes realizar pedidos en el restaurante, generar un ticket y realizar el pago sin la necesidad de la intervención de un cajero o empleado. La aplicación está diseñada para ofrecer una experiencia de autoservicio, permitiendo a los usuarios personalizar y modificar sus pedidos según sus preferencias.

## Descargar el Proyecto
Puedes descargar el proyecto de dos maneras: como archivo ZIP o clonándolo con Git.

### Clonar con Git
Para clonar el proyecto, utiliza el siguiente comando en la terminar con la direccion de la carpeta donde se guardará el proyecto:  
git clone https://github.com/rtitec/mxpos_frontent.git

### Descargar como ZIP
También puedes descargar el proyecto como un archivo ZIP. Haz clic en el botón "Code" en la parte superior derecha del repositorio y selecciona "Download ZIP". Descomprime el archivo descargado en tu máquina.  
Luego en la terminal, navegar a la carpeta donde guardaras el proyecto y ejecutar:  
git init  
y a continuacion:  
git remote add origin https://github.com/rtitec/mxpos_frontent   
Asi podes conectarte con el repositorio remoto de github y subir o bajar los cambios del proyecto.

### Abrir proyecto
Puedes abrir el proyecto usando la terminal, estando en la ruta del proyecto, ejecutar 'code .' (sin comillas)
Se abrira en el Visual Studio Code

## Configuración del Proyecto
###### Instalar Dependencias
Primero, en la terminal, navega al directorio del proyecto y cambia a la rama "master" con el siguiente comando:  
git checkout master  
Luego instala las dependencias con el siguiente comando:  
npm install  
(Antes de ejecutar la aplicación, asegúrate de tener Node.js instalado en tu máquina.)

## Ejecutar la Aplicación
Una vez instaladas las dependencias, puedes ejecutar la aplicación con el siguiente comando:  
npm start  
La aplicación estará disponible en http://localhost:3000.
