import React, { useState } from 'react'
import { Layout, Button } from 'antd'
import { FaBars, FaFile, FaGitlab, FaReact } from 'react-icons/fa'

import Drawer from '../../drawer'
import {
    styleContainerHeader,
    styleLink
} from './style/styleInline'
// import './style/index.less'

function HeaderWithMenu(): JSX.Element {

    const { Header } = Layout

    const [visible, setVisible] = useState(false)

    function showDrawer(): void {
        setVisible(true)
    }

    function onClose(): void {
        setVisible(false)
    }

    return (
        <React.Fragment>
            <Header style={styleContainerHeader}>
                <div className="bars-menu">
                    <Button type='primary' onClick={showDrawer}
                        style={{ boxShadow: 'none' }}>
                        <FaBars size={20} />
                    </Button>
                    <span>MENU</span>
                </div>
                <Drawer onClose={onClose} visible={visible} />
                <div className="link-options" >
                    <a style={styleLink} href="/" >Perfil</a>
                    <a style={styleLink} href="/" >Configuração</a>
                    <a style={styleLink} href="/" >Exemplo</a>
                </div>
                <div className="link-icons" >
                    <a style={styleLink} href="/" >
                        <FaReact />
                    </a>
                    <a style={styleLink} href="/" >
                        <FaFile />
                    </a>
                    <a style={styleLink} href="/" >
                        <FaGitlab />
                    </a>
                </div>
            </Header>
        </React.Fragment>
    )
}

export default HeaderWithMenu
