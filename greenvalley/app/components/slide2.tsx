'use client';
import React, { useState, useEffect, FC } from 'react';
import {
  categoriesList,
  subcategoriesList,
  findRelevantSubCategory,
  findRelevantCategory,
} from '../helpers/campaignActions';
import { Category, SlideProps, SubCategory } from 'lib/types';

const Slide2: FC<SlideProps> = ({ isValid, props, slideInfo }) => {
  const slide2Info = slideInfo.slideInfo.slide2Info;
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [selectedCat, setSelectedCat] = useState<{ [key: string]: Category }>(
    {}
  );
  const [selectedSubCats, setSelectedSubCats] = useState<{
    [key: number]: SubCategory;
  }>({});
  useEffect(() => {
    if (slide2Info?.category) {
      setSelectedCat(slide2Info.category);
    }

    const firstCat = Object.keys(slide2Info.category)[0];
    if (firstCat) {
      const catId = slide2Info.category[firstCat].id;
      findSubCategories(catId);
    }

    if (slide2Info?.subcategories) {
      setSelectedSubCats(slide2Info.subcategories);
    }
  }, []);
  const findSubCategories = async (categoryId: number) => {
    console.log('Fetching subCategories');
    const subs: SubCategory[] | undefined = await subcategoriesList(categoryId);
    if (subs) {
      // console.log('These are the subcategories', subs);
      setSubCategories(subs);
    }
  };
  const findCategories = async () => {
    const cats = await categoriesList();

    if (cats) {
      setCategories(cats);
    }
  };
  const handleCategory = async (categoryId: number) => {
    const foundCat: Category | null = await findRelevantCategory(
      Number(categoryId)
    );

    if (!foundCat) return;

    setSelectedCat(() => {
      const updated = { [foundCat.name]: foundCat };
      props.setIsValid((prev: any) => {
        return { ...prev, slide2: false };
      });
      setSelectedSubCats({});
      // slideInfo.setSlideInfo((prev: any) => ({
      //   ...prev,
      //   slide2Info: {
      //     category: updated,
      //     subcategories: {},
      //   },
      // }));

      return updated;
    });
    // if (foundCat && selectedCat[foundCat.name]) {
    //   const updatedCat = { ...selectedCat };
    //   delete updatedCat[categoryId];
    //   setSelectedCat(updatedCat);
    //   setSelectedSubCats({});
    //   console.log('Selected category:', selectedCat);
    //   return;
    // }

    // if (foundCat) {
    //   setSelectedCat(() => ({
    //     [foundCat.name]: foundCat,
    //   }));
    //   console.log('Selected category:', selectedCat);
    // }
  };
  const handleSubCat = async (e: any) => {
    const Id = e.target.value;
    const foundSubCat = await findRelevantSubCategory(Number(Id));

    setSelectedSubCats((prev) => {
      let updatedSubCats = { ...prev };

      if (prev[Id]) {
        delete updatedSubCats[Id];
      } else if (foundSubCat) {
        updatedSubCats[Id] = foundSubCat;
      } else {
        updatedSubCats = prev;
      }
      props.setIsValid((prev: any) => {
        return { ...prev, slide2: true };
      });

      if (Object.keys(updatedSubCats).length === 0) {
        console.log('No more in subcatsList');
        props.setIsValid((prev: any) => {
          return { ...prev, slide2: false };
        });
      }
      return updatedSubCats;
    });
  };
  console.log('This is the seconds slides Info', slide2Info);

  useEffect(() => {
    findCategories();
  }, []);
  useEffect(() => {
    slideInfo.setSlideInfo((prev: any) => ({
      ...prev,
      ['slide2Info']: {
        category: selectedCat,
        subcategories: selectedSubCats,
      },
    }));
  }, [selectedCat, selectedSubCats]);
  return (
    <div className='h-full'>
      <p className='p-2'>Which category best describes your campaign?</p>
      <form className='flex gap-2 flex-wrap'>
        {categories.map((category) => (
          <span className='relative ' key={category.name}>
            <input
              className='peer hidden'
              type='radio'
              id={`category${category.id}`}
              name={`categoryCampaign`}
              value={Number(category.id)}
              checked={slide2Info.category[category.name] ? true : false}
              onChange={(e: any) => {
                handleCategory(e.target.value);
                findSubCategories(e.target.value);
              }}
            />
            <div className='border-2 border-[#697074] p-2 rounded-2xl text-sm peer-checked:bg-[#1d3e4e] transition peer-checked:text-white text-center'>
              <label htmlFor={`category${category.id}`} key={category.id}>
                {category.name}
              </label>
            </div>
          </span>
        ))}
      </form>
      {(selectedCat || slide2Info.category != '') && (
        <p className='p-2'>
          {' '}
          Select at least 1 subcategory that fits your needs
        </p>
      )}
      <form className='w-full p-1'>
        <div className='flex flex-wrap gap-2'>
          {selectedCat &&
            subCategories.map((subCat) => (
              <span className='' key={subCat.name}>
                <input
                  className='peer hidden'
                  type='checkbox'
                  id={`subCat${subCat.id}`}
                  name={`categoryCampaign`}
                  value={Number(subCat.id)}
                  checked={
                    !!selectedSubCats[Number(subCat.id)] ||
                    slide2Info.subcategories[Number(subCat.id)]
                      ? true
                      : false
                  }
                  onChange={handleSubCat}
                />
                <div className='border-2 border-[#697074] p-2 rounded-2xl text-sm peer-checked:bg-[#9fe3d2] transition peer-checked:text-white text-center'>
                  <label htmlFor={`subCat${subCat.id}`} key={subCat.id}>
                    {subCat.name}
                  </label>
                </div>
              </span>
            ))}
        </div>
      </form>
    </div>
  );
};

export default Slide2;
