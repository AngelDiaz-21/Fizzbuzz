# FIZZBUZZ

Este proyecto consiste en 3 partes, la primera parte tiene como objetivo refactorizar un código legado de acuerdo a los requerimientos, la segunda parte se basa en crear un API para usar la funcionalidad anterior y por último, la tercera parte en implementar un nuevo requerimiento que es básicamente crear un nuevo endpoint.

## Primera parte - Refactorización

La refactorización tiene el objetivo de mejorar el código, de modularizar y darle estructura a lo que tenemos, lo que permite que pueda leerse o interpretarse de la manera más fácil posile.

Para está práctica se utilizó un archivo tipo json (se puede encontrar en el proyecto como explorers.json) que contiene a modo de ejemplo una lista de participantes en Launch X (nombre del curso), a partir de la lista se realizó lo siguiente:

* Se obtuvo la lista de explorers que solo estén en node.
* Se obtuvo la cantidad de explorers que están en node.
* Se obtuvo la lista de usuarios de github de los explorers que están en node.
* De acuerdo a la propiedad score del explorer o participante se hará una validación llamada FizzBuzz.

**¿En que consiste la validación FizzBuzz?**
Si el participante tiene un score que sea divisible entre 3 y el modulo o también conocido como residuo es 0 deberá tener un campo trick que diga FIZZ, si tiene un score divisible entre 5 y el modulo es 0 al campo trick se le asignará el valor BUZZ, si tiene un score que sea divisible entre 3 y 5, y el modulo es 0 el campo trick tendrá el valor de FIZZBUZZ. En caso contrario, de no cumplir las validaciones anteriores al campo trick se le asignará el valor del score. Actualmente en el código legado las últimas 3 validaciones se corren independientemente. Se necesita una misma validación que apliqué las tres reglas a toda la lista.

**NOTA**
El proyecto se inicializo con npm, para lo cuál se ejecuto el siguiente comando:

```
npm init
```

### Refactorización

El script se modularizo en orientación a objetos para darle una mejor estructura.

Se crearon 3 archivos JavaScript:

* Reader.js: En este archivo se creó una clase llamada Reader y se necesito un método static para leer el archivo y obtener la información de los explorers.
* ExplorerService.js: En este archivo se creó una clase llamada FizzbuzzService y dentro se implementarón tres métodos static para obtener la lista de explorers que están en node, obtener la cantidad de explorers que estan en node y obtener la lista de usuarios de github de los explorers que están en node. En este service vamos a realizar todas las operaciones de filtrado y mapeo que se necesiten.
* FizzbuzzService.js: Se creó una clase llamada FizzbuzzService y dentro tendrá un método static para aplicar la validación sobre un explorer y agregarle el campo que se necesita.

#### Reader.js

Para el archivo Reader.js se realizó lo siguiente:

* Se creó el archivo y carpetas necesarias en **lib/utils/Reader.js**.
* Dentro del archivo se creó una clase llamada Reader.
* Se creó un método static llamado readJsonFile que recibe un path (el path del archivo a leer).
* Se guardo la lógica para leer el archivo y se regreso la información.

![Archivo Reader.js](./images/reader.png "Archivo Reader.js")

En la imagen se puede observar que en la primera línea se importa el módulo del filesystem. Dentro de la clase se tiene el método que recibe un parámetro, en este caso es el path el cual permite leer el archivo explorers.json
Por último, exportamos el archivo para que pueda ser utilizado en otras partes.

#### ExplorerService.js

Para el archivo ExplorerService.js se realizó lo siguiente:

* Se creó el archivo y carpetas necesarias en **lib/services/ExplorerService.js**.
* Dentro del archivo se creó una clase llamada ExplorerService.
* Se crearon los siguientes métodos:
  * static filterByMission(explorers, mission)
  * static getAmountOfExplorersByMission(explorers, mission)
  * static getExplorersUsernameByMission(explorers, mission)

