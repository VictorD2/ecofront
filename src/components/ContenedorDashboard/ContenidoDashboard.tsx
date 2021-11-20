export const ContenidoDashboard: React.FC = (props) => {
  return (
    <div className="content">
      <div className="container-fluid">{props.children}</div>
    </div>
  );
};
