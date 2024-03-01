import {Layout, Statistic} from 'antd';
import styled from 'styled-components';

const {Footer: AntdFooter} = Layout;

interface ITotal {
  value: number,
  className: string|undefined,
}
export const Total = ({value = 0, className=undefined}:ITotal) => (
  <Footer className={className}>
    <div>
      Total:
      <Statistic value={value} suffix="$ per month" />
    </div>
  </Footer>
);

const Footer = styled(AntdFooter)`
  &.ant-layout-footer {
    background-color: #003eb3;

    &,
    .ant-statistic-content {
      color: white;
    }

    .ant-statistic-content-suffix {
      margin-inline-start: 0;
    }
  }
`;
