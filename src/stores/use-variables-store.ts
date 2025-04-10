import { dummyVariables } from '@/lib/dummy-variables';
import { create } from 'zustand';

export interface Variable {
  id: string;
  name: string;
  category: string;
  selected: boolean;
  value: string;
  description: string;
  contextDescription: string;
}

interface VariablesState {
  variables: Variable[];
  setVariables: (variables: Variable[]) => void;
  toggleVariable: (id: string) => void;
  getSelectedVariables: () => Variable[];
}

export const useVariablesStore = create<VariablesState>(
  (set, get): VariablesState => ({
    variables: dummyVariables,

    setVariables: (variables: Variable[]) => set({ variables }),

    toggleVariable: (id: string) =>
      set((state: VariablesState) => ({
        variables: state.variables.map((variable: Variable) =>
          variable.id === id
            ? { ...variable, selected: !variable.selected }
            : variable,
        ),
      })),

    getSelectedVariables: () =>
      get().variables.filter((variable: Variable) => variable.selected),
  }),
);
