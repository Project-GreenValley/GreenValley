'use server';
import { Category, SmartyObj, State, SubCategory } from 'lib/types';
import prisma from '../../lib/prisma';
import { category_subcategory } from '@/generated/prisma';

export async function states(country_code: string): Promise<State[] | null> {
  try {
    const USstates: State[] = await prisma.states.findMany({
      where: {
        country_code: country_code,
      },
    });
    return USstates;
  } catch (e) {
    console.log('Error finding states:', e);
    return null;
  }
}

export async function validateZip(
  zip: string,
  state: string
): Promise<SmartyObj | false | void> {
  try {
    const request = await fetch(
      `https://us-zipcode.api.smarty.com/lookup?auth-id=19944b2d-ee34-ec01-ebdc-690cd4a2eafd&auth-token=1lzfgWS0zyHGMX1XiDnG&zipcode=${zip}`
    );
    const result: SmartyObj = await request.json();

    if (result[0].zipcodes.length === 1) {
      if (result[0].zipcodes[0].state_abbreviation === state) {
        return result;
      } else {
        return false;
      }
    } else {
      result[0].zipcodes.map((zipcode) => {
        if (zipcode.state === state) return result;
        else return false;
      });
    }
  } catch (e) {
    console.log('Error validating zip code:', e);
    return console.error(e);
  }
}

export async function categoriesList(): Promise<Category[] | null> {
  try {
    const categories: Category[] = await prisma.category.findMany();
    return categories;
  } catch (e) {
    console.log('Error fetching categories:', e);
    return null;
  }
}

export async function subcategoriesList(categoryId: number) {
  try {
    //const subList: SubCategory[] = [];
    const subcategories: category_subcategory[] =
      //this waits for each await before moving on thats why it works
      await prisma.category_subcategory.findMany({
        where: {
          category_id: categoryId,
        },
      });

    //This works but is slower than the map method
    // for (let i = 0; i < subcategories.length; i++) {
    //   const subCat: SubCategory | null = await prisma.subcategory.findUnique({
    //     where: {
    //       id: subcategories[i].subcategory_id,
    //     },
    //   });

    //   if (subCat) {
    //     console.log('This is subCat', subCat);
    //     subList.push(subCat);
    //   }
    // }

    //these are not very good for async calls what happens is map doesnt wait for the async callback
    //it returns an array of promises so the subList is always empty
    // and the code contimues before the promises resolve which is why it stays empty
    // to fix this you need to add an await Promise.all to the begining as so
    // *const subList = await Promise.all(subcategories.map(async (sub) => {
    //   const subCat: SubCategory | null = await prisma.subcategory.findUnique({
    //     where: {
    //       id: sub.subcategory_id,
    //     },
    //   });
    //*)

    //   if (subCat) {
    //     console.log('This is subCat', subCat);
    //     subList.push(subCat);
    //   }
    // });

    const subList: (SubCategory | null)[] = await Promise.all(
      subcategories.map(async (sub) => {
        return prisma.subcategory.findUnique({
          where: {
            id: sub.subcategory_id,
          },
        });
      })
    );

    const filteredList = subList.filter((subCat) => subCat != null);
    return filteredList;
  } catch (e) {
    console.log('Error fetching subcategories:', e);
  }
}
