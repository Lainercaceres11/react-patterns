import { MouseTracker } from "./children-prop/mouse-tracker";
import { MouseTrackerWithRender } from "./render-prop/mouse-tracker-with-render";

export const DemoRenderProp = () => {
  return (
    <div>
      {" "}
      <MouseTracker>
        {({ x, y }) => (
          <p>
            ✨ Mouse position: {x}, {y}
          </p>
        )}
      </MouseTracker>
      <MouseTrackerWithRender
        render={(position) => (
          <div>
            <h2>Render position</h2>
            <p>
              ✅ position is {position.x}, {position.y}
            </p>
          </div>
        )}
      />
    </div>
  );
};
