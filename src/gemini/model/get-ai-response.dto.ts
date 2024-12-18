import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class GenAIMessageDTO {
  @IsString()
  @IsNotEmpty()
  prompt: string;

  @IsString()
  @IsOptional()
  sessionId?: string;
}
