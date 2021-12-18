import { Producto } from "../../../interface/Producto";

interface Props {
  producto: Producto;
}

export const ProductoItemDash: React.FC<Props> = (props) => {
  return (
    <>
      <tr data-widget="expandable-table" aria-expanded="false">
        <td>xd</td>
        <td>xd</td>
        <td>xd</td>
        <td className="d-flex justify-content-evenly w-100">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="btn btn-warning bg-gradient"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#agregarProducto"
          >
            XD
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="btn btn-dark bg-gradient"
          >
            XD
          </button>
        </td>
      </tr>
      <tr className="expandable-body d-none">
        <td colSpan={5}>
          <p style={{}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </td>
      </tr>
    </>
  );
};
