import { CreateNoteDto } from './dto/create-note.dto';
export declare class NotesService {
    private notes;
    getAllNotes(): any[];
    getNotesById(id: number): any;
    createNotes(note: CreateNoteDto): {
        message: string;
    };
    updateNotes(id: number, updateData: any): any;
    deleteNotes(id: number): {
        message: string;
    };
}
