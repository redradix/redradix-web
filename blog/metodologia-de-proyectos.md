Una vez que el cliente hace el primer contacto, normalmente a traves de mi socio Juan, nos solemos juntar para un primer contacto técnico.

Sin ir más lejos, esta misma tarde me dice Juan: "Miguel, mañana tenemos una call con una empresa llamada ACME solutions. Me acaban de contactar, quieren migrar su web que está hecha en asp, y hacer un rediseño de algunas partes. Me pasan unos keynotes con los diseños de cómo ven ellos la nueva app. Además han oído hablar de Angular y dicen que quieren una progressive web app"

![ACME](/images/blog/acme.png "ACME")

La mayoría de cambios en las aplicaciones web responden a una necesidad concreta:

 - “nuestro look and feel no conecta con nuestro tipo de usuarios“
 - “la carga inicial de la web es muy lenta y los usuarios se van“
 - “nuestro ratio de conversión es muy bajo a pesar de tener muchas visitas, no vendemos“

...pero se pierde u omite cuando el cliente nos cuenta lo que quiere hacer. Probablemente porque piensan que no tenemos nada que aportar a la idea que tienen en la cabeza.

Gran error.

Llevamos mucho tiempo haciendo lo que hacemos, y esta experiencia, nos da una visión global del mundo web, que junto con tu entendimiento del negocio, puede ser la sinergia perfecta. No nos excluyas de la ecuación, porque si vamos a desarrollar tu producto, somos parte importante.

No nos omitas el ‘qué’ y nos cuentes solo el ‘cómo’, porque si desconocemos el ‘que’, nunca podremos aportar eso que tu no has sabido ver en tu idea.

O más concretamente:

- No nos digas el nuevo lenguaje/framework/estilo de programación que quieres usar en tu aplicación, dime cual es tu problema, y déjame aconsejarte cual es el que mejor se adapta a tus necesidades. Me dedico a ello.

- No nos digas nuevas buzzwords que has oído en la última charla de madridJs. Déjanos aconsejarte que es lo que tu aplicación necesita en términos de robustez, durabilidad y extensibilidad. Nos dedicamos a ello.

- No nos pases unos bocetos en pdf que limiten la creatividad de nuestra gente. Dinos cual es tu problema, en formato texto o verbal, y deja que te enseñemos unos prototipos funcionales que demuestren una prueba de concepto/posible solución al problema. Tenemos un equipo entero dedicado a ello.

Cuando tuvimos la call con ACME Solutions, mi misión era ahondar en el qué. No fue posible. Lastima. Muchas veces ni ellos lo saben.

Quizás lo atisbaron pero ha sido enterrado en un sinfín de funcionalidades nuevas innecesarias. O quizá nunca lo supieron y están dando palos de ciego a ver si suena la campana.

En este caso, solo hablamos sobre su idea, sobre las funcionalidades y requisitos. Pero nos sirvió para darnos cuenta lo poco claro que tenían lo que querían hacer. El poco detalle al que habían bajado sus requisitos. Al menos, obtuve unas funcionalidades iniciales para trabajar en una horquilla y les convencimos de hacer una fase de definición.

## Fase de definición

La fase de definición que hacemos en redradix es bastante simple.

La idea es hacer dos semanas de intensa interacción con el cliente para entender todas las necesidades y hacer pruebas de concepto/prototipos que validen si la idea es correcta.

**Pensamiento divergente/abrir melones**: Al inicio de la primera semana, nos involucramos en el proyecto. Hablamos con sus expertos sobre el negocio, vemos todos los requisitos e ideas que ya tenían en mente, fomentamos la generación  de nuevas ideas y proponemos las nuestras. A mediados de semana, tenemos un backlog de ideas pero no todas se pueden incluir...

**Pensamiento convergente/tomar decisiones**: Durante la segunda mitad de la primera semana, priorizamos el backlog, descartamos las que sean excluyentes o hayan perdido fuerza y seleccionamos las que consideremos más relevantes. Todos involucrados, tanto cliente como redradix, es decir, el equipo del proyecto.

![Divergente y Convergente](/images/blog/convdiv.png "Divergente y Convergente")

**Prototipos**: Durante la segunda semana, nos dedicamos a hacer un prototipo simple pero funcional (con interacción) de las decisiones tomadas anteriormente. Para final de semana se entrega a cliente este prototipo y se hacen algunos test de usuario de la manera más sencilla posible, es decir, se comprueba si las decisiones tomadas son válidas en un entorno cercano a la realidad para un posible usuario de la aplicación

![Mockup](/images/blog/mock.png "Mockup")

Si los test de usuario superan las expectativas, pasamos a la siguiente fase.

No suele ser así.

Las suposiciones hechas sobre el funcionamiento de la aplicación son erróneas y nos damos cuenta de cómo el usuario entiende realmente la aplicación. Vemos la diferencia entre nuestra idea de uso y como realmente se usa.

