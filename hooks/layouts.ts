import { useEffect } from 'react';
import createPersistedState from 'use-persisted-state';

const useLayoutState = createPersistedState('layouts');

export function useLayouts() {
    const [layouts, updateLayouts] = useLayoutState([]);
    return [layouts, (layout) => updateLayouts([...layouts, layout])];
}