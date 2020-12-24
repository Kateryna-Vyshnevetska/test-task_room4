import React from 'react'
import { IconLabelTabs } from '../UIcomponents/Tabs/IconLabelTabs'
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <>
    <header className={styles.header}>
      <nav >
      <IconLabelTabs />
      </nav>
    </header>
    </>
  )
}