Por ello, siempre solemos hacer más iteraciones de una semana de duración, donde volvemos a generar ideas que desembocan en cambios sobre el prototipo. Y en cada fase validamos su usabilidad.

Al final de estas iteraciones, cuando el prototipo cubre unas necesidades mínimas, dedicamos una semana más a detallarlos y explicarlos.

![Mockup](/images/blog/mock2.png "Mockup")

Estos mockups de bajo nivel son el output de esta fase, que sirve como documentación para fases sucesivas. En ellos se puede ver el mapa del sitio, la arquitectura de la información de cada vista y las posibles interacciones del usuario, entre otras cosas.

Ahora sí podemos pensar en una arquitectura/solución para el problema al que nos enfrentamos y con ello una estimación más precisa de la duración del proyecto.

## Fase de estimación

Esta fase es donde los diferentes roles que desarrollarán la aplicación (diseño, maqueta, desarrollo front) hablan con el UX para entender el proyecto.

Es lo que llamamos la reunión de kickoff.

Utilizando los mocks como guía, el equipo de UX explica al resto el proyecto y entre todos, dividimos el proyecto en épicas, que no son más que una agrupación de tareas por funcionalidad.

Hablamos, resolvemos dudas, planteamos problemas, aportamos posibles implementaciones y estimamos su coste en esfuerzo a grandes rasgos. Hasta aquí el equipo técnico.

En caso de **proyecto cerrado** (grave error), el esfuerzo, junto con otros factores; riesgos, personas implicadas, duración estimada, se pasa a un presupuesto.

En caso de **proyecto ágil/abierto**, conversamos con el cliente para hacerle entender que con los requisitos actuales, que seguro van a cambiar, serian necesarias, a grosso modo, X iteraciones. Todo cliente necesita cierta seguridad de que con el presupuesto que tiene, va a obtener un mínimo de funcionalidad.

Esta estimación, sin darle una seguridad por contrato, tranquiliza a la mayoría.

## Reunión de metodología

Una vez que el cliente nos da el *go!*, lo primero que hacemos es tener una reunión con el cliente para aclarar nuestra forma de trabajo y su implicación.

Empezamos por agil, scrum y vamos profundizando sobre las herramientas; en concreto trello.

![Trello](/images/blog/trello2.png "Trello")

Redactamos algunas historias de ejemplo para que el cliente,  pueda redactarlas él mismo antes de cada inicio de iteración.

Si el cliente no se ve capaz de realizar esta tarea, somos flexibles y asumimos el rol de *product owner*.

Comentar que en las dos últimas ocasiones que el cliente no ha escrito las historias, existe un pequeño gap entre lo que el cliente realmente quiere implementar y lo que nosotros interpretamos que se quiere. Esto se ve reflejado en las *Definition of Done* de las historias y conlleva pequeños desvíos en tiempo y esfuerzo.

Para terminar, siempre acabamos hablando de las reuniones de planificación, demo y retrospectiva en cada iteración y su necesidad.

## Fase de desarrollo

Comenzamos el desarrollo por sprints de dos semanas y de forma escalonada.

 - *sprint #1*: Diseño
 - *sprint #2*: Diseño y maqueta
 - *sprint #3*: Diseño, maqueta y desarrollo front

Dejamos un sprint de diseño para crear las bases: línea visual, paleta de colores, layouts...

Lo mismo con maquetación, donde hacen la división en átomos, moléculas y organismos, crean mixins y  variables sass, crean módulos e inician el proyecto a partir de nuestra aplicación base...

Y por último el desarrollo front donde creamos la infraestructura mínima del proyecto, creamos los entornos, configuramos la integración continua...

## Reunión de planificación

En cada inicio de sprint realizamos una reunión de planificación, la cual dividimos en dos partes:

**Selección de historias a realizar**: Dado que el cliente ha descompuesto en historias algunas épicas o parte de ellas, tenemos en el backlog, tarjetas sobre las que dialogar. A ser posible estarán priorizadas, sino se priorizan en el momento.

Comenzamos la negociación.

Pongo como ejemplo las dos primeras tarjetas que abordamos en el proyecto de ACME Solutions:

- Quiero que hagáis el gráfico interactivo - PO
- No especifica que hay que hacer en la descripción, de hecho no tiene descripción - SM
- Ok, la incluyo y la metemos en el sprint - PO
- No la podemos incluir a mitad de sprint porque modificaría el alcance del sprint y además puede que no sea válida.
- ¿Y ésta de la tabla de usuarios? - PO
- No tiene DoD para validarla de forma que no sabemos qué es lo que debemos desarrollar

Sobre todo durante las primeras iteraciones es de vital importancia, educar al cliente en la metodología.

Podemos parecer estrictos pero sabemos que funciona.

En el momento que el cliente no escribe las historias por sí mismo o que la DoD es muy genérica, se da pie a la libre interpretación del desarrollador, con los consecuentes desvíos en tiempos y funcionalidad.

