import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';

import fetchTokenLocal from './utils/fetchTokenLocal';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest} render={(props) => (
                fetchTokenLocal() ? <Component {...props} /> : <Redirect to='/login' />
            )}
         />
    )
}

export default PrivateRoute
