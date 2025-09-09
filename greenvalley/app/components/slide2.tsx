'use client';
import React, { useState, useEffect } from 'react';
import { categoriesList, subcategoriesList } from '../helpers/campaignActions';
import { Category, Category_SubCategory, SubCategory } from 'lib/types';

const Slide2 = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [selectedCat, setSelectedCat] = useState<number>();

  const findSubCategories = async (categoryId: number) => {
    const subs: SubCategory[] | undefined = await subcategoriesList(categoryId);
    if (subs) {
      setSubCategories(subs);
    }
  };
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
      <form
        className='flex gap-2 flex-wrap'
        onChange={(e: any) => {
          setSelectedCat(e.target.value);
          findSubCategories(e.target.value);
        }}
      >
        {categories.map((category) => (
          <span className='relative ' key={category.name}>
            <input
              className='peer hidden'
              type='radio'
              id={`category${category.id}`}
              name={`categoryCampaign`}
              value={Number(category.id)}
            />
            <div className='border-2 border-[#697074] p-2 rounded-2xl text-sm peer-checked:bg-[#1d3e4e] transition peer-checked:text-white'>
              <label htmlFor={`category${category.id}`} key={category.id}>
                {category.name}
              </label>
            </div>
          </span>
        ))}
      </form>
      <p className='p-2'> Select the subcategories that describe your need</p>
      <div>
        {selectedCat &&
          subCategories.map((subCat) => (
            <span className='relative ' key={subCat.name}>
              <input
                className='peer hidden'
                type='radio'
                id={`subCat${subCat.id}`}
                name={`categoryCampaign`}
                value={Number(subCat.id)}
              />
              <div className='border-2 border-[#697074] p-2 rounded-2xl text-sm peer-checked:bg-[#1d3e4e] transition peer-checked:text-white'>
                <label htmlFor={`subCat${subCat.id}`} key={subCat.id}>
                  {subCat.name}
                </label>
              </div>
            </span>
          ))}
      </div>
    </div>
  );
};

export default Slide2;
