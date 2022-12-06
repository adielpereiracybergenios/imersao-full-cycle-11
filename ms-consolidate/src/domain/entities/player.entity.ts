import { Entity } from 'src/domain/entities/entitiy';

export interface Player extends Entity {
  name: string;
  price: number;
}
