import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { MyJwtGuard } from '../auth/strategy/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { GetUser } from '../decorators/user.decorator';
import { User } from '@prisma/client';
import { AddNoteDTO, UpdateNoteDTO } from './DTO/note.dto';

@UseGuards(MyJwtGuard) //co token user moi xem note duoc
@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get()
  getNotes(@GetUser('id') userId: any) {
    return this.noteService.getNotes(userId.id);
  }

  @Get(':id')
  getNoteById(@Param() noteId: number) {
    return this.noteService.getNoteById(noteId);
  }

  @Post('add')
  addNote(@GetUser() userId: any, @Body() data: AddNoteDTO) {
    // console.log(userId.id, data);
    return this.noteService.addNote(userId.id, data);
  }

  @Patch('edit/:id')
  updateNote(
    @Param('id', ParseIntPipe) noteId: number,
    @Body() data: UpdateNoteDTO,
  ) {
    return this.noteService.updateNote(noteId, data);
  }

  @Delete('delete/:id')
  deleteNoteById(@Param('id', ParseIntPipe) noteId: number) {
    return this.noteService.deleteNoteById(noteId);
  }
}
