import { ToggleWithChildren } from "../pattern/render-prop-pattern/children-prop/toggle-witch-children";
import { Toggle } from "../pattern/render-prop-pattern/render-prop/toggle";

export const RenderPropDemo = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Render Prop pattern</h1>
      <Toggle render={() => <div>Aqui estoy </div>} />
      <Toggle
        render={() => (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nam voluptas quidem nisi quisquam porro, explicabo et optio odio,
              non laudantium ducimus consectetur fuga? Minima nam aperiam omnis
              veritatis et!
            </p>

            <img
              src="https://images.unsplash.com/photo-1781591272000-f7f4f0c386b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
              alt=""
            />
          </div>
        )}
      />

      <hr />

      <h2 className="text-2xl font-bold">Render prop with children</h2>

      <ToggleWithChildren>
        <p>Hola toggle with children</p>
      </ToggleWithChildren>

      <ToggleWithChildren>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nam
            voluptas quidem nisi quisquam porro, explicabo et optio odio, non
            laudantium ducimus consectetur fuga? Minima nam aperiam omnis
            veritatis et!
          </p>

          <img
            src="https://images.unsplash.com/photo-1781591272000-f7f4f0c386b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
      </ToggleWithChildren>
    </div>
  );
};