En las negociaciones de las reuniones de planificación, se validan las historias, se estiman en esfuerzo y si entre todos decidimos abordarla en el sprint, se incluyen al TODO de la iteración.

Cuando el número de puntos de esfuerzo es similar a la velocidad (puntos de esfuerzo reales) de la iteración anterior, dejamos de incluir historias para este sprint.

**Descomposición de las historias en tareas y responsables**: Una vez completa la lista de historias a realizar en el sprint, internamente, se dividen en tareas y responsables de llevarlas a cabo.

Algunos usan [Kanbanflow](https://kanbanflow.com) para llevar sus tareas, otros lo hacen de manera más manual. En cualquier caso, esas tareas se listaran en un checkbox list en la tarjeta de trello. Veremos dependencias, problemas, riesgos y reorganizaremos el orden de las tareas a realizar.

## Sprint

Resaltar en esta fase la importancia de las responsabilidades y la comunicación. Cada uno sabe que hace el resto y cuando encuentra un problema o tiene una duda, sabe a quién acudir y lo hace, [siempre de forma asíncrona para no interrumpir](https://redradix.com/blog/comunicacion-y-remoteo).

Según se comienza una historia, se pasa a DOING, marcando quien o quienes están trabajando en ella.

Según se van terminando tareas, se marca su checkbox.

Según se van terminando historias, se pasan a DONE, escribiendo los puntos de esfuerzo reales que ha llevado el desarrollo de esa historia.

## Reunión de demo y retrospectiva

A final de sprint nos reunimos con el cliente, y mostramos una a una, las historias completadas. Vamos viendo en el entorno real, cada historia, reproduciendo su DoD y si el desarrollo cumple con lo esperado, pasamos la historia a ACCEPTED.

En caso de no pasar, comentamos el por qué y la ponemos de nuevo en el backlog. Es un pequeño proceso de QA, realizado por el mismo cliente que además le proporciona un feedback sobre si lo que estamos desarrollando tiene el resultado que esperaba.

Y sin tener que esperar al final del proyecto!

Calculamos la velocidad real de este sprint y hacemos la retrospectiva. Muy concisa, qué me ha gustado y qué podríamos mejorar para la siguiente iteración.

-	:) Me gusta como el PO está respondiendo a las dudas planteadas en las historias del trello. Rápido y conciso!
-	:( La integración continua con el entorno de staging no es del todo continua...

## Sprint ++
Continuaremos haciendo sprints hasta que el cliente nos diga una de estas frases:

-	Lo siento, me he quedado sin presupuesto :(
-	Hemos acabado todo lo que queríamos hacer por el momento y estoy contento con el producto :)
-	No me gusta como estais haciendo el proyecto. Me voy con otros  ⓧ_ⓧ

## Transferencia de conocimiento

En cualquiera de los tres casos, la transferencia de conocimiento es esencial.

El mejor formato es poner un desarrollador del cliente a trabajar desde el inicio o durante los últimos meses en el proyecto, codo con codo con nosotros.

Recuerdo el caso de Smart Resorts, a mitad de desarrollo nos pidieron si podían incluir a un desarrollador en el equipo, [Rafael Casuso](https://twitter.com/rafael_casuso), gran programador, mejor persona.

A los dos meses, era una persona que conocía el código, la deuda técnica, las implementaciones pendientes y la forma de trabajar.

Todo un WIN para el cliente que pudo continuar por su cuenta y riesgo.

No siempre es posible. La segunda opción es dar una formación intensiva.

En muchos casos es necesario dar un curso de bases del lenguaje y el framework.  Es el caso de GMV, donde estuvimos un par de semanas haciendo un intensivo de 4 horas diarias, mezclando su aplicación, javascript, node y react.

![Transferencia de conocimiento](/images/blog/transferencia.png "Transferencia de conocimiento")

Una opción complementaria es una bolsa de horas para resolver problemas, ayudar inicialmente con nuevos desarrollos, y hacer consultoría, que siempre complementa muy bien con la formación.

## Conclusión

No siempre es posible aplicar todo lo antes descrito. Cada cliente es un universo aparte, con sus normas, burocracia, metodología, o simplemente sus creencias sobre lo que es mejor. Pero algo hemos comprobado a lo largo del tiempo, cuanto más se aproxima un desarrollo a esta metodología, más contento queda el cliente.

Es un hecho.

Esta metodología es cómo nos sentimos cómodos desarrollando productos. Implica no quedarse en la zona de confort y trabajar en equipo. Implica también mucha implicación del cliente. Pero merece la pena el esfuerzo.

Por otro lado, es un WIP y esperamos que siempre lo sea. Ha crecido en redradix de forma orgánica y estoy seguro que es el embrión de algo mucho más grande.

Me encantaría saber tu opinión, tanto si eres proveedor como cliente.

¿Que problemas te has encontrado a la hora de desarrollar productos?

¿Como los has solucionado?

¿Qué opinas sobre este approach?

¿Qué mejorarías?
