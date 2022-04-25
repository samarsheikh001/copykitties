export interface IBaseTemplate {
  sampleTextProp: String;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp} </div>;
};

export default BaseTemplate;
