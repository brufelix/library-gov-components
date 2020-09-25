import React from 'react'
import { Pagination } from 'antd'
import './style'

export default () =>
    <Pagination size="default" defaultCurrent={1} total={50} responsive={true} />
