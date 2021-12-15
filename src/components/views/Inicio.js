import Fluid from 'components/layouts/containers/fluid/Fluid';
import Center from 'components/layouts/containers/center/Center';
import UserSidebarList from 'components/common/userSidebarList/UserSidebarList';

const index = () => {
    return (
        <Fluid>
            <div className='row'>
                <div className='col-2 border'>
                    <UserSidebarList />
                </div>
                <div className='col-10 border'>
                    <Center>
                        <p>Hola Mundo!</p>
                    </Center>
                </div>
            </div>
        </Fluid>
    )
}

export default index;