import { CreateNodecgConstructor, CreateNodecgInstance } from 'ts-nodecg/browser';
import { Configschema } from './generated/configschema';
import { MessageMap } from './messages';
import { ReplicantMap } from './replicants';

export type BundleNodecgInstance = CreateNodecgInstance<
  'pgrf3-layouts',
  Configschema,
  ReplicantMap,
  MessageMap
>;

export type BundleNodecgConstructor = CreateNodecgConstructor<
  'pgrf3-layouts',
  Configschema,
  ReplicantMap,
  MessageMap
>;