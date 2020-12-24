import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { MediaCard } from '../../components/UIcomponents/MediaCard/MediaCard';
import { getPopularSongs } from '../../redux/populars/popularOperations';
import { clearSigner } from '../../redux/singers/singersOperations';
import styles from './HomePage.module.css'

const HomePage = () => {
  const dispatch = useDispatch();
  const tracks = useSelector(state => state.tracks)

  useEffect(() => {
    dispatch(clearSigner());
    tracks.length === 0 && dispatch(getPopularSongs())
  }, []);

  return(
    <>
    <div className={styles.container}>
      <ul className={styles.list}>
        {tracks.map(el => {
          return (
          <li key={uuidv4()} className={styles.listItem}>
            <MediaCard {...el}/>
          </li>
          )
        })
        }
      </ul>
    </div>
    </>
  )
}

export default HomePage;