import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    getNote(): any[];
    getNoteSearch(id: string): any;
    createNote(body: CreateNoteDto): {
        message: string;
    };
    updateNote(id: string, body: any): any;
    deleteNote(id: string): {
        message: string;
    };
}
