import createPersistedState from 'use-persisted-state';

const useSnapshotState = createPersistedState('snapshots');

export default function useSnapshots() {
    const [snapshots, updateSnapshots] = useSnapshotState([]);
    return [snapshots, (snapshot) => updateSnapshots([...snapshots, snapshot])];
}