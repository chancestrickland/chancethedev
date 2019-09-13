import { useEffect } from 'react';
import { getBreakpointQueryObject } from '$lib/utils';
import { useMediaLayout } from './useMedia';

export const useBreakpoint = (
  bpQuery: string | number,
  defaultState: boolean = false,
  toRem: boolean = true
) => {
  const queryObject = getBreakpointQueryObject(bpQuery, toRem);
  const matches = useMediaLayout(queryObject, defaultState);
  return typeof window !== 'object' ? false : matches;
};
