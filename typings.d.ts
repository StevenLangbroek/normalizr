interface EntitySchemaOptions {
  idAttribute?: string | Function;
}

interface IterableSchemaOptions {
  schemaAttribute?: string | Function;
}

interface UnionSchemaOptions {
  schemaAttribute?: string | Function;
}

type NormalizeOptions = {
  assignEntity?: Function;
  mergeIntoEntity?: Function;
}

type NormalizeInput = Object | Array<Object>;

type NormalizeOutput = {
  result: any;
  entities?: any;
}

class EntitySchema {
  constructor (key: string, options?: EntitySchemaOptions);

  define(schema: SchemaMap): this;
  mappedBy(attr: string): this;
  getKey(): string;
  getIdAttribute(): string;
}

class IterableSchema {
}

class UnionSchema {
}

type SchemaValue = EntitySchema | IterableSchema | UnionSchema | SchemaMap;

interface SchemaMap {
  [key: string]: SchemaValue;
}

export function arrayOf(
  schema: SchemaValue,
  options?: IterableSchemaOptions
): IterableSchema;

export function valuesOf(
  schema: SchemaValue,
  options?: IterableSchemaOptions
): IterableSchema;

export function unionOf(
  schema: SchemaValue,
  options?: UnionSchemaOptions
): UnionSchema;

export function normalize(
  input: NormalizeInput,
  schema: SchemaValue,
  options?: NormalizeOptions
): NormalizeOutput;

export {EntitySchema as Schema};
