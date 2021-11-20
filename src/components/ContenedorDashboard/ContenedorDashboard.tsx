export const ContenedorDashboard: React.FC = (props) => {
  return (
    <div className="content-wrapper" style={{ minHeight: "643px" }}>
      {props.children}
    </div>
  );
};
