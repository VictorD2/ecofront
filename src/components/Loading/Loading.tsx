import "./Loading.css";
interface Props {
  message: string;
}
export const Loading: React.FC<Props> = (props) => {
  return (
    <div className="loadingData d-flex justify-content-center align-items-center flex-column">
      <i className="fas fa-2x fa-sync-alt loading" />
      {props.message}
    </div>
  );
};
