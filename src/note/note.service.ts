import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AddNoteDTO, UpdateNoteDTO } from './DTO/note.dto';

@Injectable()
export class NoteService {
  constructor(private prismaService: PrismaService) {}

  getNotes(userId: number) {
    return this.prismaService.note.findMany({ where: { userId: userId } });
  }

  getNoteById(noteId: number) {}

  async addNote(userId: number, addNoteDTO: AddNoteDTO) {
    const note = await this.prismaService.note.create({
      data: { ...addNoteDTO, userId },
    });
    return note;
  }

  async updateNote(noteId: number, updateNoteDTO: UpdateNoteDTO) {
    const note = await this.prismaService.note.update({
      where: { id: noteId },
      data: { ...updateNoteDTO },
    });
    return note;
  }

  deleteNoteById(noteId: number) {
    return this.prismaService.note.delete({ where: { id: noteId } });
  }
}
