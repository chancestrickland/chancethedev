import { Element } from '$lib/types';

export { default } from './Pagination';

////////////////////////////////////////////////////////////////////////////////
// TYPES
////////////////////////////////////////////////////////////////////////////////
export interface PaginationProps extends Element<'nav'> {
  previousPagePath?: string | null;
  nextPagePath?: string | null;
}