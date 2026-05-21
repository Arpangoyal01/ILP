import { Body, Controller, Delete, Get, Param, Post, Patch} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto'

@Controller('notes')
export class NotesController {

  constructor(private notesService: NotesService) {}

  @Get()
  getNote() {
    return this.notesService.getAllNotes();
  }

  @Get(':id')
  getNoteSearch(@Param('id') id:string){
    return this.notesService.getNotesById(Number(id))
  }

  @Post()
  createNote(@Body() body: CreateNoteDto) {
    return this.notesService.createNotes(body);
  }

  @Patch(':id')
  updateNote(@Param('id')id:string,@Body()body){
    return this.notesService.updateNotes(Number(id),body)
  }
  
  @Delete(':id')
  deleteNote(@Param('id') id: string) {
  return this.notesService.deleteNotes(Number(id));
}
  
}