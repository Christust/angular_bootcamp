export enum Level {
  'Info' = 'Info',
  'Ugent' = 'Urgent',
  'Blocking' = 'Blocking',
}

export interface ITask {
  title: string;
  description: string;
  completed: boolean;
  level: Level;
}
