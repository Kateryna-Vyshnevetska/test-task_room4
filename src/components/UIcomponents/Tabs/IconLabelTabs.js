import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { navigation } from '../../../routes';
import styles from './IconLabelTabs.module.css'

export const IconLabelTabs = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={styles.container}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        {navigation.map(({path, name, icon, key})=> {
          return(
            <Tab key={key} icon={icon} onClick={(()=> history.push(path))} label={name}/>
          )
      })}
      </Tabs>
    </Paper>
  );
}
