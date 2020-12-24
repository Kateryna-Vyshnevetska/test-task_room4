import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { useRouteMatch } from 'react-router-dom';
import { getSingerInfo } from '../../redux/singers/singersOperations';
import styles from './SingerPage.module.css'

const SingerPage = () => {
  const dispatch = useDispatch();
  const params = useRouteMatch();
  const singerName = params.params.singerName.split(' ').join('%20');
  const singer = useSelector(state => state.singer)

  
  useEffect(() => {
    dispatch(getSingerInfo(singerName))
  }, [])

  return(
    <>
    {singer.tags.length >0 &&
      <div className={styles.container}>
      <div className={styles.img}>
        <img src={singer.image} alt={`Photo ${singer.name}`}></img>
      </div>
      <div className={styles.content}>
        <p className={styles.name}>{singer.name}</p>
        <p className={styles.descr}>{singer.descr}.</p>
        <ul className={styles.list}>
          {singer.tags.map(el => {
            return(
              <li key={uuidv4()} className={styles.listItem}>
                <a target='blank' href={el.url}>#{el.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>}
    </>
  )
}

export default SingerPage;