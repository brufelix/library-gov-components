import React, { useState } from 'react'
import { Layout, Input, Button, Image } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { FaBars } from 'react-icons/fa'

import Drawer from '../../drawer'
import {
    styleContainerSearch,
    styleHeader,
    styleLink,
    styleSearch
} from './style/styleInline'
import './style/index.less'

function HeaderWithSearch(): JSX.Element {

    const { Header } = Layout
    const [loading, setLoading] = useState(false)

    const [visible, setVisible] = useState(false)

    function showDrawer(): void {
        setVisible(true)
    }

    function onClose(): void {
        setVisible(false)
    }

    function onClick(): void {
        setLoading(!loading)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    return (
        <Header style={styleHeader} >
            <div className="logo">
                <Image height={60} width="auto"
                    src="https://www.ceara.gov.br/wp-content/themes/ceara2017/assets/images/logo-ceara.svg" />
            </div>
            <div className="bars">
                <FaBars size={25} color="#FFFFFF" onClick={() => showDrawer()} />
            </div>
            <Drawer onClose={onClose} visible={visible} />
            <div className="brasao">
                <Image height={60} width="auto" className="img"
                    src="https://brasao.org/wp-content/uploads/2018/10/brasao-do-ceara-5.png" />
            </div>
            <div className="search-container" style={styleContainerSearch} >
                <Input size="small" style={styleSearch} placeholder="Buscar serviço" />
                <div style={{ background: 'linear-gradient(to right, #52DF9A, #FFFFFF)' }}>
                    <Button size="middle" style={{
                        width: 60, height: 40,
                        borderRadius: 30, border: 'none'
                    }}
                        icon={<SearchOutlined />} loading={loading}
                        onClick={() => onClick()} />
                </div>
            </div>
            <div className="about-links">
                <a style={styleLink} href="/">Sobre</a>
                <div style={{ background: 'white', height: 32, width: 1 }} />
                <a style={styleLink} href="/">Serviços para o cidadão</a>
            </div>
        </Header>
    )
}

export default HeaderWithSearch