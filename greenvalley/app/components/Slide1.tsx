'use client';
import React, { useEffect, useState } from 'react';
import { states, validateZip } from '../helpers/campaignActions';
import { SmartyObj, State } from '../../lib/types';
import { STATUS_CODES } from 'http';
const Slide1 = () => {
  const [statesList, setStatesList] = useState<State[] | null>([]);
  const [currentState, setCurrentState] = useState<string>('');
  useEffect(() => {
    const findStates = async (country_code: string) => {
      const foundStates: State[] | null = await states(country_code);
      console.log('function is running');
      setStatesList(foundStates);
      return foundStates;
    };
    findStates('US');
  }, []);

  const confirmZip = async (zip: string, state: string) => {
    if (zip.length < 5) return false;
    const currentInfo: SmartyObj | false | void = await validateZip(zip, state);
    console.log('This is current info', currentInfo);
    console.log(zip, state);

    return currentInfo;
  };
  return (
    <div className='flex flex-col w-full h-full items-center justify-center gap-6'>
      <p className='text-lg text-center'>We like to know a few things first.</p>
      <div className='flex items-center justify-center flex-col text-center'>
        <h2 className='text-xl md:text-2xl'>Where are you located?</h2>
        <p className='text-sm'>
          This information helps us connect you with local donors and resources.
        </p>
      </div>

      <div className='flex w-full justify-center flex-col gap-2'>
        <select className=' p-3 border-1 w-full' name='Country' id=''>
          <option value='US'>United States</option>
          <option value='CA'>Canada</option>
        </select>
        {statesList && (
          <select
            className=' p-3 border-1 w-full'
            name='State/Province'
            id=''
            onChange={(e) => {
              setCurrentState(e.target.value);
            }}
          >
            <option value='none'>Select a State</option>
            {statesList.map((state) => (
              <option key={state.id} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
        )}
        <input
          placeholder='Zip Code'
          type='text'
          className='p-3 border-red-400 border-2 w-full *:'
          onChange={(e) => {
            confirmZip(e.target.value, currentState);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Slide1;