![Archivo ExplorerService.js](./images/ExplorerService.png "Archivo ExplorerService.js")

El primer método filterByMission, permite obtener la lista de explorers que solo estén en node, para lo cuál se crea una constante llamada explorerByMission que será igual al nuevo array con todos los elementos que cumplan la condición implementada, esto se realiza haciendo uso del método filter, al final se retorna el nuevo array para que pueda ser visualizado.

El segundo método getAmountOfExplorersByMission, es parecido al anterior, solo que al momento de retornar se agrega la propiedad lenght que permite obtener precisamente la cantidad de explorers que están en node.

Por último, el tercer método getExplorersUsernameByMission permite obtener la lista de usuarios de github de los explorers que están en node, para este caso primero se debe obtener la lista de quienes están en node, esto se realiza como el método anterior, filter. Una vez obtenido la lista de quienes están en node usamos el método map que nos permitirá obtener la lista de usuarios de github.

#### FizzbuzzService.js

Para el archivo FizzbuzzService.js se realizó lo siguiente:

* Se creó el archivo y carpetas necesarias en **lib/services/FizzbuzzService.js**.
* Dentro del archivo se creó una clase llamada FizzbuzzService.
* Se crearon el siguiente métodos:
  * static applyValidationInExplorer(explorers)

![Archivo FizzbuzzService.js](./images/fizzbuzzService.png "Archivo FizzbuzzService.js")

El método recibe como parámetro la lista de explorers para que pueda realizar la validación, dicha validación ya se mencionó en un principio.
Para realizar está operación se hizo uso la estructura condicional "if".

### Pruebas de unidad con Jest

Se instaló jest para poder realizar las pruebas de unidad, el comando para instalar jest es:

```
npm install --save-dev jest
```

Esto indica que se agrega la dependencia jest, y que se agregue para el ambiente de desarrollo --save-dev.

Se creó una carpeta especial para los test.

#### Reader.test.js

![Archivo Reader.test.js](./images/reader-test.png "Archivo Reader.test.js")

En la primera linea se muestra que se esta importando la clase Reader para que las pruebas puedan funcionar.

En este caso las pruebas van enfocadas al path, o sea, al archivo explorers.json que contiene la lista de los explorers. Con estas pruebas se verifica si el archivo funciona correctamente y podemos obtener respuesta.

**Nota: La clase Reader esta al mismo nivel que el archivo explorers.json, por eso no se especifica la ruta en la const explores, sino que solo se pone el nombre del archivo.**

#### ExplorerService.test.js

![Archivo ExplorerService.test.js](./images/ExplorerService-test.png "Archivo ExplorerService.test.js")

Para realizar esta prueba se necesito importar los archivos Reader.js y ExplorerService.js
El primer archivo se utiliza para la lista de los explorers y el segundo para que se puedan obtener los datos solicitados.

La constante explorers se pone de forma general para que pueda ser utilizada en todos los test.

En el primer test se obtiene la lista de los explorers que están en node, en el expect se muestra el resultado esperado.

En el segundo test se obtiene la cantidad de explorers que están en node, como resultado esperado se pone el número 10 ya que es la cantidad de explorers en node.

En el tercer test se obtiene la lista de los nombres de usuarios de github de los explorers que están en node, en el resultado esperado se ponen los nombres de usuarios.

#### FizzbuzzService.test.js

![Archivo FizzbuzzService.test.js](./images/fizzbuzzService-test.png "Archivo FizzbuzzService.test.js")

Para realizar esta prueba se tiene que importar la clase FizzbuzzService que contiene el método applyValidationInExplorer donde están las validaciones.

El primer test valida la propiedad score % 3, donde si no hay residuo a la propiedad trick se le asigna el valor FIZZ. Se crea una constante explorer que será igual a un objeto que tiene las propiedades name y score. Después, se crea otra constante llamada explorerFizz en donde se hará uso del método applyValidationInExplorer y se le envía como parámetro la constante creada anteriormente para que pueda hacer la validación. Como resultado esperado a la propiedad trick se le asigna FIZZ y como tal es correcto, ya que 3 / 3 el modulo es 0.

