import { NotImplementedException } from '@nestjs/common';
import { Team } from 'src/domain/entities/team.entity';
import { Repository } from 'src/domain/repositories/repository';

export class TeamRepository implements Repository<Team> {
  async create(dto: Team): Promise<Team> {
    return dto;
  }

  async find(): Promise<Team[]> {
    throw new NotImplementedException();
  }

  async findById(id: string): Promise<Team> {
    throw new NotImplementedException();
  }

  async update(id: string, dto: Partial<Team>): Promise<boolean> {
    throw new NotImplementedException();
  }

  async delete(id: string): Promise<void> {
    throw new NotImplementedException();
  }
}
