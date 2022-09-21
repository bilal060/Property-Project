import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllSocietiesAction } from '../store/actions'
import Phase from '../components/Phases/index'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function AllPhases() {
    const allSocieties = useSelector((state)=> state.AllSocieties);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllSocietiesAction());
    }, []);
  return (
    <div>
      <section className='feature-categories bg-white rec-pro'>
        <div className='container-fluid'>
            <div className='sec-title'>
                <h2>
                    All Phases
                </h2>
                <p>Properties in all phases</p>
            </div>
            <div className='row'>
                {allSocieties?.data?.map((item, key)=>{
                  return<Phase item={item} />
                })}
               
            </div>
        </div>
      </section>
    </div>
  );
}