Y así sucesivamente ocurre con los demás test.

### Automatización de pruebas con GitHub Actions

Para las pruebas automatizadas se creó un nuevo archivo con la ruta `.github/workflows/test.yml`

En el mismo archivo se útilizo el siguiente código:

```
name: Run Tests in my project every push on GitHub

on: push
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: "12"

      # Speed up subsequent runs with caching
      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
            ${{ runner.os }}-build-
            ${{ runner.os }}-

      # Install required deps for action
      - name: Install Dependencies
        run: npm install

      # Finally, run our tests
      - name: Run the tests
        run: npm test
```

Este es un GitHub Action que automatiza la ejecución de las pruebas cada vez que se haga un PUSH al repositorio de GitHub.

**Notas**

* El comando "on" significa que esta prueba se va a realizar cada que se haga un push, cada que se hagan nuevos cambios.
* El comando "runs-on" indica que va a montar un contenedor (máquina vritual), en este caso sería ubuntu.
* EL step github actions abstrae las herramientas que necesitamos, uno es para bajar cossas de git y el otro para correr jest.

### Linter

JS y cada lenguaje tienen herramientas para ayudarnos a cuidar la legibilidad en nuestro código, se les conoce como linters.

Para este proyecto se utilizó ESLint, para instalarlo solo se necesita el siguiente comando `npm install eslint --save-dev`

Después, se debe de ejecutar el siguiente comando `npm init @eslint/config` para generar la configuración del linter.

Para este proyecto se utilizó la siguiente configuración:

![Configuración del linter](./images/configuracionLinter.jpg "Configuración del linter")

![Continuación de la configuración del linter](./images/configuracionLinter-formatoJavaScript.jpg "Continuación de la configuración del linter")

Al finalizar la configuración se creará un archivo llamado `.eslintrc.js`

Dentro del archivo se pueda encontrar los rules que son reglas que podemos decirle al Linter que revise en nuestros archivos, nos ayudan a detectar mejoras de escritura.

Dentro de las reglas que hemos definido tenemos las siguientes:

```
"rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
```

    ->INDENT : Identación (2, 4 espacios o uso de tabs).
    ->QUOTES: Comillas (dobles o simples).
    ->SEMI: Punto y coma (nunca o siempre).

