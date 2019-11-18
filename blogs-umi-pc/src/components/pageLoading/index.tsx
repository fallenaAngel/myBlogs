import React from 'react';
import { Spin } from 'antd';
import style from './index.css';

export default function () {
  return (
    <div className={style.spinBox}>
      <Spin size="large" />
    </div>
  );
}
