import {Card, Skeleton, Space} from 'antd';
import { ButtonType,ActionButton } from './ActionButton';

interface IOffer{
  data: {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
},
selectedQty?:number
maxQty?:0,
onChangeQty?:(stry:number)=>{}
}
export function isNullOrUndefined(value:string|null|undefined) {
  return value === null || value === undefined;
}

const Offer = ({data,maxQty,onChangeQty,selectedQty=0}:IOffer) => {
  const {id, title, description, price} = data || {};
  return (
    <Card
        title={title || <Skeleton title paragraph={false} />}
        extra={`${price}$ / month`}>
        {description}
        
        <Space direction="vertical" align="end" style={{display: 'flex'}}>
            <ActionButton
              type={
                selectedQty ? ButtonType.REMOVE : ButtonType.ADD
              }
              disabled={isNullOrUndefined(id) || maxQty === 0}
              onClick={() => onChangeQty?.(selectedQty ? 0 : 1)}
            />
          </Space>
      </Card>
  )
}

export {Offer};