También se cuenta con la documentación si en dado caso se necesitará saber más de las reglas: [https://eslint.org/docs/rules/](https://eslint.org/docs/rules/).

Una vez definidas las reglas se tiene que ejecutar el siguiente comando `npm run linter` para que el linter se ejecute y muestre todas las inconsistencias de escritura.

Para arreglar todas las inconsistencias de escritura se debe de ejecutar el siguiente comando `npm run linter-fix` y con eso los archivos quedarán con el formato definido en las reglas.

### Resultados - Primera parte

En el siguiente diagrama se representan las clases que se han creado en está primera parte, que nos permiten implementar la lógica legada anrteriormente.

```mermaid
  graph TD;
      Reader-->ExplorerService;
      FizzbuzzService;
```

## Segunda parte - Crear un API para exponer las funcionalidades

Necesitamos usar las funcionalidades creadas en la primera parte para exponerlas con un API, esto ayudará a poder conectar aplicaciones de clientes que requieren los servicios.

Hasta el momento se cuenta con la siguiente estructura de directorio:

- Carpeta *services*: Se tienen dos clases para realizar toda la lógica que se necesita.
- Carpeta *utils*: Se tiene una clase para leer un archivo json.

| Endpoint                                         | Request                                   | Response                            |
| -------------------------------------------------| ------------------------------------------|-------------------------------------|
| `localhost:3000/v1/explorers/:mission`           | `localhost:3000/v1/explorers/node`        | Deberás obtener la lista<br />de explorers en la misión<br />enviaste (node o java).           |
| `localhost:3000/v1/explorers/amount/:mission`    | `localhost:3000/v1/explorers/amount/node` | Deberás obtener la cantidad<br />de explorers según la misión<br />que enviaste (node o java). |
| `localhost:3000/v1/explorers/usernames/:mission` | `localhost:3000/v1/explorers/usernames/node` | Deberás obtener la lista de<br />usernames en la misión que<br />enviaste (node o java).        |

### API con express

Se necesita crear otra clase que permita extender un puente entre la funcionalidad y el server que se va a crear, para que el server que será el API solo se comuniqué a partir de ahí. El siguiente diagrama representa las clases, la forma en que se comunican así como el server.

```mermaid
  graph TD;
      Reader-->ExplorerService;
      ExplorerService-->ExplorerController;
      FizzbuzzService-->ExplorerController;
      ExplorerController-->Server;
```

La finalidad de la separación de clases y directorios es que ayuda a tener una estructura pero también una separación de responsabilidades.

- Services: Clases para aplicar la lógica que necesitamos usando modelos.
- Utils: Clases auxiliares.
- Controller: Uso exclusivo de services.

#### Creando controller para conectar la funcionalidad con el server

![Archivo ExplorerController.js](./images/ExplorerController.png "Archivo ExplorerController.js")

1. Se creó el archivo ExplorerController en el siguiente directorio `lib/controllers/ExplorerController.js`.
2. Se importaron las clases `ExplorerServices`, `FizzbuzzService` y `Reader`.
3. Se creó un método para obtener la lista de explorers filtrados por misión:
   - Se creó un método `static getExplorersByMission` el cual recibe un parámetro llamado mission.
   - Dentro del método se llamo la función del Reader `Reader.readJsonFile("explorers.json")` para obtener la lista de explorers del archivo json.
   - Se llamo el método de `ExplorerService` para filtrar por misión, usando el parámetro mission y la lista de explorers.
   - Hacer un return del resultado obtenido.
4. Se creó un método `static getExplorersUsernamesByMission(mission)` y se regreso la lista de usernames de los explorers filtrados por la misión enviada.
5. Se creó un método `static getExplorersAmountByMission(mission)` y se regreso la cantidad de explorers en la misión enviada.

#### Pruebas de unidad del controller

![Archivo ExplorerController.test.js](./images/ExplorerController-test.png "Archivo ExplorerController.test.js")

Al archivo ExplorerController también se le realizó pruebas de unidad.

Para el primer test se obtuvo la lista de explorers por misión, para el segundo test se obtuvo la lista de nombres de usuarios de explorers por misión, para el tercer test se obtuvo la cantidad de explorers dependiendo de la misión. Para todos estos test la misión que se utilizó fue con node y todas pasaron.

#### Creando server con API

1. Se creó un script en `lib/server.js`.
2. Se creó un servidor de express.

- Se instaló express.
- Se creó un server básico.
- Se automatizo el package.json para automatizar el server, donde se agregó la siguiente línea dentro del apartado `scripts`:
  `"server": "node ./lib/server.js"`, para después solo ejecutar el comando `npm run server` para iniciar el servidor.

4. Se importo el controller.
5. Se creó el primer endpoint para recibir un parámetro por query params, y regresar la lista de explorers filtrados por el parámetro.

   Notas:

   - Este es un método GET que va a devolver información cuando se consulte.
   - La url de este endpoint será: ``localhost:3000/v1/explorers/:mission`` (:mission es un query param).
   - Se puede probar esta url con ``localhost:3000/v1/explorers/node`` o ``localhost:3000/v1/explorers/java``.
   - El query param que se envia por la url se puede recibir como ``const mission = request.params.mission;``.
   - Revisa como regresar información: ``response.json(explorersInMission)``.
6. Se creó otro endpoint para regresar la cantidad de explorers según la misión que se envié.

   - Dentro del endpoint se puede regresar un objeto con el nombre de la misión y la cantidad: response.json({mission: request.params.mission, quantity: explorersAmountInMission});
7. Se creó el último endpoint para regresar la lista de usernames de los explorers filtrados por la misión.

`Archivo server.js`
![Archivo server.js](./images/server.png "Archivo server.js")

`Endpoint para regresar la lista de explorers filtrados por el parámetro.`

![Resultados del endpoint 1](./images/endpoint-1.png "Resultados del endpoint 1")

`Endpoint para regresar la cantidad de explorers según la misión que se envié.`

![Resultados del endpoint 2](./images/endpoint-2.png "Resultados del endpoint 2")

`Endpoint para regresar la lista de usernames de los explorers filtrados por la misión.`

![Resultados del endpoint 3](./images/endpoint-3.png "Resultados del endpoint 3")

## Tercera parte - Nuevo requerimiento

Hasta el momento se refactorizo el script legado y se ha creado una API para exponer la funcionalidad.

Como nuevo requerimiento se necesita parte de lo que ya se tiene pero diferente forma, es decir, al enviar un score se le dará su correspondiente al trick. Esa validación es la que ya se tiene en FizzbuzzService. Pero ahora no se necesita agregar un campo a ningún explorer, solo regresar la palabra 'Fizz', 'Buzz', 'Fizzbuzz' o el score mismo, según es el caso.
Entonces, en base al nuevo requerimiento se creó un endpoint para recibir un número y aplicar la validación del fizzbuzz.

| Endpoint                              | Request                           | Response                           |
| ------------------------------------- | --------------------------------- | ---------------------------------- |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/1`  | `{score: 1, trick: 1}`           |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/3`  | `{score: 3, trick: "Fizzz"}`     |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/5`  | `{score: 5, trick: "Buzz"}`      |
| `localhost:3000/v1/fizzbuzz/:score` | `localhost:3000/v1/fizzbuzz/15` | `{score: 15, trick: "Fizzbuzz"}` |

De tal manera que se consigue un nuevo flujo de la funcionalidad:

```mermaid
  graph TD;
      FizzbuzzService-->ExplorerController;
      ExplorerController-->Server;
```

El único punto de conexión que debe haber entre nuestra funcionalidad y el server será el ExplorerController. Así vamos a mantener una organización y separación de responsabilidades adecuado.

Se creará la nueva funcionalidad dentro de FizzbuzzService, misma que será usada en el ExplorerController y de ahí podrá ser implementada en el server.

1. Se creó un nuevo método `static applyValidationInNumber(number)` en `FizzbuzzService`.
   - Se implemento la validación de fizzbuzz, solo regresa el valor: "Fizz", "Buzz", "Fizzbuzz" o el mismo número recibido.
2. Se añadio un nuevo método en ``ExplorerController`` que recibe un número y usa la función del FizzbuzzService que se creó en el paso anterior.
3. Finalmente se uso este método dentro de un nuevo endpoint en el server.

`Método static applyValidationInNumber(number) en FizzbuzzService`

```
static applyValidationInNumber(number){
        if(number % 5 === 0 && number % 3 === 0){
            return number = "FIZZBUZZ";

        } else if (number % 3 === 0){
            return number = "FIZZ";

        } else if (number % 5 === 0){
            return number = "BUZZ";

        } else{
            return number;
        }
    };
```

`Método getValidationInNumber en ExplorerController.js que recibe un número y usa la función del FizzbuzzService que se creó en el paso anterior.`

```
static getValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
```

`Nuevo endpoint en el archivo server.js`

```
app.get ("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const valorTrick = ExplorerController.getValidationInNumber(score);
    response.json({score: request.params.score, trick: valorTrick});
});
```

`Endpoint para mostrar la validación FizzbuzzService.`

![Resultados del nuevo endpoint 3](./images/nuevo-endpoint.png "Resultados del nuevo endpoint 3")
