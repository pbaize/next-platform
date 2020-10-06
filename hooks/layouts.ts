import createPersistedState from 'use-persisted-state';

const useLayoutState = createPersistedState('layouts');

export default function useLayouts() {
    const [layouts, updateLayouts] = useLayoutState([]);
    return [layouts, (layout) => updateLayouts([...layouts, layout])];
}