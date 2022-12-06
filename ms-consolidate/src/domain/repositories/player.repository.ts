import { NotImplementedException } from '@nestjs/common';
import { Repository } from 'src/domain/repositories/repository';
import { Player } from 'src/domain/entities/player.entity';

export class PlayerRepository implements Repository<Player> {
  async create(dto: Player): Promise<Player> {
    throw new NotImplementedException();
  }

  async find(): Promise<Player[]> {
    throw new NotImplementedException();
  }

  async findById(id: string): Promise<Player> {
    throw new NotImplementedException();
  }

  async update(id: string, dto: Partial<Player>): Promise<boolean> {
    throw new NotImplementedException();
  }

  async delete(id: string): Promise<void> {
    throw new NotImplementedException();
  }
}
