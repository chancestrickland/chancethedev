import { Element } from '$lib/types';

export { default } from './Container';

////////////////////////////////////////////////////////////////////////////////
// TYPES
////////////////////////////////////////////////////////////////////////////////
export interface ContainerProps extends Element<'div'> {
  fullWidth?: boolean;
  maxWidth?: number | string;
}
