// Set up tests to include jest-dom matchers
// fix lint errors using code from
// https://github.com/testing-library/jest-dom/issues/439#issuecomment-1536524120
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

declare module 'vitest' {
  interface Assertion<T = any>
    extends jest.Matchers<void, T>,
      TestingLibraryMatchers<T, void> {}
}

expect.extend(matchers);
