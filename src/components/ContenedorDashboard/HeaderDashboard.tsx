interface Props {
  titulo: string;
}

export const HeaderDashboard: React.FC<Props> = (props) => {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">{props.titulo} </h1>
          </div>
          <div className="col-sm-6">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
