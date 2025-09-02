'use server';
import { SmartyObj, State } from 'lib/types';
import prisma from '../../lib/prisma';

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

export async function validateZip(zip: string, state: string) {
  try {
    const request = await fetch(
      `https://us-zipcode.api.smarty.com/lookup?auth-id=19944b2d-ee34-ec01-ebdc-690cd4a2eafd&auth-token=1lzfgWS0zyHGMX1XiDnG&zipcode=${zip}`
    );
    const result: SmartyObj = await request.json();
    console.log(result);
    if (result.zipcodes.length === 1) {
      if (result.zipcodes[0].state === state) {
        return result;
      } else {
        return false;
      }
    } else {
      result.zipcodes.map((zipcode) => {
        if (zipcode.state === state) return result;
        else return false;
      });
    }
  } catch (e) {
    console.log('Error validating zip code:', e);
    return console.error(e);
  }
}
