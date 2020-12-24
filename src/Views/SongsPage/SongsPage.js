import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from "uuid";
import Roll from 'react-reveal/Roll';
import { BasicTextField } from '../../components/UIcomponents/BasicTextField/BasicTextField';
import { getSearchTrack } from '../../redux/search/searchOperations';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SongsPage.module.css'

const schema = yup.object().shape({
  query: yup
    .string()
});

const SongsPage = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false)
  const dispatch = useDispatch();
  const songsList = useSelector(state => state.search)

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data,e) => {
    if(query.length === 0){
      setError(true);
      setTimeout(() => {setError(false)}, 3000);
    }else{
      e.target.reset();
      setQuery('')
      dispatch(getSearchTrack(query))
    }
  }

  return(
    <>
    <div className={styles.container}>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <BasicTextField label='Name of the song'
        register={register} name='query'
        handleChange={({ target: { value } }) => {
          setQuery(value);
        }}
        />
        <button type='submit' className={styles.btnSbm}>Search</button>
      {error && 
        <Roll left>
        <div className={styles.error} >
          <p>Please enter a song title</p>
        </div>
      </Roll>}
      </form>
      {songsList.length>0 && 
      <ul className={styles.list}>
        {songsList.map(el => {
          return(
            <li className={styles.listItem} key={uuidv4()}>
              <div>
                <p className={styles.song}>Song:
                  <a target='blank' href={el.url}> {el.name}</a>
                </p>
              <p>Artist: {el.artist}</p>
              </div>
            </li>
          )
        })}
      </ul>
      }
    </div>

    </>
  )
}

export default SongsPage;