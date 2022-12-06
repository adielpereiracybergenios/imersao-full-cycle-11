import { Player } from 'src/domain/entities/player.entity';
import { Entity } from 'src/domain/entities/entitiy';

export interface Team extends Entity {
  name: string;
  players: Player[];
}
