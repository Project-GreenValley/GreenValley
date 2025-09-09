export type Users = {
  id: bigint;
  email: string;
  password: string;
  salt: string;
  name: string;
  created_at: Date;
  bio: string | null;
  google_id: string | null;
};
export interface Slide1Props {
  isValid: boolean;
  props: any;
  slideInfo: any;
}

export type State = {
  id: bigint;
  code: string;
  name: string;
  country_code: string;
};

export type Category = {
  name: string;
  id: number | bigint;
  description: string | null;
};
export type Category_SubCategory = {
  id: bigint;
  category_id: bigint;
  subcategory_id: bigint;
};

export type SubCategory = {
  id: number | bigint;
  name: string;
  description: string | null;
};

export type SmartyObj = {
  input_index: number;
  city_states: {
    city: string;
    state_abbreviation: string;
    state: string;
    mailable_city: boolean;
  }[];
  zipcodes: {
    zipcode: string;
    zipcode_type: string;
    default_city: string;
    county_flips: string;
    county_name: string;
    state_abbreviation: string;
    state: string;
    latitude: number;
    longitude: number;
    precision: string;
  }[];
}[];
