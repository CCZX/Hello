import { FC } from 'react';
import './index.less';

interface PreviewProps {}

const Preview: FC<PreviewProps> = (props) => {
  return (
    <div className='preview-container'>
      <div className='preview-logo'></div>
      <div className='preview-text'></div>
    </div>
  );
};

export default Preview;
