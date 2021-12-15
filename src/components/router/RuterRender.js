import { Route, Redirect } from 'react-router-dom';

const RuterRender = (props) => {
  let isRedirect = false;
  switch (typeof props.redirect) {
    case 'function':
      isRedirect = props.redirect();
      break;
    case 'boolean':
      isRedirect = props.redirect;
      break;
    case 'object':
      isRedirect = Object.entries(props.redirect).length !== 0;
      break;
    default:
      break;
  }
  if(Array.isArray(props.redirect)) {
    props.redirect.forEach(fnValid => {
      if(!fnValid())
        isRedirect = true;
    });
  }

  let _toPath = '/';
  switch(typeof props.toPath) {
    case 'function':
      _toPath = props.toPath();
      break;
    case 'string':
      _toPath = props.toPath;
      break;
    default:
      break;
  }

  return (
    <Route exact={props.exact} path={props.path} render={(routeProps) => {
      if(isRedirect) {
        return <Redirect to={{pathname: _toPath, state: {from: routeProps.location}}} />;
      } else if(props.children) {
        return props.children;
      }
      return null;
    }}/>
  );
}

RuterRender.defaultProps = {
  exact: true
}

export default RuterRender;