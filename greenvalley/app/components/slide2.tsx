'use client';
import React, { useState, useEffect } from 'react';
import { categoriesList } from '../helpers/campaignActions';
import { Category } from 'lib/types';
const Slide2 = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const findCategories = async () => {
    const cats = await categoriesList();

    if (cats) {
      setCategories(cats);
    }
  };
  useEffect(() => {
    findCategories();
  }, []);
  return (
    <div>
      <p className='p-2'>Which category best describes your campaign?</p>
      <div className='flex gap-2 flex-wrap'>
        {categories.map((category) => (
          <div className={`border-2 p-2 rounded-2xl text-sm`} key={category.id}>
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide2;
