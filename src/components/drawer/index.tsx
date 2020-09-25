import React from 'react'
import { Drawer, Menu, Image } from 'antd'
import './style/index.less'

interface IDrawerMenu {
    onClose(): void
    visible: boolean
}

function DrawerMenu(props: IDrawerMenu): JSX.Element {

    const footer: JSX.Element =
        <React.Fragment>
            <Image src={'https://www.ceara.gov.br/wp-content/uploads/2017/08/logo-ceara.png'}
                height='auto' width='auto' style={{ paddingLeft: 30 }} />
        </React.Fragment>

    return (
        <React.Fragment>
            <Drawer
                title='Menu'
                placement={`left`}
                closable={false}
                onClose={props.onClose}
                visible={props.visible}
                key={`left`}
                footer={footer}
            >
                <Menu defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" >
                        Perfil
                    </Menu.Item>
                    <Menu.Item key="2" >
                        Configuração
                    </Menu.Item>
                    <Menu.Item key="3" >
                        Exemplo
                    </Menu.Item>
                </Menu>
            </Drawer>
        </React.Fragment>
    )
}

export default DrawerMenu
