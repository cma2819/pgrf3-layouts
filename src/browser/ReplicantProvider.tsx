import { clone } from 'lodash';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { RunnerScores } from '../nodecg/generated';
import { BundleNodecgInstance } from '../nodecg/nodecg';

interface Replicants {
  scores: RunnerScores;
}

const defaultValues: Replicants = {
  scores: [],
};

export const ReplicantContext = createContext<Replicants>(defaultValues);

type Props = {
  children: ReactNode;
}

export const ReplicantProvider = ({ children }: Props) => {

  const [scores, setScores] = useState<RunnerScores>(defaultValues.scores);

  useEffect(() => {
    (nodecg as BundleNodecgInstance).Replicant('runner-scores').on('change', (newVal: RunnerScores) => {
      setScores(clone(newVal));
    });
  }, [])

  return (
    <ReplicantContext.Provider value={{scores}}>
      { children }
    </ReplicantContext.Provider>
  );
}