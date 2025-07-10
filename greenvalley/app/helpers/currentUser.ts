import { cache } from 'react';
import { getUserSession } from '../../lib/session';

// cache makes it so that if you call a function multiple times in 1 page load it only registers once
export const getCurrentUser = cache(async () => {
  return await getUserSession();
});
