import React, {Suspense} from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import routes from '../routes'
import { Navigation } from './Navigation/Navigation';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import styles from './App.module.css'

function App() {
  return (
    <>
    <div className = {styles.container}>
    <Navigation/>
    <Suspense fallback={<Loader
    className={styles.loader}
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
      />}>
      <Redirect to='/'/>
    <Switch>
      {routes.map(({ path, name, exact, component }) => {
        return (
          <Route key={name} path={path} exact={exact} component={component} />
          );
        })}
      </Switch>
    </Suspense>
    </div>
    </>
  )
}

export default App;
