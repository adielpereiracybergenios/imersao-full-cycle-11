export interface Repository<T> {
  create: (dto: T) => Promise<T>;
  find: () => Promise<T[]>;
  findById: (id: string) => Promise<T>;
  update: (id: string, dto: Partial<T>) => Promise<boolean>;
  delete: (id: string) => Promise<void>;
}
