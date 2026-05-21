import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {

  private notes: any[] = [
    {
    id: 1,
    title: ' NestJS notes',
  },
  {
    id: 2,
    title: 'notes DTO',
  },
  ];

  getAllNotes() {
       return this.notes;
    //    return {message:'GET req success'}
    }

    getNotesById(id: number) {

  const note = this.notes.find(note => note.id === id);

  if (!note) {
    throw new NotFoundException('Note not found');
    // it stops the execution and send the error 
  }

  return note;
  // return {message:'search complete'}
}

  createNotes(note: CreateNoteDto) {
    this.notes.push(note);

    return {
      message: 'Note added successfully',
    };
  }

  updateNotes(id:number,updateData){
    const note=this.notes.find(note=>note.id===id)
    if(!note){
        throw new NotFoundException('note not found');
    }
    Object.assign(note,updateData);
    return note;
  }

  deleteNotes(id: number){
    const notesIndex = this.notes.findIndex(note=>note.id===id)
    if(notesIndex===-1){
        throw new NotFoundException('notes not found')
    }

    this.notes.splice(notesIndex,1)
    return {message: 'delete success'}
  }
}