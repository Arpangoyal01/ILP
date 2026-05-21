"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
let NotesService = class NotesService {
    notes = [
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
    }
    getNotesById(id) {
        const note = this.notes.find(note => note.id === id);
        if (!note) {
            throw new common_1.NotFoundException('Note not found');
        }
        return note;
    }
    createNotes(note) {
        this.notes.push(note);
        return {
            message: 'Note added successfully',
        };
    }
    updateNotes(id, updateData) {
        const note = this.notes.find(note => note.id === id);
        if (!note) {
            throw new common_1.NotFoundException('note not found');
        }
        Object.assign(note, updateData);
        return note;
    }
    deleteNotes(id) {
        const notesIndex = this.notes.findIndex(note => note.id === id);
        if (notesIndex === -1) {
            throw new common_1.NotFoundException('notes not found');
        }
        this.notes.splice(notesIndex, 1);
        return { message: 'delete success' };
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)()
], NotesService);
//# sourceMappingURL=notes.service.js.map