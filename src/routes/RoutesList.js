import { Lista, Registo, } from '../pages/pages'
import {
    CreateOutlined,
    FormatListBulletedOutlined
} from '@material-ui/icons';

const routesList = [
    {
        label: "Home",
        path: "home",
        access: 'admin',
        icon: <FormatListBulletedOutlined />,
        Component: <Lista />
    },
    {
        label: "Settings",
        path: "registo",
        access: 'admin',
        icon: <CreateOutlined />,
        Component: <Registo />
    },
]

export function routes() {
    return {
        routesList
    }
}
