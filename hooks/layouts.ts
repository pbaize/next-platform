import createPersistedState from 'use-persisted-state';

const useLayoutState = createPersistedState('layouts');

export default function useLayouts() {
    const [layouts, updateLayouts] = useLayoutState([]);
    return [layouts, (layout) => updateLayouts([...layouts, layout])];
}

// npm i -S openfin-adapter

// tsconfig: => skipLibCheck: true

// react ? react-app-env.ts.d -> 