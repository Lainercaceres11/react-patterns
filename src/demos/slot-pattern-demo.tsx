import ToastManager from "../pattern/slot-pattern/componentes/toast-manager";
import Toolbar from "../pattern/slot-pattern/componentes/toolbar";

const SlotPatternDemo = () => {
  return (
    <div className="space-y-4">
      <ToastManager />
      <Toolbar
        start={<h1>Start</h1>}
        center={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere
            tempora iusto quod accusantium, ea molestias inventore illo, odit
            deserunt recusandae nemo eum est id pariatur aliquam explicabo rem
            quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            rerum asperiores sint mollitia, suscipit facilis excepturi corporis
            reprehenderit non exercitationem cumque, inventore eos eveniet ullam
            ratione eaque culpa illum illo.
          </p>
        }
        end={<h1>End</h1>}
      />
    </div>
  );
};

export default SlotPatternDemo;
