import { Store } from 'n3'

export type Options = {
  baseURI?: string
  folder: string
  middlewares?: Array<(context: QueryContext, next: any) => Promise<void>>
}

export type selectQuery = `SELECT${string}`;
export type describeQuery = `DESCRIBE${string}`;

export type TermValue = {
  value: string,
  type: string,
  language?: string
}

export type DefaultBindings = 's' | 'p' | 'o'

export type QueryContext = {
  query: string,
  store: Store
  engine: Engine
  results?: any,
  eventTarget: EventTarget
}

export type Engine = {
  query: (query: string, options: { [key: string]: any }) => Promise<any>,
  resultToString: (data: any, type: string) => any
}