import ContainerFluid from 'components/layouts/containers/fluid/Fluid';

const Center = (props) => {
  return(
    <ContainerFluid>
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        {props.children}
      </div>
    </ContainerFluid>
  );
}

export default Center;