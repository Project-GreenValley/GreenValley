'use client';
import React, { FC, useEffect, useState } from 'react';
import { states, validateZip } from '../helpers/campaignActions';
import { SlideProps, SmartyObj, State } from '../../lib/types';

const Slide1: FC<SlideProps> = ({ isValid, props, slideInfo }) => {
  const slide1Info = slideInfo.slideInfo.slide1Info;
  const [statesList, setStatesList] = useState<State[] | null>([]);
  const [currentState, setCurrentState] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  useEffect(() => {
    const findStates = async (country_code: string) => {
      const foundStates: State[] | null = await states(country_code);
      setStatesList(foundStates);
      return foundStates;
    };
    findStates('US');
  }, []);

  const confirmZip = async (zip: string, state: string) => {
    setZip(zip);
    if (zip.length < 5) {
      props.setIsValid((prev: any) => {
        return { ...prev, slide1: false };
      });
      return false;
    }

    if (state === 'none' || state === '' || state === undefined) {
      props.setIsValid((prev: any) => {
        return { ...prev, slide1: false };
      });
      return false;
    }
    const currentInfo: SmartyObj | false | void = await validateZip(zip, state);
    // console.log('This is current info', currentInfo);
    // console.log(zip, state);
    if (currentInfo) {
      // console.log('function is running');
      slideInfo.setSlideInfo((prev: any) => ({
        ...prev,
        ['slide1Info']: {
          zipcode: zip,
          state: currentState,
          country: 'US',
        },
      }));
      props.setIsValid((prev: any) => {
        return { ...prev, slide1: true };
      });
    } else {
      props.setIsValid((prev: any) => {
        return { ...prev, slide1: false };
      });
    }

    return currentInfo;
  };
  // console.log('This is slide1Info', slide1Info);
  // console.log('This is the status ', isValid);
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
        </select>
        {statesList && (
          <select
            className=' p-3 border-1 w-full'
            name='State/Province'
            id=''
            onChange={(e) => {
              confirmZip(zip, e.target.value);
              setCurrentState(e.target.value);
            }}
          >
            <option value='none'>
              {slide1Info.state ? `${slide1Info.state}` : 'Select a State'}
            </option>
            {statesList.map((state) => (
              <option key={state.id} value={state.code}>
                {state.code}
              </option>
            ))}
          </select>
        )}
        <input
          placeholder={
            slide1Info.zipcode != '' ? slide1Info.zipcode : `Zip Code`
          }
          type='text'
          className={`appearance-none p-3 ${
            (isValid && zip.length) || slide1Info.zipcode > 4
              ? 'border-green-400'
              : 'border-red-400'
          } border-2 w-full`}
          onChange={(e) => {
            confirmZip(e.target.value, currentState);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Slide1;
