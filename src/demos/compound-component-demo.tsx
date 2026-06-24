import Card from "../pattern/compound-component-pattern/card/card";
import Tab from "../pattern/compound-component-pattern/tab/tab";

export function CompoundComponentDemo() {
  return (
    <div className="space-y-4">
      <Card>
        <Card.Header>
          <h2 className="text-2xl font-bold">Card header</h2>
        </Card.Header>
        <Card.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            consequuntur commodi rerum, exercitationem aliquam maiores odit,
            vero ex cumque deleniti ducimus nostrum doloremque. Fugit inventore
            cupiditate reprehenderit, aliquam earum odio?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card.Image
              src="https://plus.unsplash.com/premium_photo-1781729881052-0ef9cfc34406?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Mujer acostada con un libro."
              title="Figure 1."
            />

            <Card.Image
              src="https://images.unsplash.com/photo-1781591272000-f7f4f0c386b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
              alt="Bosque."
              title="Figure 2."
            />
          </div>
        </Card.Body>
        <Card.Footer>
          <a
            target="_blank"
            href="https://github.com/tapascript/15-days-of-react-design-patterns/blob/main/day-03/task.md"
            className="bg-blue-900 text-white rounded-2xl border border-amber-50 w-30 px-2 py-2 cursor-pointer"
          >
            Go to page
          </a>
        </Card.Footer>
      </Card>
      <hr />

      <h2 className="text-2xl font-bold">Tab example</h2>
      <Tab>
        <Tab.TabPanel>
          <Tab.TabItem title="Social media">
            <p>
              Las redes sociales (social media) son plataformas digitales que
              permiten a los usuarios crear, compartir e intercambiar contenido,
              información e ideas en comunidades virtuales. Funcionan como
              espacios de interacción social en línea donde las personas pueden
              comunicarse, colaborar y construir redes de contactos alrededor de
              intereses comunes.
            </p>
          </Tab.TabItem>

          <Tab.TabItem title="Programing languages">
            <p>
              Los lenguajes de programación (programming languages) son sistemas
              formales de comunicación compuestos por un conjunto de reglas
              sintácticas y semánticas que permiten a los desarrolladores
              escribir instrucciones que las computadoras pueden interpretar y
              ejecutar. Actúan como un puente entre el pensamiento humano y la
              lógica de las máquinas, facilitando la creación de software,
              aplicaciones y sistemas digitales.
            </p>
          </Tab.TabItem>

          <Tab.TabItem title="Word processing">
            <p>
              El procesamiento de textos (word processing) es el uso de software
              especializado para crear, editar, formatear e imprimir documentos
              de texto. Permite a los usuarios producir contenido escrito de
              manera digital con herramientas avanzadas de diseño, corrección y
              organización, reemplazando los métodos tradicionales de escritura
              manual o mecánica.
            </p>
          </Tab.TabItem>
        </Tab.TabPanel>
      </Tab>
    </div>
  );
}
