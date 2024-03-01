import {FC} from 'react';
import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, ButtonProps} from 'antd';

export interface IActionButtonProps {
  type: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

export enum ButtonType {
  ADD,
  REMOVE,
}

export const ActionButton: FC<IActionButtonProps> = ({
  type,
  disabled,
  onClick,
}) => {
  const props: ButtonProps = {
    shape: 'round',
    icon: type === ButtonType.ADD ? <PlusOutlined /> : <MinusOutlined />,
    onClick,
    children: type === ButtonType.ADD ? 'Add' : 'Remove',
    disabled,
    ...(type === ButtonType.ADD && {type: 'primary'}),
    ...(type === ButtonType.REMOVE && {danger: true}),
  };
  return <Button {...props} />;
};

ActionButton.defaultProps = {
  disabled: false,
  onClick: undefined,
};