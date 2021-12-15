const ContainerFluid = (props) => {
  return(
    <div className='ContainerFluid container-fluid px-0'>
      {props.children}
    </div>
  );
}

export default ContainerFluid;