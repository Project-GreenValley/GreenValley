'use client';
import { SlideProps } from 'lib/types';
import React, { FC, useEffect, useState } from 'react';

const Slide3: FC<SlideProps> = ({ isValid, props, slideInfo }) => {
  const slide3Info = slideInfo.slideInfo.slide3Info;
  const [campaignName, setCampaignName] = useState<string>('');
  const [tagLine, setTagline] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [isWebsiteValid, setIsWebsiteValid] = useState<boolean>(false);

  const handleSlide3 = () => {
    slideInfo.setSlideInfo((prev: any) => {
      console.log('This is the third slides info ', slide3Info);
      console.log('This is the website info', website);
      return {
        ...prev,
        ['slide3Info']: {
          campaignName: campaignName,
          tagline: tagLine,
          description: description,
          website: website,
        },
      };
    });
  };

  function isValidURL(urlstring: string) {
    let url;
    try {
      if (website.trim() === '') {
        setIsWebsiteValid(true);
      }
      url = new URL(urlstring);
      setIsWebsiteValid(true);
    } catch (_) {
      setIsWebsiteValid(false);
    }
  }

  function allFieldsFilled() {
    if (
      (campaignName.trim() && tagLine.trim() && description.trim()) !== '' &&
      (isWebsiteValid === true || website.trim() === '')
    ) {
      props.setIsValid((prev: any) => {
        return { ...prev, slide3: true };
      });
    } else {
      props.setIsValid((prev: any) => {
        return { ...prev, slide3: false };
      });
    }
  }

  useEffect(() => {
    handleSlide3();
    allFieldsFilled();
  }, [campaignName, tagLine, description, website, isWebsiteValid]);

  return (
    <div>
      <form className='flex flex-col p-2 gap-5'>
        <div className='flex flex-col gap-1'>
          <label>Campaign Name:</label>
          <input
            className='block w-full border-b border-[#638495] text-sm'
            name='campaignName'
            type='text'
            maxLength={50}
            onChange={(e) => setCampaignName(() => e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Tagline: </label>
          <input
            className='appearance-none block w-full border-b border-[#638495] text-sm '
            name='tagline'
            type='text'
            maxLength={100}
            onChange={(e) => setTagline(() => e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label>Description: </label>
          <textarea
            className={`block w-full text-sm p-2.5 text-gray-900 border border-[#638495] rounded-lg`}
            name='description'
            rows={4}
            maxLength={500}
            onChange={(e) => setDescription(() => e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Website {`(optional)`}</label>
          <input
            name='website'
            type='text'
            className='appearance-none block w-full border-b border-[#638495] text-sm'
            onChange={(e) => {
              setWebsite(() => e.target.value);
              isValidURL(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Slide3;
